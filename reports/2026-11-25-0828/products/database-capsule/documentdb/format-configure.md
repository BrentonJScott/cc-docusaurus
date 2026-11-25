# Format report — configure (DocumentDB)

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/database-capsule/documentdb/configure.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Configure a DocumentDB Database
- **Goal:** Expect to see updated database settings saved
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove (intro misaligned) | (under `#` title) | Manage connection details and capsule settings from the dashboard. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`) |
| 3 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`) |
| 4 | prerequisite | `## Prerequisites` | DocumentDB Capsule (card → `/products/database-capsule/documentdb/deploy`) |
| 5 | goal | `## Configure your documentdb database` | **Open Details** — Open the DocumentDB Capsule and select the **Details** tab. |
| 6 | goal | `## Configure your documentdb database` | **View connection details** — Click **show** in **Connection Details** to reveal host, port, database name, username, password, and connection string. |
| 7 | goal (partial) | `## Configure your documentdb database` | **Rename the capsule** — Click **Edit** next to the capsule name in **Capsule Details**, then save. |
| 8 | remove | `## Configure your documentdb database` | **Connect from your laptop** — See Connect Locally when you need CLI access. |
| 9 | — | `## Troubleshooting` | Changes did not save — refresh, confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Steps never update or save database settings on **Config** (despite `description`); step 4 is a cross-link, not part of the goal; the last step does not end with updated database settings saved. |
| Check 2: Prerequisites | fail | Prerequisite cards link to `/docs/shared/create-an-account` and `/docs/shared/create-a-space`; no `docs/shared/` pages exist (see shared tickets in `format-scale.md`). |
| Check 3: Links | fail | `[Connect Locally](/products/database-capsule/documentdb/connect-locally/)` has no file under `docs/`; shared prerequisite paths missing. |
| Check 4: Format and style | fail | Intro does not repeat `description` or the documented goal; steps omit **Config** tab work promised in frontmatter; last numbered step does not close with the goal per `how_to_format.md` Steps. |

## Tickets

### configure-1

- **Type:** Missing goal step
- **Title:** Add **Config** steps and end with saved database settings.
- **Problem:** Under `## Configure your documentdb database`, steps cover **Details** (connection details, rename only). The feature goal is “Expect to see updated database settings saved,” and `description` names the **Config** tab, but no step opens **Config**, changes a database setting, clicks **Save**, and confirms the new value persists.
- **Rule:** `FORMAT.MD`, Check 1 (How-to guide: goal steps); `how_to_format.md`, Steps — last step must end with the reader seeing the goal.
- **Change:** After **Details** steps (or between them, if settings live on **Config**), add numbered steps: open the **Config** tab, **Edit** the relevant database settings (use exact field labels), click **Save**, reload or revisit the tab, and state what the reader sees when settings are saved. Remove reliance on step 4 as the ending.
- **Done when:** The numbered list alone takes a reader with prerequisites from the capsule to visibly saved database settings, and the final step describes that outcome.

### configure-2

- **Type:** Remove content
- **Title:** Remove the “Connect from your laptop” step.
- **Problem:** Step 4 under `## Configure your documentdb database` only points to `/products/database-capsule/documentdb/connect-locally/` and is not needed to save database settings.
- **Rule:** `FORMAT.MD`, Check 1 — content labelled `remove`; `how_to_format.md`, Steps — only actions needed to reach the goal.
- **Change:** Delete step 4 and its body from the numbered list.
- **Done when:** The steps section contains only goal actions with no “Connect Locally” step.

### configure-3

- **Type:** Format fix
- **Title:** Align title block copy with the documented goal.
- **Problem:** `description` says the reader will view connection details and settings on **Details** and **Config** tabs, but the intro (“Manage connection details…”) does not repeat `description` and neither states that updated database settings are saved when finished (`DOCUMENTED_FEATURES.MD` goal).
- **Rule:** `writing_style.md`, Every doc — one or two sentences repeat `description`; `how_to_format.md`, Title and description — match the feature goal.
- **Change:** Rewrite `description` and the one or two sentences under `# Configure Your DocumentDB Database` so they consistently promise saved/updated database settings after using **Details** and **Config**, still in one or two short sentences.
- **Done when:** Frontmatter `description` and intro text match each other and the documented feature goal.

### configure-4

- **Type:** Broken link
- **Title:** Remove or fix Connect Locally link.
- **Problem:** Step 4 links to `/products/database-capsule/documentdb/connect-locally/`; only `docs.bak/products/database-capsule/documentdb/connect-locally.md` exists.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Remove the step (configure-2). If a connect-locally doc is added later, link from prerequisites or a different guide, not from this configure flow.
- **Done when:** No link in `configure.md` targets a missing `docs/` path.

### Prerequisites — shared pages

See **shared-create-an-account** and **shared-create-a-space** in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`. This doc’s prerequisite cards depend on those pages before Check 2 can pass.

## Proposed outline

```md
---
slug: "/products/database-capsule/documentdb/configure"
title: "How to Configure a DocumentDB Database"
description: >-
  Update connection details and database settings for a DocumentDB Capsule on
  the Details and Config tabs. When you finish, your saved settings are visible
  on the capsule.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your DocumentDB Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ DocumentDB Capsule (deploy)>

## Configure your DocumentDB database

1. **Open Details**
   On the DocumentDB Capsule, open **Details**.

2. **View connection details**
   In **Connection Details**, click **Show**. Host, port, database name, username, password, and connection string are visible.

3. **Rename the capsule (optional)**
   In **Capsule Details**, click **Edit** next to the capsule name, change the name, click **Save**.

4. **Open Config**
   Select the **Config** tab.

5. **Edit database settings**
   Click **Edit** (or equivalent), change the database setting(s) the reader configures, click **Save**.

6. **Confirm saved settings**
   Reload or return to **Config** / **Details**; updated database settings match what you saved.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh and confirm **Save** on the correct section; note rebuild/redeploy delay if applicable.

</details>
```