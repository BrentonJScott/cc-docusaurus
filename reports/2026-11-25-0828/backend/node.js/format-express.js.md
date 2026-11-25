# Format report: express.js.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/backend/node.js/express.js.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host an Express.js Application
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. **prerequisite** — Card: Code Capsules account — `## Prerequisites`
2. **prerequisite** — Card: Fork demo-express-js — `## Prerequisites`
3. **prerequisite** — Card: A Space — `## Prerequisites`
4. **prerequisite** — Card: GitHub connected — `## Prerequisites`
5. **goal** — In your Space, click **+** to add a new capsule — `## Deploy your Express.js app` (step 1)
6. **goal** — On **Capsule Details**, choose **Backend Capsule**, Team, Space — step 2
7. **goal** — On **Plan**, choose **Basic** — step 3
8. **goal** — On **Source Code**, select `demo-express-js` fork and `master` — step 4
9. **goal** — On **Build and Deploy Settings**, leave **Run Command** blank — step 5
10. **goal** — Click **Create Capsule**; open **Builds** tab and see first build in progress — step 6
11. **remove** (troubleshooting only) — Repository dropdown / Live Website symptom fixes — `## Troubleshooting`

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | pass | Goal steps sit under `## Deploy your Express.js app`; the last step states the first build in progress on **Builds**, matching the feature goal. |
| Check 2: Prerequisites | fail | All four prerequisite cards point at `docs/shared/` pages that do not exist under `docs/`. |
| Check 3: Links | fail | Internal targets missing: `create-an-account`, `fork-a-demo-repo`, `create-a-space`, `connect-github`. |
| Check 4: Format and style | pass | Frontmatter, sections, and step layout match `how_to_format.md` and `writing_style.md`. |

## Tickets

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-an-account`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` (shared-create-an-account).
- **Done when:** That shared page exists and this guide's account card resolves.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-space.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-a-space`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` (shared-create-a-space).
- **Done when:** That shared page exists and this guide's Space card resolves.

### shared-fork-a-demo-repo

- **Type:** Shared page
- **Title:** Create `docs/shared/fork-a-demo-repo.md`.
- **Problem:** Prerequisites link to `/docs/shared/fork-a-demo-repo`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/frontend/format-static-html.md` (shared-fork-a-demo-repo); this guide's card names `codecapsules-io/demo-express-js`.
- **Done when:** The path resolves in `docs/` and the fork card link works.

### shared-connect-github

- **Type:** Shared page
- **Title:** Create `docs/shared/connect-github.md`.
- **Problem:** Prerequisites link to `/docs/shared/connect-github`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/connect-github.md` with slug `/shared/connect-github`, frontmatter per `writing_style.md`, and steps to install/authorize the Code Capsules GitHub app for the forked demo repo (outline in `docs.bak/shared/connect-github.md`).
- **Done when:** `/docs/shared/connect-github` resolves in `docs/` and the GitHub connected prerequisite card works.

## Proposed outline

```md
---
slug: "/backend/node.js/express.js"
title: "How to Host an Express.js Application"
description: >- (unchanged — build visible on Builds tab)
sidebar_label: "Express.js"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Express.js Application

(same as description)

## Prerequisites

<DocCardList — account, fork demo-express-js, Space, connect-github (all resolvable shared pages).>

## Deploy your Express.js app

1. **Start a Backend Capsule** — Open Space; add capsule.
2. **Choose type, Team, Space** — **Capsule Details**: **Backend Capsule**; **Next**.
3. **Choose the plan** — **Plan**: **Basic**; **Next**.
4. **Connect the repository** — **Source Code**: `demo-express-js`, `master`; **Next**.
5. **Set the run command** — **Build and Deploy Settings**: blank **Run Command**.
6. **Create the capsule** — **Create Capsule**; **Builds** tab shows first build in progress.

## Troubleshooting

<details> — Repository dropdown missing fork; fix via GitHub app access.
<details> — Live Website not loading until build completes.
```