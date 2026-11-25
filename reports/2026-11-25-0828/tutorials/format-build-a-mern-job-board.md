# Format report: build-a-mern-job-board.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/tutorials/build-a-mern-job-board.md`
- **Doc type:** Tutorial
- **Template:** `formats/tutorial_format.md`
- **Feature:** Build a MERN Job Board
- **Goal:** Finished job board app deployed on Code Capsules after extending the MERN boilerplate
- **Format check:** fail

## Content list

1. **build** — MERN stack extends to a job board where users view and submit jobs — `## What you'll build`
2. **prerequisite** — Account, Space, GitHub cards — `## Prerequisites`
3. **prerequisite** — Follow MERN stack deployment guide and clone forked repo — `## Part 1: Build the project` / `### Getting Started`
4. **prerequisite** — `npm install`, local `DATABASE_URL`, dotenv — `### Getting Started`
5. **build** — Extend React frontend (`SubmitJob`, `ViewJobs`, `App.js`, CSS) — `### Extending the Frontend`
6. **build** — Job model, controllers, routes, wire `index.js` — `### Extending the Backend`
7. **build** — Static `client/build`, version control, git push — `### Integrating…`, `### Using Version Control`
8. **remove** — Optional extra job fields (“If you added more fields…”) — `#### Adding the Job Model`

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (build steps) | fail | Boilerplate setup lives inside Part 1; work uses `###` headings instead of numbered build steps; single part with one weak checkpoint; code blocks lack file paths; alternatives offered; long explanations; checkpoint describes local state, not deployed app on Code Capsules. |
| Check 2: Prerequisites | fail | Missing cards for deployed MERN boilerplate and Node.js; MERN setup explained in Part 1 instead of linked; shared account/Space pages missing under `docs/shared/`. |
| Check 3: Links | fail | Eight internal targets missing or wrong: shared prerequisites, `/platform/account/connect-version-control`, `/full-stack/mern-stack/`, `/database/mongodb/`, `/tutorials`, `/frontend/index`, `/backend/index`. |
| Check 4: Format and style | fail | No description under `#` title; section layout not per `tutorial_format.md` (parts, numbered steps, checkpoints per part); Summary and Next steps do not meet template. |

## Tickets

### build-a-mern-job-board-1

- **Type:** Format fix
- **Title:** Restructure into parts with numbered steps and checkpoints.
- **Problem:** The doc has one `## Part 1: Build the project` with nested `###` / `####` headings and prose, not the required cross-tutorial numbered list (`1. **Title**` …) with a `:::tip[Checkpoint]` after each part.
- **Rule:** `tutorial_format.md`, Parts; `writing_style.md`, Page pieces (numbered lists for steps).
- **Change:** Split into two to five parts (e.g. run boilerplate locally, build frontend, build backend, deploy). Convert every instruction into numbered steps with bold titles; put file paths on their own line above each code block; end each part with a checkpoint stating what the reader sees (local or live URL).
- **Done when:** Headings match the template order; each part ends with a checkpoint; steps are numbered continuously across parts.

### build-a-mern-job-board-2

- **Type:** Move to prerequisites
- **Title:** Move MERN boilerplate setup out of Part 1.
- **Problem:** “Head over to the [MERN stack deployment guide](/full-stack/mern-stack/) and follow the steps…” and local `DATABASE_URL` / `npm install` setup appear under Part 1.
- **Rule:** `FORMAT.MD`, Check 1 (Tutorial); `tutorial_format.md`, Prerequisites.
- **Change:** Add prerequisite cards (deployed MERN boilerplate how-to, Node.js, MongoDB connection if needed). Replace Part 1 setup prose with links; Part 1 should start at the first build step for a reader who already has the boilerplate running locally.
- **Done when:** No prerequisite-labelled steps remain inside any `## Part N` section.

### build-a-mern-job-board-3

- **Type:** Missing goal step
- **Title:** End the last part with Code Capsules deployment verified.
- **Problem:** Checkpoint says “The local project matches the state described above.” Summary claims deployment on Code Capsules but no step tells the reader what to see on the live capsule after push.
- **Rule:** `FORMAT.MD`, Check 1 (Tutorial); `tutorial_format.md`, Parts (“The last part ends with the app deployed on Code Capsules”).
- **Change:** Add a final deploy milestone step and checkpoint (e.g. open the capsule URL and confirm the job board loads and accepts submissions).
- **Done when:** Last checkpoint describes the deployed app on Code Capsules, not only localhost.

### build-a-mern-job-board-4

- **Type:** Format fix
- **Title:** Add title blurb, rewrite Summary, fix Next steps cards.
- **Problem:** `# Build a MERN Job Board` is not followed by one or two sentences repeating the description; Summary is one generic sentence; Next steps uses three index links that do not resolve in `docs/`.
- **Rule:** `writing_style.md`, Every doc; `tutorial_format.md`, Summary and Next steps.
- **Change:** Add description under the `#` title; expand Summary to two to four sentences on what the reader built; replace Next steps `DocCardList` with two or three cards to real `docs/` paths (tutorial, how-to, or explanation).
- **Done when:** Title blurb matches frontmatter; Summary describes the finished job board; every Next steps `href` resolves under `docs/`.

### build-a-mern-job-board-5

- **Type:** Remove content
- **Title:** Remove optional paths and trim over-explanation.
- **Problem:** “If you added more fields to your frontend…” offers an alternative path; many steps explain React/Mongoose for multiple sentences instead of one sentence plus links.
- **Rule:** `tutorial_format.md`, Parts (one path only; one sentence explanation); `FORMAT.MD`, Check 1.
- **Change:** Delete optional-field branches; shorten explanations or link Explanation pages; keep CSS via an in-repo path or pasted snippet, not only an external GitHub URL if an internal guide exists.
- **Done when:** No “you could also” branches; step prose is one sentence unless linked out.

### build-a-mern-job-board-6

- **Type:** Broken link
- **Title:** Fix or replace broken internal links in the body and cards.
- **Problem:** Links target pages absent from `docs/`: `/full-stack/mern-stack/`, `/database/mongodb/`, `/platform/account/connect-version-control`, `/tutorials`, `/frontend/index`, `/backend/index`.
- **Rule:** `FORMAT.MD`, Check 3; `writing_style.md`, Links and images.
- **Change:** Point each link at an existing slug in `docs/` or add the missing pages in separate tickets before linking.
- **Done when:** Every internal `href` and markdown link resolves to a file under `docs/`.

### build-a-mern-job-board-7

- **Type:** Broken link
- **Title:** Unblock prerequisite cards to shared pages.
- **Problem:** Cards use `/docs/shared/create-an-account` and `/docs/shared/create-a-space`, which are not in the repo.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3.
- **Change:** No duplicate shared-page work; unblock when **shared-create-an-account** and **shared-create-a-space** in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` are done (add cards only if this tutorial still needs account/Space after prerequisite refactor).
- **Done when:** Each prerequisite card `href` resolves under `docs/`.

## Proposed outline

```md
---
slug: "/tutorials/build-a-mern-job-board"
title: "Build a MERN Job Board"
description: >-
  Extend the MERN boilerplate into a job board and deploy it on Code Capsules.
sidebar_label: "MERN Job Board"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Build a MERN Job Board

<Description repeat.>

## What you'll build

<Job board: post and view jobs.>

## Prerequisites

<DocCardList: deployed MERN boilerplate, Node.js, MongoDB capsule / connection, GitHub; knowledge sentence.>

## Part 1: Run the boilerplate locally

<Intro sentence.>

1. **Clone and install**
2. **Set DATABASE_URL**
3. **Start the app**

:::tip[Checkpoint]
localhost:8080 shows boilerplate app.
:::

## Part 2: Build the frontend

4. **Add SubmitJob**
5. **Add ViewJobs**
6. **Wire App.js and styles**

:::tip[Checkpoint]
Form and job list visible locally.
:::

## Part 3: Build the API

7. **Job model**
8. **Controllers and routes**

:::tip[Checkpoint]
POST/GET `/api/jobs` work locally.
:::

## Part 4: Deploy

9. **Commit and push**
10. **Verify on Code Capsules**

:::tip[Checkpoint]
Live URL shows working job board.
:::

## Summary

## Next steps

<DocCardList: 2–3 valid doc links.>

## Troubleshooting

<details>…</details>
```