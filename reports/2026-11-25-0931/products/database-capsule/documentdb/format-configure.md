# Format report — configure

- **Run:** 2026-11-25-0931
- **Doc:** `docs/products/database-capsule/documentdb/configure.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Configure a DocumentDB Database
- **Goal:** Expect to see updated database settings saved
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | (intro) | (under `#` title) | Update connection details and database settings for a DocumentDB Capsule on the Details and Config tabs. When you finish, your updated settings are saved. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`). |
| 3 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`). |
| 4 | prerequisite | `## Prerequisites` | DocumentDB Capsule (card → `/docs/products/database-capsule/documentdb/deploy`). |
| 5 | goal | `## Configure your documentdb database` | **Open Details** — Open the DocumentDB Capsule and select the **Details** tab. |
| 6 | remove | `## Configure your documentdb database` | **View connection details** — Click **show** in **Connection Details** to reveal host, port, database name, username, password, and connection string. |
| 7 | remove | `## Configure your documentdb database` | **Rename the capsule** — Click **Edit** next to the capsule name in **Capsule Details**, then click **Save**. |
| 8 | goal | `## Configure your documentdb database` | **Open Config** — Select the **Config** tab. |
| 9 | goal (vague values) | `## Configure your documentdb database` | **Edit database settings** — Click **Edit**, change the database settings you need, and click **Save**. |
| 10 | goal (weak end state) | `## Configure your documentdb database` | **Confirm the saved settings** — Reload the page and return to **Config**. The updated database settings are saved. |
| 11 | — | `## Troubleshooting` | Changes did not save — refresh, confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Steps 2–3 are not needed to reach the documented goal (updated database settings saved on **Config**). Step 5 does not name the database setting field(s) the reader changes. The last step states settings “are saved” but does not describe what the reader **sees** on **Config** after reload, per `DOCUMENTED_FEATURES.MD`. |
| Check 2: Prerequisites | pass | Account, Space, and DocumentDB Capsule are card-linked; shared pages exist under `docs/shared/`. |
| Check 3: Links | pass | Prerequisite `href` values resolve to `docs/shared/create-an-account.md`, `docs/shared/create-a-space.md`, and `docs/products/database-capsule/documentdb/deploy.md`. |
| Check 4: Format and style | fail | Steps heading uses lowercase `documentdb`; step 2 uses **show** instead of the on-screen **Show** label; step 5 omits “On **Config**, …” and vague “settings you need”; `description` emphasizes connection details while the documented goal is saved database settings only. |

## Tickets

### configure-1

- **Type:** Remove content
- **Title:** Drop Details-only steps not required for the saved-settings goal.
- **Problem:** Under `## Configure your documentdb database`, steps **View connection details** and **Rename the capsule** are not needed for `DOCUMENTED_FEATURES.MD` goal “Expect to see updated database settings saved.”
- **Rule:** `FORMAT.MD`, Check 1 (How-to guide: goal steps) — `remove` instructions must not sit in the steps section; `how_to_format.md`, Steps — only actions needed to reach the goal.
- **Change:** Remove steps 2–3 from the numbered list, or move connection-details and rename content to a separate guide and narrow this page’s `description` and steps to **Config** database settings only. Open the capsule (step 1) can lead directly to **Config** if **Details** is not required.
- **Done when:** Every numbered step is required for a reader with prerequisites to save and confirm database settings on **Config**.

### configure-2

- **Type:** Missing goal step
- **Title:** End with the reader seeing saved database settings on **Config**.
- **Problem:** Step **Confirm the saved settings** says “The updated database settings are saved” without describing visible values on **Config** after reload, unlike the documented “Expect to **see** updated database settings saved.”
- **Rule:** `FORMAT.MD`, Check 1; `how_to_format.md`, Steps — the last step must end with the reader seeing the goal.
- **Change:** Rewrite the final step so the reader reloads or returns to **Config**, names the field(s) they changed, and sees those values persisted (for example, “On **Config**, the **&lt;field&gt;** value matches what you saved.”).
- **Done when:** The last numbered step alone confirms a visible saved state on **Config** that matches the feature goal.

### configure-3

- **Type:** Format fix
- **Title:** Name database settings and open step 5 on **Config**.
- **Problem:** Step **Edit database settings** says “change the database settings you need” without naming the setting(s) on **Config**, and the body does not start with “On **Config**, …”.
- **Rule:** `FORMAT.MD`, Check 1 — values the goal depends on must not be missing or unclear; `how_to_format.md`, Steps — one screen per step, screen name in bold; state every value exactly.
- **Change:** On **Config**, click **Edit**, set the exact database setting label(s) for DocumentDB capsules (for example memory, storage, or product-specific options), click **Save**, and keep labels aligned with the test platform UI.
- **Done when:** Step 5 names at least one **Config** field by its UI label and opens with the **Config** screen name.

### configure-4

- **Type:** Format fix
- **Title:** Fix steps heading casing and **Show** label.
- **Problem:** The steps heading is `## Configure your documentdb database` (lowercase product name). Step 2 uses **show** in **Connection Details** if that step remains.
- **Rule:** `how_to_format.md`, Steps heading `## <Verb> your <Thing>`; `writing_style.md`, Words — UI labels in bold exactly as on screen.
- **Change:** Rename the section to `## Configure your DocumentDB database`. If connection-details content stays, use **Show** as on the dashboard.
- **Done when:** The steps heading matches product naming; UI control labels match the live UI.

### configure-5

- **Type:** Format fix
- **Title:** Align `description` and intro with the documented goal.
- **Problem:** `description` promises updating connection details and database settings; `DOCUMENTED_FEATURES.MD` goal is only updated **database** settings saved. The intro repeats the broader wording.
- **Rule:** `writing_style.md`, Every doc — description matches the feature goal; `how_to_format.md`, Title and description.
- **Change:** If this guide’s scope is saved database settings on **Config**, shorten `description` and the intro to that outcome (still one or two sentences). If connection details stay, split or adjust the documented feature goal with product owners so goal and copy agree.
- **Done when:** Frontmatter `description`, intro text, and `DOCUMENTED_FEATURES.MD` goal describe the same end state.

## Proposed outline

```md
---
slug: "/products/database-capsule/documentdb/configure"
title: "How to Configure a DocumentDB Database"
description: >-
  Update database settings for a DocumentDB Capsule on the **Config** tab. When
  you finish, your updated database settings are visible on the capsule.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your DocumentDB Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ DocumentDB Capsule (deploy)>

## Configure your DocumentDB database

1. **Open the capsule**
   Open your DocumentDB Capsule in your Space.

2. **Open Config**
   Select the **Config** tab.

3. **Edit database settings**
   On **Config**, click **Edit**. Set **&lt;named setting(s)&gt;** to the values you need. Click **Save**.

4. **Confirm the saved settings**
   Reload the Capsule page and open **Config** again. The **&lt;named setting(s)&gt;** show the values you saved.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
```