# Format report — build-a-mern-job-board

- **Run:** 2026-11-25-1218
- **Doc file:** `docs/tutorials/build-a-mern-job-board.md`
- **Doc type:** Tutorial
- **Template:** `formats/tutorial_format.md`
- **Feature:** Build a MERN Job Board
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io (live job board: submit a job and it appears in the list)
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | build | `## What you'll build` | Job board with submit form, job list, Express API, MongoDB; one capsule for frontend and backend. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account card |
| 3 | prerequisite | `## Prerequisites` | A Space card |
| 4 | prerequisite | `## Prerequisites` | GitHub connected card |
| 5 | prerequisite | `## Prerequisites` | Deployed MERN boilerplate card → `/docs/full-stack` |
| 6 | prerequisite | `## Prerequisites` | MongoDB Capsule card → monitor how-to |
| 7 | prerequisite | `## Prerequisites` | Node.js installed card (external) |
| 8 | prerequisite | `## Prerequisites` | Basic knowledge of JavaScript and React (sentence under cards) |
| 9 | build | `## Part 1` | Clone forked repo; `npm install` |
| 10 | build | `## Part 1` | Copy MongoDB **Public Connection String** into `.env` |
| 11 | build | `## Part 1` | Install dotenv; add `require('dotenv').config()` to `index.js` |
| 12 | build | `## Part 1` | Build client; run `node index.js` |
| 13 | build | `## Part 1` | Checkpoint: localhost:8080 shows boilerplate |
| 14 | build | `## Part 2` | Add `SubmitJob` component |
| 15 | build | `## Part 2` | Add `ViewJobs` component |
| 16 | build | `## Part 2` | Update `App.js` |
| 17 | build | `## Part 2` | Copy CSS from external GitHub into `App.css` |
| 18 | build | `## Part 2` | Rebuild frontend; checkpoint shows form and list |
| 19 | build | `## Part 3` | Replace `app/models/index.js` |
| 20 | build | `## Part 3` | Add `job.model.js`; delete `person.model.js` |
| 21 | build | `## Part 3` | Add `job.controller.js`; delete `person.controller.js` |
| 22 | build | `## Part 3` | Add `job.routes.js`; delete `person.routes.js` |
| 23 | build | `## Part 3` | Switch `index.js` to job routes; checkpoint submit works locally |
| 24 | build | `## Part 4` | Add `/client/build` to `.gitignore` |
| 25 | build | `## Part 4` | Commit and push to `main` |
| 26 | build | `## Part 4` | Open capsule URL; checkpoint live job board accepts submissions |
| 27 | remove | `## Summary` / `## Next steps` | Summary and next-step cards (not build steps) |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (build steps) | fail | Several steps use more than one sentence of explanation (e.g. step 5 SubmitJob, step 10 models); MERN/MongoDB setup prerequisites are not satisfied by linked how-tos (see Check 2). |
| Check 2: Prerequisites | fail | **Deployed MERN boilerplate** card links to `/docs/full-stack` (Explanation index), not a how-to that deploys `codecapsules-io/mern-stack`; **MongoDB Capsule** card links to the monitor how-to, not a deploy/create guide (`docs/products/database-capsule/mongodb/deploy.md` does not exist). No card for forking the demo repo though Part 1 assumes a fork. |
| Check 3: Links | pass | Every internal `href` and prerequisite card target resolves under `docs/`; external tool and GitHub links are valid. |
| Check 4: Format and style | fail | Prerequisites cards do not meet `tutorial_format.md` (how-to for deployed boilerplate; MongoDB prerequisite target); step prose exceeds one sentence in multiple parts. |

## Tickets

### build-a-mern-job-board-1

- **Type:** Format fix
- **Title:** Point prerequisite cards at the correct how-to pages.
- **Problem:** The **Deployed MERN boilerplate** card uses `href: '/docs/full-stack'`, an Explanation index without MERN deploy steps. The **MongoDB Capsule** card uses `href: '/docs/products/database-capsule/mongodb/monitor'`, which assumes a capsule already exists.
- **Rule:** `tutorial_format.md`, Prerequisites — card for the how-to that deploys the boilerplate; `FORMAT.MD`, Check 2 — each prerequisite must be linked, not explained on the tutorial page.
- **Change:** Link **Deployed MERN boilerplate** to an in-repo MERN stack deploy how-to (create the page if missing; see ticket 2). Link **MongoDB Capsule** to `docs/products/database-capsule/mongodb/deploy.md` when it exists, or reference the shared deploy work from run `2026-11-25-0828`. Add a **Fork the MERN demo repo** card to `/docs/shared/fork-a-demo-repo` if the deploy how-to does not cover the fork.
- **Done when:** Each prerequisite card `href` opens a how-to (or shared page) that completes that prerequisite before Part 1.

### build-a-mern-job-board-2

- **Type:** Shared page
- **Title:** Add MERN stack boilerplate deploy how-to.
- **Problem:** No `docs/` page walks through forking and deploying `codecapsules-io/mern-stack`, but the tutorial prerequisite card promises that path.
- **Rule:** `FORMAT.MD`, Check 2; `tutorial_format.md`, Prerequisites — deployed-app card must link to the deploy guide.
- **Change:** Add `docs/full-stack/mern-stack.md` (or equivalent slug) as a How-to guide: fork demo repo, create MongoDB + Backend capsules, set `DATABASE_URL`, push and verify boilerplate on Code Capsules. Slug example `/full-stack/mern-stack`.
- **Done when:** The file exists and the **Deployed MERN boilerplate** card points to it.

### build-a-mern-job-board-3

- **Type:** Format fix
- **Title:** Shorten step explanations to one sentence.
- **Problem:** Step 5 (**Add the SubmitJob component**) has two sentences explaining state and `/api/jobs/`. Step 10 (**Add the job database**) adds a second sentence about Mongoose. Other steps combine imperative and rationale in multiple sentences.
- **Rule:** `tutorial_format.md`, Parts — “Keep explanation to one sentence at most per step”; `FORMAT.MD`, Check 1 (Tutorial).
- **Change:** Keep one imperative sentence per step; move extra context to an Explanation link or delete it.
- **Done when:** Every numbered step body is at most one sentence before code blocks.

### build-a-mern-job-board-4

- **Type:** Broken link
- **Title:** Unblock MongoDB deploy prerequisite.
- **Problem:** Prerequisite card targets `monitor.md` because `mongodb/deploy.md` is missing from the repo.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3.
- **Change:** Do not duplicate work: after `docs/products/database-capsule/mongodb/deploy.md` exists (track with MongoDB deploy format tickets in this run), update the tutorial card `href` to that slug.
- **Done when:** **MongoDB Capsule** card links to the deploy how-to, not monitor.

## Proposed outline

```md
# Build a MERN Job Board
<Description repeat.>

## What you'll build
<Job board; one capsule.>

## Prerequisites
<DocCardList: account, Space, GitHub, fork MERN demo, deployed MERN how-to, MongoDB deploy how-to, Node.js; knowledge sentence.>

## Part 1: Run the boilerplate locally
1.–4. + Checkpoint (boilerplate on localhost)

## Part 2: Build the frontend
5.–9. + Checkpoint (form and list locally)

## Part 3: Build the backend
10.–14. + Checkpoint (submit job locally)

## Part 4: Deploy to Code Capsules
15.–18. + Checkpoint (live URL job board)

## Summary
## Next steps
## Troubleshooting
```