# Format report — deploy

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/database-capsule/documentdb/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a DocumentDB Database
- **Goal:** Expect to see the database capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | `# Deploy Your DocumentDB Database` | Create a MongoDB-compatible DocumentDB Capsule; when you finish, build in progress on **Builds**. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | goal | `## Deploy your DocumentDB database` | **Start the capsule wizard** — Open Space; click **+**; **New Capsule**. |
| 5 | goal | `## Deploy your DocumentDB database` | **Choose MongoDB Compatible** — Select **MongoDB Compatible**, Team, Space; **Next** (no screen name). |
| 6 | goal (vague value) | `## Deploy your DocumentDB database` | **Choose plan and resources** — On **Plan & Deploy**, choose a **Plan**; configure **CPU**, **RAM**, **Storage**, **Replicas**. |
| 7 | goal | `## Deploy your DocumentDB database` | **Create the capsule** — Enter **Capsule Name**; **Create Capsule**. |
| 8 | goal | `## Deploy your DocumentDB database` | **Check the build** — **Deploy** tab → **Builds**; database capsule build is in progress. |
| 9 | — | `## Troubleshooting` | Changes did not save — refresh; confirm **Save**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Step 3 does not name the plan explicitly; the goal depends on a selected plan tier. |
| Check 2: Prerequisites | pass | Account and Space prerequisites are DocCardList links to existing `docs/shared/` pages. |
| Check 3: Links | pass | All prerequisite `href` values resolve under `docs/`. |
| Check 4: Format and style | fail | H1 and frontmatter `title` use “Deploy” instead of the required “Host” pattern; step 2 omits the wizard screen name; step 3 uses vague plan wording. |

## Tickets

### deploy-1

- **Type:** Format fix
- **Title:** State the plan tier explicitly in step 3.
- **Problem:** Step **Choose plan and resources** says “On **Plan & Deploy**, choose a **Plan**” without naming which plan the reader selects (for example **Free**, **Paid**, or **Custom**).
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1 — missing or unclear plan fails the check.
- **Change:** Name the plan option the walkthrough uses on test-platform for MongoDB Compatible / DocumentDB capsules. Keep **CPU**, **RAM**, **Storage**, and **Replicas** as written.
- **Done when:** Step 3 names a specific plan (not “choose a **Plan**”) and matches the format walkthrough path.

### deploy-2

- **Type:** Format fix
- **Title:** Use the “Host Your …” title pattern.
- **Problem:** Frontmatter `title` is “How to Deploy a DocumentDB Database” and the H1 is `# Deploy Your DocumentDB Database`. Peer deploy guides use “How to Host …” and `# Host Your …`.
- **Rule:** `how_to_format.md`, Title and description — H1 in the form “Host Your <Framework> Application”; `writing_style.md`, Every doc — one `#` title aligned with the template.
- **Change:** Set `title` to “How to Host a DocumentDB Database” (or equivalent consistent with other product deploy guides) and H1 to `# Host Your DocumentDB Database`.
- **Done when:** Frontmatter `title` and H1 follow the Host pattern used on `docs/products/frontend-capsule/static/deploy.md` and `docs/products/docker-capsule/git/deploy.md`.

### deploy-3

- **Type:** Format fix
- **Title:** Open step 2 with the Capsule Details screen name.
- **Problem:** Step **Choose MongoDB Compatible** begins with “Select **MongoDB Compatible**” and does not open with the screen in bold, such as “On **Capsule Details**, …”.
- **Rule:** `how_to_format.md`, Steps — one step per wizard screen; start the description with the screen name in bold.
- **Change:** Rewrite the step body to open with **Capsule Details**, then select **MongoDB Compatible**, Team, and Space. Click **Next**.
- **Done when:** Step 2 matches the screen-first pattern used in other capsule deploy guides.

## Proposed outline

```md
---
slug: "/products/database-capsule/documentdb/deploy"
title: "How to Host a DocumentDB Database"
description: >-
  Create a MongoDB-compatible DocumentDB Capsule on Code Capsules. When you finish, the capsule build is in progress on **Builds**.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your DocumentDB Database

Create a MongoDB-compatible DocumentDB Capsule on Code Capsules. When you finish, the capsule build is in progress on **Builds**.

## Prerequisites

<DocCardList — 👤 account, 📦 Space />

## Deploy your DocumentDB database

1. **Start the capsule wizard**
   Open your Space. Click **+** and select **New Capsule**.

2. **Choose MongoDB Compatible**
   On **Capsule Details**, select **MongoDB Compatible**, your Team, and Space. Click **Next**.

3. **Choose plan and resources**
   On **Plan & Deploy**, select <named plan>. Configure **CPU**, **RAM**, **Storage**, and **Replicas**. Click **Next**.

4. **Create the capsule**
   On **Deploy**, enter **Capsule Name**. Click **Create Capsule**.

5. **Check the build**
   Open the capsule **Deploy** tab. On **Builds**, confirm the database capsule build is in progress or queued.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
```