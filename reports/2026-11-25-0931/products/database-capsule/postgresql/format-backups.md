# Format report — backups (PostgreSQL)

- **Run:** 2026-11-25-0931
- **Doc:** `docs/products/database-capsule/postgresql/backups.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Back Up a PostgreSQL Database
- **Goal:** Expect to see a backup created and available to restore
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal | (under `#` title) | Create a manual backup for your PostgreSQL Capsule on Code Capsules. When you finish, a completed backup is listed on **Backups** and is available to restore. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`). |
| 3 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`). |
| 4 | prerequisite (missing) | — | Reader must have a PostgreSQL Capsule in the Space before opening **Backups**; not listed in `## Prerequisites`. |
| 5 | goal | `## Back up your PostgreSQL database` | **Open the Capsule** — In your Space, open the PostgreSQL Capsule. |
| 6 | goal | `## Back up your PostgreSQL database` | **Open Backups** — On the Capsule, click the **Backups** tab. |
| 7 | goal | `## Back up your PostgreSQL database` | **Create a backup** — On **Backups**, click **Create backup**. Wait until status shows **Completed**. |
| 8 | goal | `## Back up your PostgreSQL database` | **Confirm the backup** — On **Backups**, the new backup appears in the list with a timestamp and is available to restore. |
| 9 | — | `## Troubleshooting` | Backup stays in progress — retry when the capsule is healthy. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Steps reach the documented goal, but a deployed PostgreSQL Capsule is a `prerequisite` and is not listed in `## Prerequisites`. |
| Check 2: Prerequisites | fail | Account and Space are linked cards; PostgreSQL Capsule prerequisite is missing from `DocCardList`. |
| Check 3: Links | pass | Prerequisite `href` values resolve to `docs/shared/create-an-account.md` and `docs/shared/create-a-space.md`. |
| Check 4: Format and style | fail | `how_to_format.md`, Steps: step bodies must start with the screen name in bold (`On **…**`); steps 1–2 do not. |

## Tickets

### backups-1

- **Type:** Format fix
- **Title:** Add a PostgreSQL Capsule prerequisite card.
- **Problem:** `## Prerequisites` lists only account and Space. Readers need an existing PostgreSQL Capsule to create a backup on **Backups**; peer database guides list a capsule deploy card.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add a third card: `{type: 'link', href: '/docs/products/database-capsule/postgresql/deploy', label: '🛠️ PostgreSQL Capsule', description: 'Create the Capsule first.'}` (or the correct in-repo deploy path when the guide exists).
- **Done when:** Every prerequisite from Check 1 appears as one linked card in `## Prerequisites`.

### backups-2

- **Type:** Broken link
- **Title:** Restore or link a PostgreSQL deploy guide for the prerequisite card.
- **Problem:** There is no `docs/products/database-capsule/postgresql/deploy.md` in the repo, so the capsule prerequisite cannot link to a valid doc yet.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/products/database-capsule/postgresql/deploy.md` that passes its own format check, or point the prerequisite card at the correct existing deploy page until one is added.
- **Done when:** The PostgreSQL Capsule card `href` resolves to a file under `docs/`.

### backups-3

- **Type:** Format fix
- **Title:** Open step descriptions on the screen name in bold.
- **Problem:** Step 1 says "In your Space, open…" without leading with `On **…**`. Step 2 says "On the Capsule, click…" without the screen name in bold (`**Capsule**` or the tab context).
- **Rule:** `how_to_format.md`, Steps — start the description with the screen name in bold.
- **Change:** Rewrite step 1 to open on the Space or capsule list (e.g. "On your **Space**, open the PostgreSQL Capsule."). Rewrite step 2 to "On the PostgreSQL Capsule, open **Backups**" or "On **Backups**, open the tab" per the wizard/tab pattern used in sibling guides.
- **Done when:** Each step body follows the `On **Screen**, …` pattern.

## Proposed outline

```md
---
slug: "/products/database-capsule/postgresql/backups"
title: "How to Back Up a PostgreSQL Database"
description: >-
  Create a manual backup for your PostgreSQL Capsule on Code Capsules. When you finish, a completed backup is listed on **Backups** and is available to restore.
sidebar_label: Backups
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Back Up Your PostgreSQL Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ PostgreSQL Capsule (deploy link when it exists).>

## Back up your PostgreSQL database

1. **Open the Capsule** — On your **Space**, open the PostgreSQL Capsule.

2. **Open Backups** — On the PostgreSQL Capsule, open **Backups**.

3. **Create a backup** — On **Backups**, click **Create backup**. Wait until status shows **Completed**.

4. **Confirm the backup** — On **Backups**, confirm the new backup appears in the list with a timestamp and is available to restore.

## Troubleshooting

<details>
<summary>Backup stays in progress</summary>

Large databases take longer. If it fails, open **Logs** and retry when the capsule is healthy.

</details>
```