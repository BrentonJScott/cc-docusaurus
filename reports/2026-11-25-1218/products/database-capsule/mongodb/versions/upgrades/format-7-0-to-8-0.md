# Format report — 7.0 to 8.0 (MongoDB upgrade)

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Upgrade MongoDB 7.0 to 8.0
- **Goal:** Expect to see the database running on version 8.0
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Upgrade a Dedicated MongoDB Capsule on Code Capsules from MongoDB 7.0 to 8.0. When you finish, the capsule is **Running** and **MongoDB Configuration** shows **8.0**. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | MongoDB 7.0 capsule → `/docs/products/database-capsule/mongodb/versions` |
| 5 | prerequisite | `## Upgrade your MongoDB database` step 1 | Take a manual backup first; applications may see short connection interruptions while **Updating**. |
| 6 | goal | `## Upgrade your MongoDB database` | **Open the capsule** — In your Space, open your Dedicated MongoDB Capsule. |
| 7 | goal | `## Upgrade your MongoDB database` | **Start the version change** — On **Config**, in **MongoDB Configuration**, click **Edit**, select `8.0`, save, confirm. |
| 8 | goal | `## Upgrade your MongoDB database` | **Wait for the rollout** — Wait until status is **Running** and the new version is fully applied. |
| 9 | goal | `## Upgrade your MongoDB database` | **Confirm version 8.0** — On **Config**, **MongoDB Configuration** shows **8.0**; run `db.version()`; review application logs. |
| 10 | — | `## Troubleshooting` | The capsule stays on Updating — wait for **Running**, check **Config** again. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Manual backup and disruption planning are labelled `prerequisite` but appear inside the steps section, not in `## Prerequisites`. |
| Check 2: Prerequisites | fail | Backup (and awareness of **Updating** disruption) are not prerequisite cards with links; backup is explained in step 1 instead. |
| Check 3: Links | pass | All DocCardList `href` values resolve to files under `docs/`. |
| Check 4: Format and style | fail | H1 and `title` do not use the required “Host Your …” / “How to Host …” pattern; step bodies for **Open the capsule** and **Wait for the rollout** do not open with the screen name in bold (`On **Screen**,`). |

## Tickets

### 7-0-to-8-0-1

- **Type:** Move to prerequisites
- **Title:** Move backup and disruption notice out of step 1.
- **Problem:** Step **Open the capsule** says “Take a manual backup first, because applications may see short connection interruptions while the capsule shows **Updating**.”
- **Rule:** `FORMAT.MD`, Check 1 — any `prerequisite` instruction must not be inside the steps section; `how_to_format.md`, Prerequisites — don’t explain prerequisites on the guide page.
- **Change:** Remove backup and disruption prose from step 1. Add a prerequisite card (with `href` to a MongoDB backups how-to once it exists under `docs/`, or reference a **Shared page** ticket if none exists). Keep step 1 limited to opening the capsule in the Space.
- **Done when:** Step 1 contains only opening the Dedicated MongoDB Capsule, and backup/disruption appear only as linked prerequisite cards.

### 7-0-to-8-0-2

- **Type:** Format fix
- **Title:** Align H1 and frontmatter title with the how-to template.
- **Problem:** `title` is “How to Upgrade MongoDB 7.0 to 8.0” and the H1 is `# Upgrade Your MongoDB Database From 7.0 to 8.0`.
- **Rule:** `how_to_format.md`, Title and description — H1 in the form “Host Your &lt;Framework&gt; Application” (or the same pattern peer deploy and upgrade guides use, e.g. “Host Your …”).
- **Change:** Rename `title` and `#` to a consistent “Host Your …” headline that still states the 7.0→8.0 outcome (for example `# Host Your MongoDB Database on 8.0` with matching `title`).
- **Done when:** `title` and H1 follow the template pattern used by other product how-tos in this repo.

### 7-0-to-8-0-3

- **Type:** Format fix
- **Title:** Open each step on the screen name in bold.
- **Problem:** **Open the capsule** starts with “In your Space, open …” instead of `On **<screen>**,`. **Wait for the rollout** starts with “Wait until the capsule status …” without naming the dashboard or status area in bold first.
- **Rule:** `how_to_format.md`, Steps — “Start the description with the screen's name in bold, such as ‘On **Plan**, …’.”
- **Change:** Rewrite step bodies so each opens with the relevant UI surface (for example `On your **Space**,` / `On the capsule **Overview**,` for open and wait steps).
- **Done when:** Every numbered step description begins with `On **…**,` naming the screen or tab the reader acts on.

## Proposed outline

```md
---
slug: "/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0"
title: "How to Host Your MongoDB Database on 8.0"
description: >-
  Upgrade a Dedicated MongoDB Capsule on Code Capsules from MongoDB 7.0 to 8.0.
  When you finish, the capsule is Running and MongoDB Configuration shows 8.0.
sidebar_label: "7.0 to 8.0"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your MongoDB Database on 8.0

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ MongoDB 7.0 capsule, backup card when backups doc exists>

## Upgrade your MongoDB database

1. **Open the capsule**

   On your **Space**, open the Dedicated MongoDB Capsule.

2. **Start the version change**

   On **Config**, in **MongoDB Configuration**, click **Edit**, select **8.0**, save, and confirm when prompted.

3. **Wait for the rollout**

   On the capsule **Overview**, wait until status is **Running** and the version change finishes.

4. **Confirm version 8.0**

   On **Config**, **MongoDB Configuration** shows **8.0** as the active version; optionally run `db.version()` and confirm **8.0**.

## Troubleshooting

<details>
<summary>The capsule stays on Updating</summary>

The new version is still being applied. Wait for **Running**, then check **Config** again.

</details>
```