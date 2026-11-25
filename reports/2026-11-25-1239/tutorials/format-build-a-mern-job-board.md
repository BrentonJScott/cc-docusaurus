# Format report — build-a-mern-job-board

- **Run:** 2026-11-25-1239
- **Doc file:** `docs/tutorials/build-a-mern-job-board.md`
- **Doc type:** Tutorial
- **Template:** `formats/tutorial_format.md`
- **Feature:** Build a MERN Job Board
- **Goal:** Expect a live job board on Code Capsules where a submitted job appears in the list
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | build | `## What you'll build` | Job board with submit form, list, Express API, MongoDB; one capsule. |
| 2–8 | prerequisite | `## Prerequisites` | Account, Space, GitHub, fork, deployed MERN how-to, MongoDB deploy, Node.js; knowledge sentence. |
| 9–13 | build | `## Part 1` | Clone, `.env`, dotenv, build and run locally; checkpoint on localhost:8080. |
| 14–18 | build | `## Part 2` | SubmitJob, ViewJobs (+ extra rationale sentence), App.js, external CSS copy, rebuild; checkpoint. |
| 19–23 | build | `## Part 3` | Models, controller, routes; checkpoint submit works locally. |
| 24–26 | build | `## Part 4` | gitignore, commit, push, open live URL; checkpoint live job board. |
| 27–29 | — | Summary / Next steps / Troubleshooting | Summary and cards; deploy troubleshooting. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (build steps) | fail | Step **Add the ViewJobs component** includes a second explanatory sentence beyond the imperative. Step **Add the job model** adds Mongoose rationale. |
| Check 2: Prerequisites | pass | Each prerequisite is a linked card or one knowledge sentence; internal `href` targets exist under `docs/`. |
| Check 3: Links | pass | All internal prerequisite and next-step links resolve under `docs/`. |
| Check 4: Format and style | fail | `tutorial_format.md`, Parts — at most one sentence of explanation per step; violations in Parts 2 and 3. |

## Tickets

### build-a-mern-job-board-1

- **Type:** Format fix
- **Title:** Shorten step explanations to one sentence.
- **Problem:** Step 6 says “This component fetches the available jobs when the page loads and displays them.” Step 11 says “This model tells MongoDB what a job looks like.” Other steps pair imperatives with extra rationale.
- **Rule:** `tutorial_format.md`, Parts — keep explanation to one sentence at most per step; `FORMAT.MD`, Check 1 (Tutorial).
- **Change:** Keep one imperative sentence per step before code blocks; remove or link out longer explanations.
- **Done when:** Every numbered step body has at most one sentence before file paths and code blocks.

## Proposed outline

(Same section order as the current tutorial; Part 2 step 6 and Part 3 step 11 lose extra explanatory sentences.)