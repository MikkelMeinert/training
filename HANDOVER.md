# Handover — Mikkel's training program & phone tracker

Purpose: bring a fresh Cowork session fully up to speed to brainstorm and improve
**every** aspect of this setup. Everything below is current as of **4 July 2026**.

---

## 1. Who this is for

Mikkel — 187 cm, ~83 kg, ~12–14% BF, experienced lifter, Copenhagen. Analytical,
time-poor, concise evidence-based coaching. Full profile and rules live in
**`CLAUDE.md`** — read it first. Highlights:

- **Priority order:** (1) volleyball function — explosiveness, jump, zero injury;
  (2) strength & athletic physique; (3) leanness. Trade-offs resolve in that order.
- **Volleyball is year-round:** outdoor/beach from May, indoor from late September.
  **There is no off-season** — indoor means hard-court landings, so knee care matters
  *more* in winter. Transition windows (≈April–May, September) are the only slots for
  short harder gym blocks, if sport briefly dips.
- Sport: squash Mon eve, volleyball Tue + Wed eve, daily bike commute. Thu eve–Sun sport-free.
- **Health flags:** anterior knee (mild July 2026, Mikkel attributes it to inactivity —
  tendons dislike irregular load; Friday tendon work is the treatment); right-side
  posterior chain historically weak — trains first, gets the extra set. Pressing rebuilding, RIR 3.

## 2. The current program (July 2026 block, in `training.html`)

**v5 (19 July 2026, second check-in):** lower back promoted to tracked priority — Mikkel
identified it as his primary canary (flares with *inactivity*; "right side" = specifically
the right hamstring). Added: weekly **deadlift** (Legs · big, 3×6–10 RIR 2–3) + **45° back
extensions** (Legs · hip, 2×12–15); third readiness metric (low back, 0–3) with its own
downshift banner; **Legs · big is now the long weekend session (60–75 min)** at his
request. Audited out: step-ups (both variants — redundant after Bulgarians/lunges);
hip-day calf raises (consolidated onto Legs · big). Renames: Legs · heavy → **Legs · hip**,
Legs · ecc → **Legs · big**. Progression to date: hip thrust 60×6→60×12 (next: 70 kg),
swing 8→16 kg (next: 20), pull-up tested badly only because it was attempted post-tennis
at the end of a leg session — pull-ups go first on pull day.

**v4 (13 July 2026, post-first-check-in): sessions are named, not weekday-locked.**
Five session chips in the app — Mikkel slots them inside guardrails (his week-1 finding:
sport recovery is cheap for him, strength recovery is not, so leg days need max spread):

- **Legs · heavy** (Mon or Tue; Tue evening after volleyball works) — concentric-bias:
  KB swings, hip thrust, SL-RDL / B-stance RDL, lying curl, calves.
- **Push** (best Wed) — incline/chest press, pulldown, laterals, arms.
- **Pull** (Thu or Fri) — **the priority upper day; it was the one skipped in week 1** —
  pull-ups, chest-supported/cable rows, light press rebuild, face-pulls, reverse
  pec-deck, Pallof/hanging raises, Copenhagen.
- **Legs · ecc** (Fri or Sat ONLY — DOMS must die on the weekend, ≥72 h before Tuesday
  volleyball) — wall sits / tempo leg extensions, tempo Bulgarians / reverse lunges,
  Nordics, calves/tib, knee-gated bound.
- **Pump** (optional, anywhere, even post-volleyball evenings) — release valve, dropped
  first. Never legs.
- Hard rules: ≥3 clear days between leg days; leg-day roles never swap; drop order
  pump → push, never legs, protect pull.
- **Leg-day warm-up = Mikkel's 10-move stretch flow + ramp-up sets** (checkable in-app).
- **Exercise dislikes (never re-prescribe):** standing DB rows, loaded carries, med-ball
  slams, Spanish squats, triceps pushdowns, standing cable rear-delt flies. Supersets
  must share a station. Full list + substitutes in `CLAUDE.md`.

**Deloads are trigger-based:** knee 2+ twice in a week, or ~5 weeks elapsed → app shows
a banner (keep loads, 2 sets everything, skip throws/bounds). "Every 5th week" is only
the no-data fallback.

Design principles that survived from the June block: bench/support only where it earns
it (incline press, hip thrust, lying curl, chest-supported row); power = KB swings +
rotational med-ball throw, never jumps (sand/court supply the impact); right-side-first
on all unilateral work; supersets to fit 45 min.

## 3. The app (`training.html` v2 — rebuilt July 2026)

**Why v2 exists: Mikkel never adopted v1** — free-text logging was too clunky and there
was nothing engaging to track. v2 is adoption-first — **and it worked: week 1 = 4
sessions, 8 lifts logged, readiness tapped.** v4 additions (13 July): session-based
chips instead of weekdays, a visible **Focus** cue plus expandable "What is this?"
description and video-demo link per exercise, checkable warm-ups that count toward
session progress, and station-sharing supersets. Original v2 features:

- **Structured logging:** kg/reps steppers prefilled from last entry; one tap re-logs.
- **e1RM (Epley) + PR detection** with a flash + badge; bodyweight-inclusive metric for
  pull-ups; reps-metric for Nordics/Copenhagen; kg-metric for carries.
- **Stable exercise ids** (`hipthrust`, `rfess`, …) — history and PRs survive block
  regenerations and are shared across A/B weeks. **Reuse ids when regenerating.**
- **Trends tab:** stats (sessions/week, week streak, PRs this block), bodyweight chart,
  knee/right-side readiness chart, per-lift sparklines with % change.
- **Readiness:** two 0–3 taps (knee, right side) per day, including rest days — feeds
  the deload banners and the Monday-legs verdict.
- **Backup:** `storage.persist()`, one-tap share-sheet backup (iCloud Files), nag after
  6 unbacked sessions. Import restores everything.
- **Check-in report button** (More tab): markdown digest — adherence, bodyweight delta,
  readiness averages + flagged days, per-lift first→last with %, recent notes — plus the
  full raw JSON, shareable straight to the Claude app.
- Auto-selects today's weekday and the A/B week from block-start parity (`BLOCK_START`
  in the file, currently 2026-07-06). Migrates v1 data if found.
- Single dependency-free file; tested via jsdom (38 assertions, all passing). Bump the
  `CACHE` constant in `service-worker.js` on every redeploy.

## 4. How it's used

- Daily: phone-only (installed PWA — see `SETUP-PHONE.md`).
- **Quick coaching from the gym:** check-in report → share → Claude app, into a
  **"Gym Coach" Claude Project** whose instructions are in `PROJECT-INSTRUCTIONS.md`.
- **Monthly block updates:** same report pasted into Cowork; regenerate `training.html`
  (keep exercise ids stable), bump the service-worker cache, he re-drops the folder on
  Netlify. Logs live in the browser, keyed to the URL — keep the URL.
- ClickUp and Google Calendar are connected but unused; calendar scheduling of the 4
  morning slots remains an opt-in offer (ask first).

## 5. Open threads for future sessions

- **First check-in (13 July 2026) findings:** adoption succeeded (4 sessions logged);
  the skipped session was pull — watch that pattern; knee hit 2 once (7 July, after
  heavy legs + squash — monitor, wall sits stay religious); KB swing was done at 8 kg
  (underloaded — corrected to 16–24 kg in cues); loads otherwise calibrated sensibly.
- **Adoption stays the metric that matters.** If logging stops, simplify — don't add.
- First autumn check-in (~late Sept): confirm indoor-season logistics (same Tue/Wed
  cadence? squash unchanged?) and whether a transition-window mini-block fits.
- Leg-day placement verdict at the first monthly check-in: read Tuesday readiness/notes
  and Saturday session quality. Also check the optional-Monday hit rate — if it's ~100%
  on top of everything else, watch for load creep.
- Pressing progression: hold RIR 3 overhead until ~4 weeks of pain-free pressing, then
  reassess load jumps.
- Optional cross-device sync remains rejected (monthly cadence doesn't justify it);
  revisit only if backup/import friction shows up in practice.
- Hosting still needs doing once (Netlify Drop) — v1 was never hosted/installed.
