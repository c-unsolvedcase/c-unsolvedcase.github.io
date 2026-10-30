# Unsolved Case — c-unsolvedcase.github.io

Online co-op detective game for 1–4 players, played in the phone browser.
Case 1: **The Last Ferry** (5 chapters, 28 clues, 5 suspects, 4 locations, spoken character dialogue, party voice chat).

## How this deployment works

- **Front-end (this repo, GitHub Pages):** the files at the repo root are the
  `client/` from the original project. Served at https://c-unsolvedcase.github.io/
- **Game server (Oracle VPS, Docker `unsolved-case`, Node 20):** the authoritative
  server in `server/` + `package.json`. It is NOT run by GitHub Pages.
  The Pages client connects to it at `wss://3danatomie.com/ws` — the VPS
  OpenLiteSpeed vhost for 3danatomie.com proxies `/ws` to the Node server on
  localhost:3000 (see `client/js/net.js`). Rooms live in the container's
  `/data` volume on the VPS.
- **To run the server yourself:** `npm install && npm start` (port 3000),
  then open the client against that host (same-host WS is kept for local use).

Original project README, tools (Blender scene builder, voice synthesis) and
tests are in the author's uploaded zip; only the playable client + server are
in this Pages repo.

## How to author a new case

A case is content, not code: five data files, one registry line, one avatar
entry per suspect, one Blender builder, one voice run. The engine, validator
and test bots are all case-parameterised. Worked examples: `CASE2.md` …
`CASE6.md` (build logs) and `cases-design/DESIGN-case*.md` (design notes).
Do the steps in order; do not start data before the design note exists.

### 0. Design note first — `cases-design/DESIGN-caseN.md`

Must contain, before any data is written: culprit (and accomplice, if any),
motive, method; the **real timeline** of the crime; the **clue chain**,
including the **two independent evidence paths** to the key proof conclusion
(each path = one pivotal card the validator can remove while the proof still
closes — typically a testimony path and a confession path); every red herring
and the evidence that honestly clears them; a chapter outline (goals per
chapter); the **role split** of key evidence (which role — field / analyst /
interrogator / archivist — holds which gated clue; solo holds all roles and
must still finish); a cast table with a distinct Kokoro voice + speed per
speaker; and the locations list (3–5). Note any spec signatures up front
(e.g. Case 4's 3+-clue conclusion chains, Case 5's cross-role private-clue
pair) and how the data will express them.

### 1. The five data files — `server/cases/caseN/`

Copy a recent case's folder as the skeleton and rewrite it.

- **`story.js`** — `meta` `{ id, title, tagline, summary, difficulty,
  players }`: `difficulty` (e.g. `"Easy+"`, `"Medium"`, `"Master"`) and
  `players` (`"1–4"`) feed the `GET /api/cases` catalogue verbatim; omit
  `difficulty` and the catalogue says `"Standard"`. Keep spoilers out of
  `meta` — it is client-visible. `speakers`: speakerId → `{ voice, speed }`
  (Kokoro ids). Two conventions: `narrator` speaks the epilogue truth; one
  briefer speaker speaks every chapter `intro`. `conclusions`: id (`c_*`) →
  `{ title, text }`. `links`: `L(a, b, gives)` triples — order-independent
  pairs of board cards (clue/testimony/conclusion) that earn a conclusion;
  give key conclusions **2–3 alternative pairs** (that redundancy is the
  fairness design); duplicate pairs are a validator error. `chapters`:
  `{ id, title, scenes, suspects, question, goals, intro: {speaker, text},
  hints }` — scenes/suspects unlock **cumulatively** (list everything
  available up to that chapter), `goals` are conclusions that must all be
  proven to advance, the final chapter has `goals: []` and ends in the
  accusation, and **exactly 3 hints per chapter** (validator-enforced).
  `accusation`: `{ culprits, motives: [{id, text}], methods: [{id, text}],
  answer: { culprit, motive, method, proofs: [conclusionIds] } }` — `answer`
  never leaves the server. **Optional accomplice:** add
  `accusation.accomplices: [suspectIds]` and `answer.accomplice` and the
  accusation gains a fifth scored part (validator §6b checks it; the client
  shows the extra picker only for declaring cases; Cases 1–5 declare neither
  and keep the legacy 4-part behaviour). `epilogue`: `{ truth, results:
  {5,4,3,2,1} }` — `truth` is the full solution narrative, revealed only on a
  correct ending. **`fairness`** (required for new cases; the validator
  errors without it): `{ proof: <conclusionId>, paths: [[cardId], [cardId]] }`
  — the two independent paths from the design note. With an accomplice add
  `fairness.accomplice: { proof, paths }` the same way.
- **`clues.js`** — id → `{ title, kind, text, start?, analysis?, audio? }`.
  `kind`: `document | object | photo | audio`. At most one `start: true`
  clue (handed out at briefing; it must **not** also be placed in a scene).
  Lab clues carry `analysis: { prompt, target (0–1), tolerance (0.07 is the
  house value), revealed }`; an unanalysed lab clue cannot be linked or
  presented. Every non-start clue must be placed at **exactly one** hotspot.
- **`suspects.js`** — `testimonies`: id (`s_*`) → `{ title, speaker, text }`
  (the speaker must exist in `story.js`'s `speakers`). `suspects`: `{ id,
  name, age, role, color, unlockedAt, bio, intro, defaultPresent, topics,
  present }`. `unlockedAt` (1-based chapter) must agree with the chapters'
  suspect lists. Each `topics` entry `{ id, label, answer, gives?, trust?,
  requires? }` is askable once; `requires: { clues, cards, minPressure,
  minTrust }` gates it (the client shows the lock reason, never the numbers'
  source). `present` entries `{ card, pressure?, trust?, gives?, reply }`
  fire only on the **first** presentation of that card — pressure is built by
  catching lies with the right cards. Confession topics in the shipped cases
  gate at `minPressure` 75 (Case 1) or 80 (Cases 3/5/6).
- **`scenes.js`** — array of `{ id, name, glb, mood: { fog, ambient,
  exposure }, lights, camera: { pos, target, minDist, maxDist }, hotspots }`.
  Coordinates are **Blender space** (x right, y depth, z up); the client
  converts. GLBs hold geometry + PBR only — mood/lights/camera live here.
  Hotspots: `{ id, pos: [x,y,z], roles: [...], clue }` or `{ ..., flavor }`
  (exactly one of `clue`/`flavor`). `roles: []` = open, auto-shared on
  inspect; a non-empty list makes the find private to those roles until
  shared. Aim for ≥ 3 role-exclusive clues per role (the validator warns
  below that), and give chapter 1's scene at least one **open clue hotspot**
  (the generic engine suite requires one).
- **`index.js`** — pure assembly; copy an existing case's verbatim (it
  re-exports `fairness` from story.js along with everything else).

### 2. Register the case

One line in the `cases` map at the top of `server/index.js`:
`caseN: require("./cases/caseN")`. The catalogue (`GET /api/cases`), the
entry-screen picker and the lobby all derive from the registry + `meta` —
no client change is needed to list a new case.

### 3. Avatar looks

Suspect portraits are procedural SVGs from the `LOOKS` map in
`js/avatar.js`, keyed by suspect id: `{ hair, hairColor, skin, acc,
accColor, stache? }`. Add one entry per new suspect, or they render as the
generic detective fallback.

### 4. Scenes (Blender)

1. `node tools/export_hotspots.js caseN` → writes
   `tools/blender/scene_data-caseN.json` (hotspots/lights/cameras the
   preview renderer needs).
2. Copy the previous case's builder: `tools/blender/build_caseN.py`. It
   execs the helpers from `build_scenes.py` and writes one hand-written
   `build_<scene>()` per location from the helper primitives
   (`box/cyl/sph/torus`, `room/table/chair/lamp/books/window`, untextured
   PBR materials).
   ⚠️ **Rebind gotcha:** `preview()` resolves the scene-data global in the
   *helpers'* namespace. After the exec, set `G["DATA"] = <your
   scene_data-caseN.json>` (see `build_case6.py` line 35) — otherwise
   previews silently draw another case's markers and cameras.
3. Seat every hotspot position in `scenes.js` just **on/above** its object's
   surface; a hotspot at the object's exact surface renders half-buried.
4. Build + preview (Blender is the standalone tarball at
   `~/workspace/blender-local/`; it must run with a **clean env** or
   `import bpy` fails):

   ```
   env -i HOME=$HOME PATH=/usr/bin:/bin ~/workspace/blender-local/blender -b \
     --python tools/blender/build_caseN.py -- \
     --out assets/scenes --preview tools/blender/preview-caseN
   ```

5. **Eyeball every preview PNG** (`tools/blender/preview-caseN/<scene>.png`),
   fix framing/markers/geometry, re-render, repeat. The previews are
   QA-lit Cycles renders — the in-game mood comes from `scenes.js`, so
   judge geometry and marker placement, not final lighting. GLB export is
   seconds; a Cycles preview is ~3–4 min per scene on this machine.

### 5. Voices (Kokoro)

Voices are derived, not listed: `server/voice.js`'s `allLines(C)` enumerates
every spoken line (chapter intros, suspect intros/`defaultPresent`/topic
answers/present replies, clue audios, epilogue truth) and keys each file as
`sha1("<speaker>|<text>")` → `assets/audio/<key16>.mp3`.

1. Choose the voices in `story.js`'s `speakers` table — one distinct voice
   per character, speeds 0.9–1.0 (slower reads older/graver). Convention:
   `narrator` = `bf_emma @ 0.95`.
2. Generate (incremental — existing keys are skipped, so dialogue edits
   only re-render changed lines):

   ```
   node tools/make_voices.js caseN > lines-caseN.json
   ~/workspace/.venvs/kokoro/bin/python tools/make_voices.py lines-caseN.json \
     ~/workspace/.venvs/kokoro-models/kokoro-v1.0.onnx \
     ~/workspace/.venvs/kokoro-models/voices-v1.0.bin assets/audio
   ```

   (venv `~/workspace/.venvs/kokoro`, models in
   `~/workspace/.venvs/kokoro-models/`; ~40–50 s per line on this CPU —
   run it as a background job, and never overlapped with Cycles previews.)
3. **Verify by key, never by the generator's log:** every key from
   `allLines(caseN)` must exist as `assets/audio/<key>.mp3`, 0 missing —
   and re-check after a wait; this workspace's filesystem has proven
   eventually consistent for detached-process writes (Case 5 lost files
   that later reappeared). ffprobe-spot-check a few durations.

### 6. Gates (all must pass before the case counts as done)

First, snapshot the previous cases' integrity **inside the project** (a
baseline in `/tmp` was lost to a wipe during the Case 5 build):

```
md5sum server/cases/case*/*.js > md5-baseline-pre-caseN.txt
node tools/validate_case.js caseN        # → 0 errors, 0 warnings
npm run validate                         # → 0 errors, 0 warnings across ALL cases
node tests/engine.test.js caseN          # generic suite → 20 passed, 0 failed
                                         # (solo bot + 4-player bot both finish;
                                         #  the 4P bot names the culprit — and
                                         #  the accomplice, if declared)
node tests/ui.caseN.js                   # copy tests/ui.case(N-1).js, retarget:
                                         # entry lists N cases, the case card
                                         # reads "<Tier> · <C> chapters · <S>
                                         # suspects", lobby shows the title +
                                         # "Difficulty: Standard" → 3 passed
node tests/difficulty.test.js            # extend its /api/cases catalogue
                                         # assertions to the new case → 9 passed
node tests/accomplice.test.js            # only meaningful if the case declares
                                         # an accomplice → 11 passed
node tests/e2e.test.js                   # → 9 passed
node tests/ui.smoke.js                   # + every earlier tests/ui.case*.js → 3 each
md5sum -c md5-baseline-pre-caseN.txt     # → every previous case file OK
```

Write the build log as `CASEN.md` (case summary with spoilers marked,
voice table, scene table with GLB bytes, exact gate outputs, deviations)
and the design note stays in `cases-design/`.

### Difficulty presets — what an author may and may not do

The presets (`casual` / `standard` / `master`) are **engine-level**, defined
once in `DIFFICULTY` in `server/engine.js` and chosen by the host per room:
hints per chapter (3/3/2), lab tolerance multiplier (1.75/1/0.6), topic-gate
multiplier on `minPressure`/`minTrust` (0.6/1/1.25), hint star-penalty
thresholds ([6,12]/[4,8]/[3,6]) and the wrong-link star-penalty limit
(∞/12/6). **`standard` is the legacy behaviour exactly** — the difficulty
suite proves a standard room reproduces the pre-difficulty Case 1 bot result
bit-for-bit. A case author therefore: **may** set the catalogue label
(`meta.difficulty`) and tune difficulty *through the data* (gate thresholds,
lab tolerances, chain lengths); **may not** add per-case scoring or gating
semantics, change the preset table for one case, or make difficulty change
what is true in a case — the same evidence must convict on every preset.
