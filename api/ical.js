// Vercel Serverless Function: lê o endereço secreto iCal da agenda e devolve o .ics
// (o navegador não consegue ler direto do Google por causa de CORS).
const ALLOWED = ['calendar.google.com', 'outlook.office365.com', 'outlook.live.com'];

module.exports = async (req, res) => {
  const raw = (req.query && req.query.url) || '';
  let u;
  try { u = new URL(String(raw).replace(/^webcal:/i, 'https:')); } catch (e) { res.status(400).send('URL inválida'); return; }
  const okHost = ALLOWED.includes(u.hostname) || u.hostname.endsWith('.icloud.com');
  if (u.protocol !== 'https:' || !okHost) { res.status(400).send('Endereço não permitido'); return; }
  try {
    const r = await fetch(u.toString(), { headers: { 'User-Agent': 'OmniVision/1.0' }, redirect: 'follow' });
    const text = await r.text();
    if (!r.ok) { res.status(r.status).send('A agenda respondeu ' + r.status); return; }
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.setHeader('Cache-Control', 'private, max-age=60');
    res.status(200).send(text);
  } catch (e) {
    console.error('ical fetch failed', e && e.cause ? e.cause.code || e.cause.message : e.message);
    res.status(502).send('Não foi possível ler a agenda');
  }
};
