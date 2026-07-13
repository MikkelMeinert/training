# Get the training app on your iPhone — the full setup

Goal: a real app icon on your home screen, offline-capable, logs stored on your phone
only, with a one-tap pipeline back to Claude. One-time setup ≈ 20 min (GitHub path) or
5 min (Netlify shortcut). Ongoing cost after that: ~zero.

**Why this architecture and not a "real" iOS app:** a native app buys you nothing here —
it needs a €99/year Apple developer account, Xcode, and App Store/TestFlight friction on
every program update. The PWA already does everything the use case needs (home-screen
icon, offline, durable local storage, share sheet), and updating the program is just
replacing one HTML file. The "Claude brain" half lives in the Claude iOS app as a
Project — no backend, no sync service, nothing to maintain.

---

## Path A — GitHub Pages (recommended: builds real skills, versioned, permanent URL)

What you'll learn: git basics, GitHub, and how static hosting works. What you'll get:
a permanent URL you control, version history of every block, and future updates from
any device — including your phone.

### A1. Create the GitHub account & repo (~5 min, computer)

1. Sign up at **https://github.com** (free).
2. Top-right **+** → **New repository** → name: `training` → **Public** → Create.
   (Pages on a free account requires a public repo. That's fine: the repo holds only
   the empty app shell — your logs never leave the phone. If you'd rather not have
   your name in the page title, tell Claude and we'll genericise it.)

### A2. Push the files with git (~10 min, Terminal — the skill-building part)

Open Terminal on your Mac:

```bash
cd ~/training
git init
git add training.html manifest.webmanifest service-worker.js icon-180.png icon-192.png icon-512.png
git commit -m "Training app v2 — Thu/Sat lower block"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/training.git
git push -u origin main
```

Git will ask you to authenticate the first time — follow the browser prompt.
(Zero-Terminal alternative: on the repo page, **Add file → Upload files**, drag the six
files in, Commit. Same result, fewer skills gained.)

### A3. Turn on Pages (~1 min)

Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`,
folder `/ (root)` → Save. After ~1 minute your app is live at:

```
https://<YOUR-USERNAME>.github.io/training/training.html
```

**This URL is now permanent — never change it.** Your logs are keyed to it.

### A4. Install on the iPhone (~1 min)

1. Open that URL in **Safari** (must be Safari).
2. Share button → **Add to Home Screen** → **Add**.
3. Open from the icon: full-screen, offline, feels native.

### A5. Create the "Gym Coach" Claude Project (~2 min, phone, once)

Claude app → **Projects → New project** → name it **Gym Coach** → paste the block from
`PROJECT-INSTRUCTIONS.md` into the project instructions. Claude on your phone now knows
your program, priorities, knee history, and how to read your check-in reports.

---

## Path B — Netlify Drop (5-minute shortcut, no skills, works fine)

Drag the `training` folder onto **https://app.netlify.com/drop** → get URL → open
`…/training.html` in Safari → Add to Home Screen → then do step A5. Trade-off: anonymous
drops expire after 1 h unless you create a (free) account, the URL is random, and
there's no version history. If you're at all interested in the technical route, do Path A.

---

## The ongoing loop (what your life looks like after setup)

**Daily (in the gym):** open app → numbers are prefilled from last time → adjust, tap
Log → PR flash if you beat yourself → 2 readiness taps. That's it.

**Every few sessions:** More tab → **Back up now** → Save to Files (iCloud). The app
nags after 6 unbacked sessions.

**Anytime, from the gym floor:** question about a lift, a substitute, a sore knee →
ask in the **Gym Coach** project. For real data questions: **Build check-in report →
Share → Claude** — the report carries your full history, so phone-Claude coaches with
complete context.

**Monthly (block update):** bring the same check-in report to Cowork on the computer.
Claude regenerates `training.html`, then you update the hosted copy:

```bash
cd ~/training && git add -A && git commit -m "New block" && git push
```

(or drag the new file into the repo on github.com — works from the phone too). The app
picks up the new version next time it's opened online; **your logs survive** because
they live in the phone's storage, keyed to the URL, not in the file.

---

## Gotchas

- **Keep the URL forever.** New URL = empty app (use Export/Import to migrate).
- **Safari required** for Add to Home Screen; afterwards it's its own app.
- Deleting the home-screen app or clearing Safari website data deletes logs —
  that's what the one-tap backup is for.
- After a block update, if the app looks stale: close it fully and reopen with
  internet once (the service worker fetches new versions network-first).

## Phase 2 (optional, when you want the next skill project)

A ~1-evening build: a tiny Cloudflare Worker + KV store the app auto-POSTs backups to.
That gives automatic off-device backup and a URL Claude can fetch directly at check-ins
(no copy-paste at all). Genuinely optional — the share-sheet flow above costs two taps
a month — but it's the right-sized next technical step if you enjoy Path A. Ask Claude
in Cowork when ready.
