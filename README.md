# Cox Automotive x SpaceXAI

Passworded site. Grok Bot from SpaceXAI, for Cox Automotive GTM.

## What it is

Three GTM jobs on one page. Each job has a short problem statement, an interactive Grok Bot demo, and the matching Krista Letz clips under that demo. Below that: a public Grok Bot quote wall and comparison.

The Cox Automotive wordmark loads only from the official remote SVG. See `public/brand/wordmark.txt`. There is no local or generated fallback.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Default password is `land2expand` (override with `SITE_PASSWORD`).

## Krista clips

Download into `private/media/krista-clips/` from the GitHub release (served only through the passworded `/api/media/...` route):

```bash
gh release download krista-gtm-clips-720p-2026-08-26 \
  --repo Speediing/grok-bot-quotes \
  --dir private/media/krista-clips
```

## Deploy

Preview only. Project name `cox-automotive-grokbot`. Set `SITE_PASSWORD=land2expand`.
