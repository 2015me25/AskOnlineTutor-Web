# AskOnlineTutor-Web — Agent Guide

Next.js 14 static site (marketing site + engineering calculators) deployed to **Hostinger**.
Live: https://askonlinetutor.com

## Deploy (the only supported way — no GitHub Actions)

```bash
npm run build   # static export → out/
npm run deploy  # uploads out/ to the live docroot via FTPS
```

- `deploy.mjs` reads credentials from **`deploy.env`** (gitignored, present on this machine).
  **Never ask the user for credentials** — they are in `deploy.env`; read them from there.
- **Do not commit `deploy.env` or any file containing credentials.** The repo is PUBLIC.

## Critical Hostinger facts (learned the hard way — do not re-diagnose)

- The FTP account's **virtual root `/` IS the live document root**. Upload there.
  Uploading to absolute paths like `/home/u650863480/domains/askonlinetutor.com/public_html`
  lands in a chroot-nested location (`docroot/home/u650863480/...`) that is NOT served.
- `client.uploadDir()` skips dotfiles — **`.htaccess` must be uploaded explicitly** (deploy.mjs does this).
- `npm run build` wipes `out/` including a hand-placed `.htaccess` — always regenerate it
  (deploy.mjs uploads `out/.htaccess`; if missing, recreate it — see git history / CI workflow for the template).
- SSH is **port 65002** (not 22). Host = 145.79.28.231, user = `u650863480` (main account).
  SSH password = hPanel password (in `deploy.env`).
- FTP user is the sub-account `u650863480.ask2206230`; it can read/write the docroot but
  cannot delete files owned by the main account (use SSH for that).
- The Flutter project that previously occupied the docroot is backed up at
  `/home/u650863480/flutter_project_backup/` (do not delete).
- hPanel: https://hpanel.hostinger.com · Hostinger CLI: `hostinger` (token in `deploy.env`).

## Project structure

- `app/` — Next.js App Router pages (about, calculators, contact, guides, pricing, products, resources, solutions)
- `components/` — React components · `lib/` — utilities
- `out/` — build output (gitignored) · `stitch/` under public/ — generated images
- `deploy.mjs` + `deploy.env` — deployment (env is gitignored)

## Rules

1. Verify after deploying: `curl -s -o /dev/null -w "%{http_code}" https://askonlinetutor.com/` → expect 200.
2. Never put credentials in chat or commits unless the user asks.
3. Do not touch the Flutter backup or files outside `out/` + deploy scripts.
4. If something breaks on the server, SSH in (port 65002) before assuming — FTP listings can be misleading.
