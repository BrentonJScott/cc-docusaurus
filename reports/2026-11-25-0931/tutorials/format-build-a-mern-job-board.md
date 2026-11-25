# Format report: Build a MERN Job Board

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/tutorials/build-a-mern-job-board.md`
- **Doc type:** Tutorial
- **Template:** `formats/tutorial_format.md`
- **Feature:** Build a MERN Job Board
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list (Check 1)

1. `build` — (under `# Build a MERN Job Board`) — Intro repeats `description`: extend boilerplate into a job board and deploy on Code Capsules.
2. `build` — `## What you'll build` — Job board with submit form, listings, Express API, MongoDB, one capsule for frontend and backend.
3. `prerequisite` — `## Prerequisites` — Account, Space, GitHub, deployed MERN boilerplate, MongoDB Capsule, Node.js cards.
4. `prerequisite` — `## Prerequisites` — Basic JavaScript and React knowledge (sentence under cards).
5. `build` — `## Part 1: Run the boilerplate locally` — Clone fork, install, `DATABASE_URL`, dotenv, build client, run `node index.js`.
6. `build` — `## Part 1` (checkpoint) — `localhost:8080` shows boilerplate MERN app.
7. `build` — `## Part 2: Build the frontend` — SubmitJob, ViewJobs, `App.js`, CSS, `npm run build`.
8. `build` — `## Part 2` (checkpoint) — Submit form and job list on localhost.
9. `build` — `## Part 3: Build the backend` — Models, controller, routes, wire `job.routes` in `index.js`.
10. `build` — `## Part 3` (checkpoint) — Submitted job appears in the list.
11. `build` — `## Part 4: Deploy to Code Capsules` — `.gitignore`, commit, push `main`, open live URL.
12. `build` — `## Part 4` (checkpoint) — Live job board accepts submissions.
13. `remove` — `## Summary` — Recap (not part of build path).
14. `remove` — `## Next steps` — Optional follow-on links.
15. `remove` — `## Troubleshooting` — Deploy failure note.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (build steps) | pass | Build work is in numbered steps under `## Part N`; four checkpoints; last part ends on Code Capsules with a live-URL checkpoint. |
| Check 2: Prerequisites | fail | Step 1 assumes a forked repo but `## Prerequisites` has no card linking to `docs/shared/fork-a-demo-repo.md`. |
| Check 3: Links | pass | Every `/docs/...` card and body link resolves under `docs/`. |
| Check 4: Format and style | fail | `tutorial_format.md`, Prerequisites: deployed MERN card links to `/docs/full-stack` (Explanation), not a How-to; `writing_style.md`, Links: step 8 uses link text "this CSS file". |

## Tickets

### build-a-mern-job-board-1

- **Type:** Format fix
- **Title:** Add a fork prerequisite card.
- **Problem:** Step 1 says "Clone your forked repository," but `## Prerequisites` has no fork card. `docs/shared/fork-a-demo-repo.md` exists.
- **Rule:** `FORMAT.MD`, Check 2; `tutorial_format.md`, Prerequisites.
- **Change:** Add `{type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork the MERN boilerplate', description: '...'}` (or equivalent) before Part 1.
- **Done when:** Every prerequisite from Check 1 (including the forked repo) appears as a linked card in `## Prerequisites`.

### build-a-mern-job-board-2

- **Type:** Format fix
- **Title:** Point the deployed MERN prerequisite at a How-to guide.
- **Problem:** The card `🛠️ Deployed MERN boilerplate` uses `href: '/docs/full-stack'`, which is an Explanation page, not a How-to that walks through deploying `codecapsules-io/mern-stack`.
- **Rule:** `tutorial_format.md`, Prerequisites (cards must link to shared, How-to, or a download site).
- **Change:** Replace the `href` with an existing How-to slug that covers deploying the MERN boilerplate, or add a dedicated How-to in a separate doc ticket and link this card to it.
- **Done when:** The deployed MERN card links to a How-to under `docs/`, not only to the full-stack Explanation index.

### build-a-mern-job-board-3

- **Type:** Format fix
- **Title:** Use descriptive link text for the App.css source.
- **Problem:** Step 8 links with anchor text "this CSS file" to GitHub.
- **Rule:** `writing_style.md`, Links and images (link text says where the link goes).
- **Change:** Rename the link text to name the target, e.g. `ritza-co/mern-job-board` `App.css` on GitHub.
- **Done when:** No link on the page uses vague text like "this CSS file."

## Proposed outline

```md
---
slug: "/tutorials/build-a-mern-job-board"
title: "Build a MERN Job Board"
description: >-
  Extend the MERN boilerplate into a job board where users view and submit jobs, then deploy it on Code Capsules.
sidebar_label: "Build a MERN Job Board"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Build a MERN Job Board

<Repeat description.>

## What you'll build

<Job board + single capsule.>

## Prerequisites

<DocCardList: account, Space, GitHub, fork MERN repo, deployed MERN how-to, MongoDB capsule, Node.js; knowledge sentence.>

## Part 1: Run the boilerplate locally

1.–4. **Clone / env / dotenv / run**

:::tip[Checkpoint]
Boilerplate on localhost:8080.
:::

## Part 2: Build the frontend

5.–9. **Components, App.js, CSS, build**

:::tip[Checkpoint]
Form and list on localhost.
:::

## Part 3: Build the backend

10.–14. **Model, controller, routes, index.js**

:::tip[Checkpoint]
Submit job appears in list.
:::

## Part 4: Deploy to Code Capsules

15.–18. **gitignore, commit, push, open live URL**

:::tip[Checkpoint]
Live job board works.
:::

## Summary

## Next steps

<DocCardList — 2–3 cards.>

## Troubleshooting

<details>…</details>
```