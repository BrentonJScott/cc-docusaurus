# Format report — deploy

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/database-capsule/documentdb/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a DocumentDB Database
- **Goal:** Expect to see the database capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | (under `#` title) | Prefer MongoDB Capsules for new projects (link to MongoDB deploy). |
| 2 | remove | (under `#` title) | DocumentDB is a self-hosted MongoDB API–compatible database (background). |
| 3 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`). |
| 4 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`). |
| 5 | goal | `## Deploy your DocumentDB database` | **Start the capsule wizard** — Open Space; click yellow **+**; **New Capsule**. |
| 6 | goal | `## Deploy your DocumentDB database` | **Choose MongoDB Compatible** — Select type, Team, Space; **Next**. |
| 7 | goal (vague values) | `## Deploy your DocumentDB database` | **Choose plan and resources** — choose a **Plan**; configure **CPU**, **RAM**, **Storage**, **Replicas** (no exact plan). |
| 8 | goal (wrong end state) | `## Deploy your DocumentDB database` | **Create the capsule** — **Capsule Name**; **Create Capsule** (no Builds tab outcome). |
| 9 | remove | `## Deploy your DocumentDB database` | **Connect your application** — MongoDB framework guides; link to Configure. |
| 10 | — | `## Troubleshooting` | Changes did not save — refresh, confirm **Save**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | `remove` content sits under the title and inside the steps section; the last goal step does not state that the reader sees the capsule building on **Builds**; description/intro do not match the documented feature goal. |
| Check 2: Prerequisites | fail | Prerequisite cards link to `/docs/shared/create-an-account` and `/docs/shared/create-a-space`; no `docs/shared/` pages exist yet. |
| Check 3: Links | fail | Broken targets: both shared prerequisite paths; `/products/database-capsule/mongodb/deploy/` (no file under `docs/`). |
| Check 4: Format and style | fail | Extra paragraph and cross-guide link between title and **Prerequisites**; intro/`description` omit the Builds-tab goal; step 1 uses colour for a control; step 3 does not state plan values exactly; steps heading casing inconsistent with template examples. |

## Tickets

### deploy-1

- **Type:** Missing goal step
- **Title:** End deployment steps with the Builds tab goal state.
- **Problem:** Step 4 ends after **Create Capsule** with no mention of **Builds**. The documented goal is “Expect to see the database capsule building in builds tab.”
- **Rule:** `FORMAT.MD`, Check 1 (How-to: goal steps); `how_to_format.md`, Steps: “The last step **must** end with the reader seeing the goal.”
- **Change:** Add or rewrite the final deployment step so the reader opens the capsule **Deploy** tab (or equivalent), opens **Builds**, and sees the database capsule build in progress or queued—mirroring `docs/frontend/static-html.md` step 7.
- **Done when:** The last numbered deployment step describes the reader seeing a build on **Builds**, matching `DOCUMENTED_FEATURES.md`.

### deploy-2

- **Type:** Remove content
- **Title:** Remove non-goal intro and step 5 from the deployment flow.
- **Problem:** Under `# Deploy Your DocumentDB Database`, a preference for MongoDB Capsules and background on DocumentDB appear before **Prerequisites**. Step 5 **Connect your application** points to Configure and framework guides instead of finishing deployment.
- **Rule:** `FORMAT.MD`, Check 1 (`remove`); `how_to_format.md`, Title and description: “Nothing else goes between the title and `## Prerequisites`”; Steps: only actions needed to reach the goal.
- **Change:** Delete the MongoDB Capsules paragraph and the background sentence from the title block. Remove step 5 from the numbered list (connection belongs in configure/how-to guides, not this deploy goal).
- **Done when:** Only one or two sentences matching `description` sit under the `#` title, and every step is a `goal` step through the Builds outcome.

### deploy-3

- **Type:** Format fix
- **Title:** Align `description`, H1 intro, and title with the documented goal.
- **Problem:** `description` and the line under the H1 say “Deploy a self-hosted, MongoDB-compatible DocumentDB database on Code Capsules” but do not state that the first build is visible on **Builds**.
- **Rule:** `how_to_format.md`, Title and description: must match the feature’s goal; `writing_style.md`, Every doc: intro repeats `description`.
- **Change:** Update `description` and the intro to include the Builds-tab end state (e.g. “When you finish, the capsule build is in progress on **Builds**”). Align `#` title with frontmatter if needed (`Host Your DocumentDB Database` or equivalent consistent with other deploy guides).
- **Done when:** Frontmatter, H1, and intro all describe the same Builds-tab outcome as the feature list.

### deploy-4

- **Type:** Format fix
- **Title:** Name the new-capsule control without colour.
- **Problem:** Step 1 says “Click the yellow **+**”.
- **Rule:** `writing_style.md`, Words: do not name controls by colour or position alone.
- **Change:** Rewrite to “Click **+**” or the exact control label shown in the UI (e.g. **New Capsule** only if that is the clickable control text).
- **Done when:** No colour-only UI reference remains in the steps.

### deploy-5

- **Type:** Format fix
- **Title:** State plan and screen names explicitly in step 3.
- **Problem:** Step 3 says “choose a **Plan**” without a specific plan value, and the screen name is not opened as “On **Plan & Deploy**, …” per the template pattern.
- **Rule:** `how_to_format.md`, Steps: start with the screen in bold; state every value the goal depends on exactly.
- **Change:** Open with **Plan & Deploy**, name the plan tier or option the reader selects for DocumentDB/MongoDB Compatible capsules, and keep **CPU**, **RAM**, **Storage**, and **Replicas** explicit.
- **Done when:** Step 3 follows the screen-first pattern and does not use vague “choose a plan” wording.

### deploy-6

- **Type:** Broken link
- **Title:** Fix or remove the MongoDB deploy cross-link.
- **Problem:** Intro links to `[MongoDB Capsules](/products/database-capsule/mongodb/deploy/)`; no `docs/products/database-capsule/mongodb/deploy.md` exists (only under `docs.bak/`).
- **Rule:** `FORMAT.MD`, Check 3: Links.
- **Change:** If the intro is removed per deploy-2, this link goes away. If a cross-link is kept elsewhere, point it at an existing MongoDB doc in `docs/` or add the deploy page first.
- **Done when:** No internal link in the file targets a missing `docs/` path.

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** Prerequisites card links to `/docs/shared/create-an-account`; file missing under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Same as ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` — add the shared account page so this guide’s card resolves.
- **Done when:** Path exists under `docs/` and the prerequisite card link works.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-space.md`.
- **Problem:** Prerequisites card links to `/docs/shared/create-a-space`; file missing under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Same as ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` — add the shared Space page.
- **Done when:** Path exists under `docs/` and the Space card link works.

## Proposed outline

```md
---
slug: "/products/database-capsule/documentdb/deploy"
title: "How to Host a DocumentDB Database"
description: >-
  Create a MongoDB-compatible DocumentDB Capsule on Code Capsules. When you
  finish, the capsule build is in progress on **Builds**.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your DocumentDB Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space → shared pages>

## Deploy your DocumentDB database

1. **Open the capsule wizard**
   Open your Space. Click **+**. Select **New Capsule**.

2. **Choose MongoDB Compatible**
   On **Capsule Details**, select **MongoDB Compatible**, your Team, and Space. Click **Next**.

3. **Choose plan and resources**
   On **Plan & Deploy**, select <named plan>, set **CPU**, **RAM**, **Storage**, and **Replicas**. Click **Next**.

4. **Create the capsule**
   Enter **Capsule Name**. Click **Create Capsule**.

5. **Check the build**
   On the capsule **Deploy** tab, open **Builds**. The database capsule build is in progress or queued.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
```