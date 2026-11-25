# Format report — 7.0 to 8.0 (MongoDB upgrade)

- **Run:** 2026-11-25-1239
- **Doc:** `docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Upgrade MongoDB 7.0 to 8.0
- **Goal:** Expect to see the database running on version 8.0
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Upgrade a Dedicated MongoDB Capsule from 7.0 to 8.0; when finished, capsule is **Running** and **MongoDB Configuration** shows **8.0**. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | MongoDB versions reference → confirm Dedicated 7.0 |
| 5 | prerequisite | `## Prerequisites` | Manual backup → `/docs/products/database-capsule/postgresql/backups` |
| 6 | goal | `## Upgrade your MongoDB database` | **Open the capsule** — On your **Space** dashboard, open Dedicated MongoDB Capsule. |
| 7 | goal | `## Upgrade your MongoDB database` | **Start the version change** — On **Config**, **MongoDB Configuration**, select `8.0`, save, confirm. |
| 8 | goal | `## Upgrade your MongoDB database` | **Wait for the rollout** — On the **Capsule** page, wait until **Running**. |
| 9 | goal | `## Upgrade your MongoDB database` | **Confirm version 8.0** — On **Config**, **MongoDB Configuration** shows **8.0**. |
| 10 | — | `## Troubleshooting` | Capsule stays on **Updating**; connection interruptions during upgrade. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | pass | Steps reach 8.0 on **Config**; prerequisites are not duplicated in the steps section. |
| Check 2: Prerequisites | pass | Backup, versions, account, and Space are linked DocCardList items. |
| Check 3: Links | pass | All prerequisite `href` values resolve under `docs/`. |
| Check 4: Format and style | fail | `title` and H1 use “Upgrade …” instead of the peer how-to **Host Your …** pattern. |

## Tickets

### 7-0-to-8-0-1

- **Type:** Format fix
- **Title:** Align H1 and frontmatter title with peer how-tos.
- **Problem:** `title` is “How to Upgrade MongoDB 7.0 to 8.0” and the H1 is `# Upgrade Your MongoDB Database From 7.0 to 8.0`.
- **Rule:** `how_to_format.md`, Title and description — H1 form such as “Host Your …” consistent with product deploy and upgrade guides in this repo.
- **Change:** Rename `title` and `#` (for example `How to Host Your MongoDB Database on 8.0` and `# Host Your MongoDB Database on 8.0`) while keeping the 7.0→8.0 outcome in `description` and intro.
- **Done when:** `title`, H1, and `description` follow the same naming pattern as other product how-tos and still state the 8.0 end state.

## Proposed outline

```md
---
slug: "/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0"
title: "How to Host Your MongoDB Database on 8.0"
description: >-
  Upgrade a Dedicated MongoDB Capsule from MongoDB 7.0 to 8.0. When you finish,
  the capsule is Running and MongoDB Configuration shows 8.0.
sidebar_label: "7.0 to 8.0"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your MongoDB Database on 8.0

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — account, Space, versions, manual backup>

## Upgrade your MongoDB database

1. **Open the capsule** — On your **Space**, …
2. **Start the version change** — On **Config**, …
3. **Wait for the rollout** — On the **Capsule** page, …
4. **Confirm version 8.0** — On **Config**, …

## Troubleshooting

<details> … </details>
```