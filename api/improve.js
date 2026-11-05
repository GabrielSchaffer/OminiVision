// Rewrites a project objective with Gemini. The API key stays on the server.
// A short rewrite does not need the heavier models used for task suggestions.
const MODELS = (process.env.GEMINI_IMPROVE_MODEL || 'gemini-2.5-flash,gemini-2.5-flash-lite,gemini-3.5-flash-lite')
  .split(',')
  .map((name) => name.trim())
  .filter(Boolean);

function clean(text) {
  let out = String(text || '').trim();
  out = out.replace(/^```[a-z]*\s*/i, '').replace(/\s*```$/, '').trim();
  if ((out.startsWith('"') && out.endsWith('"')) || (out.startsWith('“') && out.endsWith('”'))) out = out.slice(1, -1).trim();
  return out.slice(0, 4000);
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
  const name = String(body.name || '').trim().slice(0, 200) || 'Projeto sem título';
  const text = String(body.text || '').trim().slice(0, 4000);
  if (!text) {
    res.status(400).setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify({ error: 'Escreva o objetivo antes de melhorar a escrita.' }));
    return;
  }

  const prompt = [
    'Projeto: ' + name,
    '',
    'Texto atual:',
    text,
  ].join('\n');

  const bodyFor = (withBudget) => JSON.stringify({
    systemInstruction: {
      parts: [{ text: 'Você revisa o objetivo de um projeto. Entenda o que o autor quis dizer e reescreva só esse texto em português do Brasil, com clareza e gramática correta. Mantenha o sentido, os fatos e o tamanho aproximado. Não invente metas novas. Não use aspas, título, marcadores nem comentário. Devolva apenas o texto melhorado.' }],
    },
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: withBudget ? { maxOutputTokens: 1024, thinkingConfig: { thinkingBudget: 0 } } : { maxOutputTokens: 1024 },
  });

  let lastError = 'Não foi possível falar com o Gemini.';
  try {
    for (const model of MODELS) {
      let r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
        body: bodyFor(true),
      });
      let data = await r.json().catch(() => ({}));
      if (!r.ok && r.status === 400 && /thinking|budget|unsupported/i.test((data.error && data.error.message) || '')) {
        r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
          body: bodyFor(false),
        });
        data = await r.json().catch(() => ({}));
      }
      if (!r.ok) {
        lastError = data.error && data.error.message ? data.error.message : 'O Gemini respondeu ' + r.status;
        if (r.status === 404 || r.status === 429 || r.status === 503 || /high demand|try again|not found|unsupported/i.test(lastError)) continue;
        break;
      }
      const parts = (((data.candidates || [])[0] || {}).content || {}).parts || [];
      const joined = parts.filter((part) => !part.thought).map((part) => part.text || '').join('\n');
      const improved = clean(joined);
      if (!improved) {
        lastError = 'O Gemini não devolveu um texto.';
        continue;
      }
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.status(200).send(JSON.stringify({ text: improved }));
      return;
    }
    res.status(502).setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify({ error: 'Não foi possível melhorar a escrita. ' + lastError }));
  } catch (e) {
    res.status(502).setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify({ error: 'Não foi possível falar com o Gemini.' }));
  }
};
