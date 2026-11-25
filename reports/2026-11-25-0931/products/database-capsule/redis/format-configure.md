# Format report — configure

- **Run:** 2026-11-25-0931
- **Doc:** `docs/products/database-capsule/redis/configure.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Configure a Redis Database
- **Goal:** Expect to see updated database settings saved
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | (intro) | (under `#` title) | Update connection details and database settings for a Redis Capsule on the Details and Config tabs. When you finish, your saved settings are visible on the capsule. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`). |
| 3 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`). |
| 4 | prerequisite (missing card) | `## Configure your Redis database` | **Open Details** — In your Space, open the Redis Capsule and click the **Details** tab. |
| 5 | remove | `## Configure your Redis database` | **View connection details** — In **Connection Details**, click **Show** to reveal host, port, database name, username, password, and connection string. |
| 6 | remove | `## Configure your Redis database` | **Rename the capsule** — Click **Edit** next to the capsule name in **Capsule Details**, enter the new name, and click **Save**. |
| 7 | goal | `## Configure your Redis database` | **Open Config** — Click the **Config** tab. |
| 8 | goal (vague values) | `## Configure your Redis database` | **Edit database settings** — On **Config**, click **Edit**, change the settings you need, and click **Save**. |
| 9 | goal (weak end state) | `## Configure your Redis database` | **Confirm the saved settings** — Return to **Config**. The updated database settings you saved are shown. |
| 10 | — | `## Troubleshooting` | Changes did not save — refresh, confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Steps 2–3 are not needed to reach the documented goal (updated database settings saved on **Config**). Step 1 assumes a Redis Capsule without listing deploy as a prerequisite. Step 5 does not name the database setting field(s) the reader changes. Step 6 does not name what the reader sees on **Config** after save. |
| Check 2: Prerequisites | fail | Redis Capsule (deploy) is required before step 1 but missing from `## Prerequisites`. Account and Space cards link to existing shared pages. |
| Check 3: Links | pass | Prerequisite `href` values resolve to `docs/shared/create-an-account.md` and `docs/shared/create-a-space.md`. |
| Check 4: Format and style | fail | Step 5 uses vague “settings you need”; `description` emphasizes connection details while `DOCUMENTED_FEATURES.MD` goal is saved database settings; `## Prerequisites` omits the deploy card pattern used on sibling database configure guides. |

## Tickets

### configure-1

- **Type:** Move to prerequisites
- **Title:** Add a Redis Capsule prerequisite card.
- **Problem:** Step **Open Details** says “open the Redis Capsule” but `## Prerequisites` lists only account and Space.
- **Rule:** `FORMAT.MD`, Check 2 (Prerequisites); `how_to_format.md`, Prerequisites — every non-goal requirement is one linked card.
- **Change:** Add a `DocCardList` item such as `{type: 'link', href: '/docs/products/database-capsule/redis/deploy', label: '🛠️ Redis Capsule', description: 'Create the Capsule first.'}` after `docs/products/database-capsule/redis/deploy.md` exists under `docs/`.
- **Done when:** A reader with only the listed prerequisites can start step 1 without undeclared setup, and the deploy `href` resolves under `docs/`.

### configure-2

- **Type:** Remove content
- **Title:** Drop Details-only steps not required for the saved-settings goal.
- **Problem:** Under `## Configure your Redis database`, steps **View connection details** and **Rename the capsule** are not needed for `DOCUMENTED_FEATURES.MD` goal “Expect to see updated database settings saved.”
- **Rule:** `FORMAT.MD`, Check 1 (How-to guide: goal steps) — `remove` instructions must not sit in the steps section; `how_to_format.md`, Steps — only actions needed to reach the goal.
- **Change:** Remove steps 2–3 from the numbered list, or move that content to separate guides and narrow this page to **Config** database settings only.
- **Done when:** Every numbered step is required for a reader with prerequisites to save and confirm database settings on **Config**.

### configure-3

- **Type:** Missing goal step
- **Title:** End with the reader seeing named saved values on **Config**.
- **Problem:** Step **Confirm the saved settings** says “The updated database settings you saved are shown” without naming the field(s) or values the reader verifies on **Config**.
- **Rule:** `FORMAT.MD`, Check 1; `how_to_format.md`, Steps — the last step must end with the reader seeing the goal.
- **Change:** Rewrite the final step so the reader returns to **Config**, names the setting(s) they changed, and sees those values persisted (for example, “On **Config**, **&lt;field&gt;** shows the value you saved.”).
- **Done when:** The last numbered step alone confirms a visible saved state on **Config** that matches the feature goal.

### configure-4

- **Type:** Format fix
- **Title:** Name database settings on **Config**.
- **Problem:** Step **Edit database settings** says “change the settings you need” without naming Redis **Config** field labels.
- **Rule:** `FORMAT.MD`, Check 1 — values the goal depends on must not be missing or unclear; `how_to_format.md`, Steps — state every value exactly.
- **Change:** On **Config**, click **Edit**, set the exact database setting label(s) for Redis capsules, click **Save**, using UI labels from the test platform.
- **Done when:** Step 5 names at least one **Config** field by its UI label.

### configure-5

- **Type:** Format fix
- **Title:** Align `description` and intro with the documented goal.
- **Problem:** `description` promises updating connection details and database settings; `DOCUMENTED_FEATURES.MD` goal is updated database settings saved. The intro repeats the broader wording.
- **Rule:** `writing_style.md`, Every doc — description matches the feature goal; `how_to_format.md`, Title and description.
- **Change:** If this guide’s scope is saved database settings on **Config**, shorten `description` and the intro to that outcome (still one or two sentences). If connection details stay, split content or align the documented feature goal with product owners.
- **Done when:** Frontmatter `description`, intro text, and `DOCUMENTED_FEATURES.MD` goal describe the same end state.

### configure-6

- **Type:** Broken link
- **Title:** Add `deploy.md` under `docs/` for the prerequisite card.
- **Problem:** A Redis Capsule prerequisite must link to `docs/products/database-capsule/redis/deploy.md`, which is not present under `docs/` (only under `docs.bak/`).
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add or migrate `docs/products/database-capsule/redis/deploy.md` so configure-1’s card resolves, or point the card at the correct deploy guide path once it exists.
- **Done when:** The Redis Capsule prerequisite `href` resolves to a file under `docs/`.

## Proposed outline

```md
---
slug: "/products/database-capsule/redis/configure"
title: "How to Configure a Redis Database"
description: >-
  Update database settings for a Redis Capsule on the **Config** tab. When you
  finish, your updated database settings are visible on the capsule.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Redis Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ Redis Capsule (deploy)>

## Configure your Redis database

1. **Open the capsule**
   In your Space, open your Redis Capsule.

2. **Open Config**
   Click the **Config** tab.

3. **Edit database settings**
   On **Config**, click **Edit**. Set **<named setting(s)>** to the values you need. Click **Save**.

4. **Confirm the saved settings**
   Return to **Config**. **<named setting(s)>** show the values you saved.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
```