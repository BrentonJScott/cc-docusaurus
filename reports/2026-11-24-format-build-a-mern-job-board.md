# Format check — Build a MERN Job Board

- **Run:** 2026-11-24T07:22:37Z
- **Doc file:** `docs/d/build-a-mern-job-board.md`
- **Doc type:** Tutorial
- **Template:** `tutorial_format.md`
- **Feature:** Build a MERN job board
- **Goal (manifest):** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | intro | One paragraph under `#` title |
| 2 | build | ## What you'll build | Describes finished job board and stack |
| 3 | build | What you'll build (image) | Finished UI screenshot reference |
| 4 | prerequisite | ## Prerequisites | MERN deploy prerequisite, Node, Git, React knowledge |
| 5–7 | build | Part 1, Steps 1–3 | Clone, `.env`, local run |
| 8 | build | Part 1 ### Checkpoint | Local boilerplate at `:8080` |
| 9–14 | build | Part 2, Steps 4–7 | React components, styles, rebuild |
| 15 | build | Part 2 ### Checkpoint | Form and empty list locally |
| 16–22 | build | Part 3, Steps 8–11 | Model, controllers, routes |
| 23 | build | Part 3 ### Checkpoint | Submit job appears in list |
| 24–25 | build | Part 4, Steps 12–13 | `.gitignore`, push to deploy branch |
| 26 | build | Part 4 ### Checkpoint | **Deploy** tab new build; live URL shows job board |
| 27 | remove | ## Summary | Recap paragraph |
| 28 | remove | ## Next steps | Links to pricing and React how-to |
| 29 | remove | ## Troubleshooting | Two symptom entries |

## Check results

| Check | Status | Reason |
|--------|--------|--------|
| Step 1: Doc type | pass | Single tutorial; four parts with checkpoints. |
| Check 1: Content (build steps) | pass | Build steps live in parts; prerequisites in **Prerequisites**; Part 4 ends on Code Capsules deploy. Final checkpoint matches manifest goal (build on **Deploy**). |
| Check 2: Prerequisites | fail | Prerequisite links to [Deploy a MERN stack app](/docs/guides/mern-stack); no page with that slug exists under `docs/`. |
| Check 3: Links | fail | `/img/tutorials/build-a-mern-job-board/job-board-ui.png` is missing from `static/` (only `mern-stack.png` present). Broken prerequisite doc link above. |
| Check 4: Format and style | fail | **What you'll build** screenshot missing; prerequisite points at missing guide. |

## Tickets

### build-a-mern-job-board-1

- **Type:** Broken link
- **Title:** Fix or add Deploy a MERN stack app prerequisite page.
- **Problem:** `## Prerequisites` links to `/docs/guides/mern-stack`, which has no matching file or slug in `docs/`.
- **Rule:** `FORMAT.MD` Check 3 — internal links must resolve.
- **Change:** Add a how-to at `docs/…` with slug `/guides/mern-stack` (or retarget the link to an existing deploy guide) and outline deploying the MERN boilerplate with a MongoDB Capsule.
- **Done when:** The prerequisite link opens a real doc in the site build.

### build-a-mern-job-board-2

- **Type:** Broken link
- **Title:** Add finished job board screenshot asset.
- **Problem:** `## What you'll build` references `job-board-ui.png`, which is not in `static/img/tutorials/build-a-mern-job-board/`.
- **Rule:** `FORMAT.MD` Check 3.
- **Change:** Add `static/img/tutorials/build-a-mern-job-board/job-board-ui.png` or update the embed to an existing image.
- **Done when:** The image loads in the doc build.

### build-a-mern-job-board-3

- **Type:** Format fix
- **Title:** Align tutorial assets and prerequisites with `tutorial_format.md`.
- **Problem:** Combined link and image failures above.
- **Rule:** `tutorial_format.md` — **What you'll build** must include one screenshot; prerequisites must link to real pages.
- **Change:** Checklist: (1) fix prerequisite per ticket 1, (2) add image per ticket 2, (3) confirm **Next steps** still has at least two valid links.
- **Done when:** Format check re-run passes all checks.

## Proposed outline

None required beyond fixing tickets above; section order already matches `tutorial_format.md`.