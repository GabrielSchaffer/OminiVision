// Local static server. Mirrors the Vercel layout: / serves the app and /api/ical runs the calendar proxy.
// Some office networks intercept HTTPS with a private certificate. This file is not used on Vercel.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const http = require('http');
const fs = require('fs');
const path = require('path');

function loadEnv(file) {
  let text;
  try { text = fs.readFileSync(file, 'utf8'); } catch (e) { return; }
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const i = trimmed.indexOf('=');
    if (i < 1) continue;
    const key = trimmed.slice(0, i).trim();
    let value = trimmed.slice(i + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    if (process.env[key] == null || process.env[key] === '') process.env[key] = value;
  }
}
loadEnv(path.join(__dirname, '.env'));

const ical = require('./api/ical');
const suggest = require('./api/suggest');
const improve = require('./api/improve');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.sql': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

function safeFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const rel = decoded === '/' ? '/Pauta.dc.html' : decoded;
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT)) return null;
  return file;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8');
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); } catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

function adaptResponse(res) {
  const api = {
    statusCode: 200,
    setHeader(name, value) {
      res.setHeader(name, value);
      return api;
    },
    status(code) {
      api.statusCode = code;
      return api;
    },
    send(body) {
      res.statusCode = api.statusCode;
      res.end(body == null ? '' : body);
    },
  };
  return api;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1');

  if (url.pathname === '/api/ical') {
    const query = Object.fromEntries(url.searchParams.entries());
    ical({ query, method: req.method }, adaptResponse(res));
    return;
  }

  if (url.pathname === '/api/suggest') {
    readBody(req).then((body) => {
      suggest({ method: req.method, body }, adaptResponse(res));
    }).catch(() => {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ error: 'Pedido inválido' }));
    });
    return;
  }

  if (url.pathname === '/api/improve') {
    readBody(req).then((body) => {
      improve({ method: req.method, body }, adaptResponse(res));
    }).catch(() => {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ error: 'Pedido inválido' }));
    });
    return;
  }

  const file = safeFile(url.pathname);
  if (!file) {
    res.statusCode = 400;
    res.end('Bad path');
    return;
  }

  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Not found');
      return;
    }
    const ext = path.extname(file).toLowerCase();
    res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('Omni Vision em http://localhost:' + PORT);
});
