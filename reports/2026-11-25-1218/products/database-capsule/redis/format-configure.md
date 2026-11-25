# Format report — configure (Redis)

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/database-capsule/redis/configure.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Configure a Redis Database
- **Goal:** Expect to see updated database settings saved
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Update connection details and database settings for a Redis Capsule on the Details and Config tabs. When you finish, your saved settings are visible on the capsule. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`) |
| 3 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`) |
| 4 | prerequisite (missing on page) | (steps assume) | An existing Redis Capsule in the Space |
| 5 | goal | `## Configure your Redis database` | **Open Details** — In your Space, open the Redis Capsule and click the **Details** tab. |
| 6 | goal | `## Configure your Redis database` | **View connection details** — In **Connection Details**, click **Show**. Host, port, database name, username, password, and connection string appear. |
| 7 | remove | `## Configure your Redis database` | **Rename the capsule** — In **Capsule Details**, click **Edit** next to the capsule name, enter the new name, and click **Save**. |
| 8 | goal | `## Configure your Redis database` | **Open Config** — Click the **Config** tab. |
| 9 | goal (vague value) | `## Configure your Redis database` | **Edit the database settings** — On **Config**, click **Edit**, change the settings you need, and click **Save**. |
| 10 | goal | `## Configure your Redis database` | **Confirm the saved settings** — Return to **Config**. The updated database settings you saved are shown. |
| 11 | — | `## Troubleshooting` | Changes did not save — refresh, confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | **Rename the capsule** is not needed to reach the documented goal; step 5 does not name the database setting(s) the reader must change. |
| Check 2: Prerequisites | fail | Steps require an existing Redis Capsule, but `## Prerequisites` has no card for it (compare `docs/products/database-capsule/documentdb/configure.md`). |
| Check 3: Links | pass | Prerequisite `href` values resolve to `docs/shared/create-an-account.md` and `docs/shared/create-a-space.md`. |
| Check 4: Format and style | fail | `how_to_format.md`, Steps — database settings are not stated exactly; a non-goal rename step remains in the numbered list. |

## Tickets

### configure-1

- **Type:** Move to prerequisites
- **Title:** Add a Redis Capsule prerequisite card.
- **Problem:** Step 1 opens “the Redis Capsule” in a Space, but `## Prerequisites` lists only account and Space.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add a third `DocCardList` item (🛠️ Redis Capsule) linking to the Redis deploy how-to under `docs/`, matching DocumentDB configure. Create `docs/products/database-capsule/redis/deploy.md` if it does not exist yet.
- **Done when:** Every prerequisite implied by the steps appears as a linked card, and the deploy target exists under `docs/`.

### configure-2

- **Type:** Remove content
- **Title:** Remove the rename step from the numbered list.
- **Problem:** Step 3 **Rename the capsule** changes the display name only; it is not required for “updated database settings saved.”
- **Rule:** `FORMAT.MD`, Check 1 — content labelled `remove`; `how_to_format.md`, Steps — only actions needed to reach the goal.
- **Change:** Delete step 3 and renumber the list.
- **Done when:** The steps section contains no rename instruction.

### configure-3

- **Type:** Format fix
- **Title:** Name the exact database setting(s) in **Edit the database settings**.
- **Problem:** Step 5 says “change the settings you need” without naming the field or value the walkthrough uses on **Config**.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1.
- **Change:** Replace vague wording with the exact **Config** control label(s) and example value(s) used in the documented walkthrough for Redis (aligned with test-platform).
- **Done when:** Step 5 names the setting field(s) explicitly; a reviewer can follow the list without choosing unspecified options.

## Proposed outline

```md
---
slug: "/products/database-capsule/redis/configure"
title: "How to Configure a Redis Database"
description: >-
  Update connection details and database settings for a Redis Capsule on the
  Details and Config tabs. When you finish, your saved settings are visible on
  the capsule.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Redis Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ Redis Capsule (deploy)>

## Configure your Redis database

1. **Open Details**
   In your Space, open the Redis Capsule. Click the **Details** tab.

2. **View connection details**
   In **Connection Details**, click **Show**. Host, port, database name, username, password, and connection string appear.

3. **Open Config**
   Click the **Config** tab.

4. **Edit the database settings**
   On **Config**, click **Edit**. Change `<exact setting label>` to `<exact value>`. Click **Save**.

5. **Confirm the saved settings**
   Return to **Config**. The updated database settings you saved are shown.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>
```