# Format report — deploy

- **Run:** 2026-11-25-0931
- **Doc:** `docs/products/database-capsule/documentdb/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a DocumentDB Database
- **Goal:** Expect to see the database capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | (intro) | (under `#` title) | Create a MongoDB-compatible DocumentDB Capsule on Code Capsules. When you finish, the capsule build is in progress on **Builds**. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`). |
| 3 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`). |
| 4 | goal | `## Deploy your DocumentDB database` | **Start the capsule wizard** — Open your Space. Click **+** and select **New Capsule**. |
| 5 | goal | `## Deploy your DocumentDB database` | **Choose MongoDB Compatible** — Select **MongoDB Compatible**, your Team, and Space. Click **Next**. (No screen name.) |
| 6 | goal (vague values) | `## Deploy your DocumentDB database` | **Choose plan and resources** — On **Plan & Deploy**, choose a **Plan** and configure **CPU**, **RAM**, **Storage**, and **Replicas** (plan not named). |
| 7 | goal | `## Deploy your DocumentDB database` | **Create the capsule** — Enter **Capsule Name** and click **Create Capsule**. (No screen name.) |
| 8 | goal | `## Deploy your DocumentDB database` | **Check the build** — Open capsule **Deploy** tab, **Builds**; database capsule build is in progress. |
| 9 | — | `## Troubleshooting` | Changes did not save — refresh, confirm **Save**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Step 3 does not name the **Plan** value the reader selects; goal depends on a specific plan tier or option. |
| Check 2: Prerequisites | pass | Account and Space are card-linked prerequisites; shared pages exist under `docs/shared/`. |
| Check 3: Links | pass | Prerequisite `href` values resolve to `docs/shared/create-an-account.md` and `docs/shared/create-a-space.md`. |
| Check 4: Format and style | fail | `title` and `#` heading use “Deploy” instead of the required “Host Your …” pattern; steps 2 and 4 do not open with the wizard screen name in bold; step 3 uses vague “choose a **Plan**”. |

## Tickets

### deploy-1

- **Type:** Format fix
- **Title:** Use the Host title pattern in frontmatter and H1.
- **Problem:** `title` is “How to Deploy a DocumentDB Database” and the H1 is `# Deploy Your DocumentDB Database`. Peer deploy guides use “How to Host …” and `# Host Your …`.
- **Rule:** `how_to_format.md`, Title and description: page **must** have one `#` title in the form “Host Your &lt;Framework&gt; Application”.
- **Change:** Set `title` to “How to Host a DocumentDB Database” (or consistent wording) and H1 to `# Host Your DocumentDB Database`, matching `docs/products/frontend-capsule/static/deploy.md`.
- **Done when:** Frontmatter `title` and `#` heading follow the Host pattern and stay aligned with `sidebar_label: Deploy`.

### deploy-2

- **Type:** Format fix
- **Title:** Open steps 2 and 4 with the wizard screen name.
- **Problem:** Step 2 begins with “Select **MongoDB Compatible** …” without “On **Capsule Details**, …”. Step 4 begins with “Enter a **Capsule Name** …” without naming the screen.
- **Rule:** `how_to_format.md`, Steps: one step per wizard screen; start the description with the screen’s name in bold.
- **Change:** Prefix step 2 with **Capsule Details** (as in `docs/products/docker-capsule/git/deploy.md` step 2). Prefix step 4 with the screen where **Capsule Name** and **Create Capsule** appear (typically **Plan & Deploy** or the final wizard step).
- **Done when:** Every deployment step except the first opens with “On **&lt;Screen&gt;**, …”.

### deploy-3

- **Type:** Format fix
- **Title:** Name the plan the reader selects in step 3.
- **Problem:** Step 3 says “choose a **Plan**” without stating which plan option applies to MongoDB Compatible / DocumentDB capsules.
- **Rule:** `FORMAT.MD`, Check 1 — values the goal depends on must not be missing or unclear; `how_to_format.md`, Steps — state every value exactly (don’t write “your plan”).
- **Change:** On **Plan & Deploy**, name the plan tier or options the reader picks (for example **Free** and **Paid**, or the product’s named tiers), then keep **CPU**, **RAM**, **Storage**, and **Replicas** explicit.
- **Done when:** Step 3 names the plan choice without “choose a plan” wording.

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

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space>

## Deploy your DocumentDB database

1. **Start the capsule wizard**
   Open your Space. Click **+**. Select **New Capsule**.

2. **Choose MongoDB Compatible**
   On **Capsule Details**, select **MongoDB Compatible**, your Team, and Space. Click **Next**.

3. **Choose plan and resources**
   On **Plan & Deploy**, select <named plan option(s)>, set **CPU**, **RAM**, **Storage**, and **Replicas**. Click **Next** if required.

4. **Create the capsule**
   On **Plan & Deploy** (or final screen), enter **Capsule Name**. Click **Create Capsule**.

5. **Check the build**
   On the capsule **Deploy** tab, open **Builds**. The database capsule build is in progress or queued.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
```