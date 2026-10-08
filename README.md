# portal-smoke-test

Minimal public Node.js app used to validate the Aldergrove House portal deploy
pipeline (`https://portal.aldergrovehouse.com` → Coolify → Hetzner).

Delete once the private-repo deploy flow lands.

## What it does

- Single `server.js` using Node's built-in `http` module.
- Listens on `process.env.PORT || 3000`.
- Returns a brand-coloured "the pipeline works" page.
- Health check at `/health`.

No build step, no deps. Nixpacks detects Node.js from `package.json` and runs
`npm start`.
