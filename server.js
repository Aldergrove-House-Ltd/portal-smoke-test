const http = require('http');

const port = Number(process.env.PORT) || 3000;
const started = new Date().toISOString();

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>portal-smoke-test · Aldergrove House</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --parchment: #E8DDC4;
      --charcoal: #2A2824;
      --gold: #A88542;
      --forest: #2E3F2F;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }
    body {
      font-family: ui-serif, Georgia, 'EB Garamond', serif;
      background: var(--parchment);
      color: var(--charcoal);
      display: grid;
      place-items: center;
      padding: 2rem;
      line-height: 1.4;
    }
    main { max-width: 42rem; }
    .eyebrow {
      font-family: ui-monospace, 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--forest);
    }
    h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 400;
      letter-spacing: -0.015em;
      line-height: 1.03;
      margin-top: 1.5rem;
    }
    h1 em {
      color: var(--gold);
      font-style: italic;
    }
    p { margin-top: 1.5rem; max-width: 36rem; }
    code {
      font-family: ui-monospace, 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      background: rgba(42, 40, 36, 0.08);
      padding: 0.1rem 0.4rem;
    }
    .meta {
      margin-top: 3rem;
      font-family: ui-monospace, 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: rgba(42, 40, 36, 0.6);
    }
    .meta span { display: block; margin-top: 0.25rem; }
  </style>
</head>
<body>
  <main>
    <p class="eyebrow">Portal smoke test</p>
    <h1>If you can read this,<br/><em>the pipeline works.</em></h1>
    <p>
      This repo exists only to prove that a public GitHub repo attached in the
      Aldergrove House portal can be built by Coolify and served on a
      <code>*.aldergrovehouse.com</code> subdomain. It will be deleted once the
      private-repo flow is ready.
    </p>
    <div class="meta">
      <span>Node.js ${process.version}</span>
      <span>Listening on port ${port}</span>
      <span>Server started: ${started}</span>
    </div>
  </main>
</body>
</html>`;

http
  .createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, started }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  })
  .listen(port, () => {
    console.log(`portal-smoke-test listening on ${port}`);
  });
