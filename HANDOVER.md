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

**v9 (5 September 2026, same day — expert-pass features, Mikkel's invitation):**
the app now answers "what should I lift next" itself: **double-progression advisor**
("↑ earned a jump" chip when last log tops the rx rep range; "reps only · shoulder"
on pressing IDs while the shoulder flagged 2 within 14 days); **ramp-up kilos** computed
from the day's main lift; **one-tap deload mode** (banner button → 7 days of per-card
"2 sets · same load" / "skip" badges, auto-expires, suppresses the fatigue nag);
**data-health line** in More; **check-in share/copy counts as a backup** (dataIsSafe =
backup OR check-in). Rep-range fixes for advisor honesty: pull-up 4×5–6, Nordic 3×4–8.
meta.app version stamp added. Rejected on principle: per-set logging, RIR logging,
cloud sync, more charts — intelligence without added taps. NOTE for regeneration: rx
rep ranges drive the advisor; keep them honest. Backup verified restored (23 lifts,
64 entries) via his own uploaded backup file.

**v10 (20 September 2026, sixth check-in) — biggest change since v2.**

*Program restructured at his request:* he reliably hits four sessions and wants **2 lower +
2 upper**, with the upper days carrying both push and pull rather than being split.
Solution: the two upper days divide by **movement plane** — **Upper · vertical**
(pull-up → pulldown → [OHP + barbell curl, one bar] → [face-pull + Pallof, one tower] →
hang) and **Upper · horizontal** (CS row → cable row → incline press → reverse pec-deck →
laterals → triceps → Copenhagen). Both open with a pull; week runs ~62% pull volume, which
the app now measures. Lower days keep their roles and were renamed **Lower · power** /
**Lower · strength**. Winter sport: squash Mon 17–19, two indoor volleyball nights (TBC),
**Friday-morning padel from October — which is why Lower · strength defaults to Saturday**,
plus a fun session; peak weeks are 5 sport + 4 gym, sustained by deliberate fuelling.

*Exercise changes, all from his notes:* med-ball throws **dropped, not replaced** (no way to
do them; sport supplies rotational power); **bar hangs** promoted to a real loggable
exercise (his own find, for low-back decompression); **banded terminal knee extension**
added — he asked if it was placebo, it isn't, it's standard patellofemoral rehab; wall sits
progressed to 45–60 s at 10–15 kg; lying-curl history **repaired by migration** (he'd been
logging doubled two-legged numbers for single-leg work — halved, so 17.5/leg reads as the
PR it is); DB curls retired in favour of the barbell.

*The intelligence layer he asked for* ("it still feels quite naive"): **readiness gates** —
each exercise declares the structure it stresses, and a 2+ tap rewrites that card in amber
(deadlift → SKIP, hip thrust → 60%, OHP → benched, bound → skip, spine-safe work explicitly
kept); **concrete next loads** ("↑ try 82.5 kg × 6"); **week planner** on the session chips
(✓ done this week, suggested next, 3-clear-days rule between lower days); **pull:push
balance meter**; **stall detection**; and the banner stack replaced by a **compact status
strip** of pills that expands on tap — which also answers his "too much text at the top".

*Health:* acute **left lower-back strain from off-gym lifting on 11 Sept**, rated 3/2/2
across 15–20 Sept. **Physio referral given** — follow up next time. Deadlift and loaded
hinging withheld until two days at 0–1. Pull-up, pulldown and face-pull are all flagged
stalled after a fragmented month (crash → trip → back strain); that's re-entry, not a
programming fault.

**v8 (5 September 2026, fifth check-in):** disrupted month — bike crash mid-Aug +
week-long bike trip = ~2.5-week layoff (3 sessions, all upper). **Data-loss incident:**
iOS evicted the app's localStorage during the ~12-day gap (lastBackup was null — the
nag never converted). Full history rebuilt from check-in exports into
`restore-2026-09-05.json` (23 exercises, 64 entries, merged by timestamp) — **check-in
reports are de-facto backups; that redundancy saved everything.** App hardening: Import
now extracts the JSON from a whole pasted check-in report; backup banner fires at 4
unbacked sessions or a never-backed-up install with honest copy; docs mandate weekly
app-opens. Program changes (his notes, all adopted): towel-whip drill retired (didn't
feel like spike training — dry-land whip drills transfer poorly; optional light
spike-ball wall throw on pull days instead; real fix = ball + video on court); OHP
superset now uses **barbell curls on the same bar** (his original design — press and
curl loads match at 22.5); **lat pulldown back-off on pull days** replaces reverse
pec-deck (4×5 pull-ups doesn't exhaust his vertical pull — pec-deck lives on pump day).
Body state: LB and R shoulder both 2 on Sept 3+4 (post-crash/bike-trip) → re-entry
protocol active: no deadlift, no overhead pressing until quiet; legs restart ~-15–20%
after the layoff. **Next check-in = indoor-season re-cut (late Sept): get the winter
sport schedule, tighten knee care for hard-court landings.**

**v7 (17 August 2026, fourth check-in):** best data yet — hip thrust 80×8 (e1RM +40%
in six weeks), deadlift 70×8, pull-up unstuck at 6, knee/ham/back all quiet or trending
down; deload logged 5 Aug. Changes, all Mikkel-driven: **KB swing retired** (technique
never felt right) → **speed hip thrusts** (~50% top weight, 3×5–6, max bar speed);
**lying curls officially single-leg** (his initiative — right first, stack = per-leg);
**SL-RDL pinned to ONE version** (one DB in LEFT hand, right hand on rack — he refused
to do it while ambiguous, rightly); **barbell OHP adopted** (he tried 22.5×8 on 9 Aug
and liked it) as pull-day superset with DB curls, landmine = fallback — this also fixes
arms/delts getting zero volume from the never-done pump day; **deadbug cut** after his
inclusion-criteria challenge; **towel-whip drill** added to push/pull warm-ups
(spike-swing sequencing rehearsal, his request). RETIRED registry added so retired
lifts stay visible in trends/check-ins. Watch-list: right groin/hip-flexor pinch
(13 Aug — notes only, NOT a 5th readiness tap; metric creep refused). **Nicotine quit
14 Aug** — 1–2 soft weeks expected, long-term tendon win. Shoulder hit 2 on 13 Aug —
pressing stays reps-only; two-quiet-weeks clock restarted. **Next check-in (~mid-Sept)
= indoor-season transition planning; confirm winter sport schedule.**

**v6 (3 August 2026, third check-in):** right shoulder added as 4th readiness metric
(grumpy ~10 days from BV hitting technique — he's fixing the whip mechanics; gym holds
pressing at RIR 3, reps-only, app benches overhead pressing at 2+ twice/week). Supersets
station-locked (face-pull + Pallof on one tower; back ext + deadbug on the floor beside
the bench; cable curl → DB curl at the laterals rack; all cross-gym pairs dissolved to
straight sets). Tempo leg extension now loggable (`legext-tempo`). Illness week
(~20–26 July) absorbed — advised tapping the deload button to reset the 5-week clock.
Trends: pulldown +16%, reverse lunge +33%, Nordics to 8, knee trending DOWN (no 2s since
19 July), low back steady at 1 with the new DL/back-ext work. Pull-up stuck at 4 and
cable row dipped — shoulder-related, watch it. He skips bottom-of-session accessories
under time pressure: by design, order = priority, don't "fix" it.

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
