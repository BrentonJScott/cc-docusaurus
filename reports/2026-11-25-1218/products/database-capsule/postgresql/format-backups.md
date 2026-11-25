# Format report — backups (PostgreSQL)

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/database-capsule/postgresql/backups.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Back Up a PostgreSQL Database
- **Goal:** Expect to see a backup created and available to restore
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Create a manual backup for your PostgreSQL Capsule on Code Capsules. When you finish, a completed backup is listed on **Backups** and is available to restore. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite (missing) | — | A deployed PostgreSQL Capsule (assumed in step 1; not listed in Prerequisites) |
| 5 | goal | `## Back up your PostgreSQL database` | **Open the Capsule** — In your Space, open the PostgreSQL Capsule. |
| 6 | goal | `## Back up your PostgreSQL database` | **Open Backups** — On the Capsule, click the **Backups** tab. |
| 7 | goal | `## Back up your PostgreSQL database` | **Create a backup** — On **Backups**, click **Create backup**; wait until status shows **Completed**. |
| 8 | goal | `## Back up your PostgreSQL database` | **Confirm the backup** — On **Backups**, the new backup appears in the list with a timestamp and is available to restore. |
| 9 | — | `## Troubleshooting` | Backup stays in progress — open **Logs** and retry when the capsule is healthy. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | pass | Steps reach the documented goal: the last step states a completed backup is listed and available to restore. |
| Check 2: Prerequisites | fail | A deployed PostgreSQL Capsule is required but is not a prerequisite card in `## Prerequisites`. |
| Check 3: Links | pass | `/docs/shared/create-an-account` and `/docs/shared/create-a-space` resolve under `docs/`. |
| Check 4: Format and style | fail | Steps 1 and 2 do not open with the screen name in bold per `how_to_format.md`, Steps. |

## Tickets

### backups-1

- **Type:** Move to prerequisites
- **Title:** Add a PostgreSQL Capsule prerequisite card.
- **Problem:** Step 1 assumes the reader already has a PostgreSQL Capsule in the Space; only account and Space appear under `## Prerequisites`.
- **Rule:** `how_to_format.md`, Prerequisites — list everything the reader must have before the goal; `FORMAT.MD`, Check 2.
- **Change:** Add a `DocCardList` item with label `🛠️ PostgreSQL Capsule`, description `Create the Capsule first.`, and `href` to the in-repo PostgreSQL deploy how-to when it exists.
- **Done when:** `## Prerequisites` includes the capsule card and the steps start from opening that Capsule.

### backups-2

- **Type:** Broken link (blocked by backups-1)
- **Title:** Link the capsule prerequisite to an existing deploy guide.
- **Problem:** There is no `docs/products/database-capsule/postgresql/deploy.md` (or equivalent) for the prerequisite `href`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add the PostgreSQL deploy how-to under `docs/products/database-capsule/postgresql/` or point the card at the correct slug once that page is restored.
- **Done when:** The prerequisite card `href` resolves to a file under `docs/`.

### backups-3

- **Type:** Format fix
- **Title:** Open steps 1 and 2 on the screen name in bold.
- **Problem:** Step 1 begins with “In your Space,” without **Space** in bold or an “On **…**,” opener. Step 2 uses “On the Capsule,” with **Capsule** not bold.
- **Rule:** `how_to_format.md`, Steps — start the description with the screen's name in bold, such as “On **Plan**, …”.
- **Change:** Rewrite step 1 to open on the Space dashboard (for example “On your Space dashboard, open the PostgreSQL Capsule.”). Rewrite step 2 to open on the Capsule page with the UI label in bold (for example “On the Capsule page, click the **Backups** tab.”).
- **Done when:** Both step descriptions follow the template’s “On **Screen**, …” pattern.

## Proposed outline

```md
---
slug: "/products/database-capsule/postgresql/backups"
title: "How to Back Up a PostgreSQL Database"
description: >-
  Create a manual backup for your PostgreSQL Capsule on Code Capsules. When you
  finish, a completed backup is listed on **Backups** and is available to restore.
sidebar_label: Backups
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Back Up Your PostgreSQL Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤, 📦, 🛠️ PostgreSQL Capsule (deploy link when it exists)>

## Back up your PostgreSQL database

1. **Open the Capsule**
   On your Space dashboard, open the PostgreSQL Capsule.

2. **Open Backups**
   On the Capsule page, click the **Backups** tab.

3. **Create a backup**
   On **Backups**, click **Create backup**. Wait until the backup status shows **Completed**.

4. **Confirm the backup**
   On **Backups**, the new backup appears in the list with a timestamp and is available to restore.

## Troubleshooting

<details>
<summary>Backup stays in progress</summary>

Large databases take longer. If it fails, open **Logs** and retry when the capsule is healthy.

</details>
```