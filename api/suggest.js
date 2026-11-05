// Suggests project tasks with Gemini. The API key stays on the server.
const MODELS = (process.env.GEMINI_MODEL || 'gemini-3.8-flash,gemini-3.6-flash,gemini-3.5-flash-lite,gemini-2.5-flash')
  .split(',')
  .map((name) => name.trim())
  .filter(Boolean);

function clip(value, max) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, max);
}

function tasksFromText(text) {
  return String(text || '')
    .split(/\r?\n/)
    .map((line) => line.replace(/^[-•*\d.)\s]+/, '').trim())
    .filter((line) => line && line.length <= 120)
    .slice(0, 5);
}

module.exports = async (req, res) => {
  if (req.method && req.method !== 'POST') {
    res.status(405).send('Use POST');
    return;
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    res.status(503).setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify({ error: 'Falta a chave do Gemini. Crie um arquivo .env com GEMINI_API_KEY e reinicie o servidor.' }));
    return;
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const name = clip(body.name, 200) || 'Projeto sem título';
  const notes = clip(body.notes, 4000);
  const existing = Array.isArray(body.existing) ? body.existing.map((t) => clip(t, 160)).filter(Boolean).slice(0, 40) : [];

  const prompt = [
    'Projeto: ' + name,
    'Notas:',
    notes || '(sem notas)',
    '',
    'Tarefas já existentes:',
    existing.length ? existing.join('\n') : '(nenhuma)',
    '',
    'Sugira de 3 a 4 tarefas novas, acionáveis e que ainda não existem.',
  ].join('\n');

  const payload = JSON.stringify({
    systemInstruction: {
      parts: [{ text: 'Você ajuda um gerente de produto a planejar. Responda apenas com tarefas, uma por linha, sem numeração, sem marcadores, em português do Brasil, verbo no infinitivo, até 9 palavras cada.' }],
    },
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { thinkingConfig: { thinkingLevel: 'low' } },
  });

  let lastError = 'Não foi possível falar com o Gemini.';
  try {
    for (const model of MODELS) {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': key,
        },
        body: payload,
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        lastError = data.error && data.error.message ? data.error.message : 'O Gemini respondeu ' + r.status;
        if (r.status === 404 || r.status === 429 || r.status === 503 || /high demand|try again|not found|unsupported/i.test(lastError)) continue;
        break;
      }
      const text = (((data.candidates || [])[0] || {}).content || {}).parts;
      const joined = Array.isArray(text) ? text.map((part) => part.text || '').join('\n') : '';
      const tasks = tasksFromText(joined);
      if (!tasks.length) {
        lastError = 'O Gemini não devolveu tarefas novas.';
        continue;
      }
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.status(200).send(JSON.stringify({ tasks }));
      return;
    }
    res.status(502).setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify({ error: 'Não foi possível sugerir tarefas. ' + lastError }));
  } catch (e) {
    res.status(502).setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify({ error: 'Não foi possível falar com o Gemini.' }));
  }
};
