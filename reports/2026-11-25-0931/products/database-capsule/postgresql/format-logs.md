# Format report: View PostgreSQL logs

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/products/database-capsule/postgresql/logs.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** View logs for a PostgreSQL Database Capsule
- **Goal:** Expect to see **Capsule logs**, **Build logs**, and **Access logs** on the **Logs** tab
- **Format check:** fail

## Content list (Check 1)

1. `goal` — (under `# View Your PostgreSQL Logs`) — View **Capsule logs**, **Build logs**, and **Access logs** for the PostgreSQL Capsule (matches `description`).
2. `prerequisite` — `## Prerequisites` — Code Capsules account (card → `/docs/shared/create-an-account`).
3. `prerequisite` — `## Prerequisites` — A Space (card → `/docs/shared/create-a-space`).
4. `prerequisite` (missing) — — Reader must have a PostgreSQL Capsule before opening **Logs**; not listed in `## Prerequisites`.
5. `goal` — `## View your PostgreSQL logs` — **Open the Capsule** — In your Space, select the PostgreSQL Capsule.
6. `goal` — `## View your PostgreSQL logs` — **Open Logs** — On the Capsule, click the **Logs** tab.
7. `goal` — `## View your PostgreSQL logs` — **Choose a log stream** — On **Logs**, open a stream; latest entries appear for the selected stream.
8. `goal` — `## Troubleshooting` — Build logs empty — trigger build or push, refresh **Build logs**.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Steps reach the goal, but a deployed PostgreSQL Capsule is a `prerequisite` and is not in `## Prerequisites`. |
| Check 2: Prerequisites | fail | Account and Space are linked cards; PostgreSQL Capsule prerequisite is missing. |
| Check 3: Links | pass | Prerequisite `href` values resolve to `docs/shared/create-an-account.md` and `docs/shared/create-a-space.md`. |
| Check 4: Format and style | fail | `how_to_format.md`, Steps: step bodies must start with the screen name in bold (`On **…**`); steps 1–2 do not. |

## Tickets

### logs-1

- **Type:** Format fix
- **Title:** Add a PostgreSQL Capsule prerequisite card.
- **Problem:** `## Prerequisites` lists only account and Space. Readers need an existing PostgreSQL Capsule to view **Logs**; peer guides (for example `docs/products/database-capsule/mongodb/monitor.md`) include a capsule deploy card.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add a third card: `{type: 'link', href: '/docs/products/database-capsule/postgresql/deploy', label: '🛠️ PostgreSQL Capsule', description: 'Create the Capsule first.'}` (or the correct in-repo deploy path when the guide exists).
- **Done when:** Every prerequisite from Check 1 appears as one linked card in `## Prerequisites`.

### logs-2

- **Type:** Broken link
- **Title:** Restore or link a PostgreSQL deploy guide for the prerequisite card.
- **Problem:** There is no `docs/products/database-capsule/postgresql/deploy.md` in the repo, so the capsule prerequisite cannot link to a valid doc yet.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/products/database-capsule/postgresql/deploy.md` that passes its own format check, or point the prerequisite card at the correct existing deploy page until one is added.
- **Done when:** The PostgreSQL Capsule card `href` resolves to a file under `docs/`.

### logs-3

- **Type:** Format fix
- **Title:** Open step descriptions on the screen name in bold.
- **Problem:** Step 1 says "In your Space, select…" without **`Space`** in the opening `On **…**` pattern. Step 2 says "On the Capsule, click the **Logs** tab" instead of starting on **Logs** (or the Space/capsule list) per the template.
- **Rule:** `how_to_format.md`, Steps — start the description with the screen name in bold.
- **Change:** Rewrite step 1 to open on the Space (for example "On your **Space**, select the PostgreSQL Capsule."). Rewrite step 2 to "On **Logs**, open the tab." or equivalent `On **…**` wording.
- **Done when:** Each step body follows the `On **Screen**, …` pattern.

## Proposed outline

```md
---
slug: "/products/database-capsule/postgresql/logs"
title: "How to View Logs for a PostgreSQL Database"
description: >-
  View Capsule logs, Build logs, and Access logs for your PostgreSQL Capsule on Code Capsules.
sidebar_label: Logs
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# View Your PostgreSQL Logs

<Same one or two sentences as description, with UI labels in bold.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ PostgreSQL Capsule (deploy link).>

## View your PostgreSQL logs

1. **Open the Capsule** — On your **Space**, select the PostgreSQL Capsule.
2. **Open Logs** — On **Logs**, open the tab.
3. **Choose a log stream** — On **Logs**, open **Capsule logs**, **Build logs**, or **Access logs**. Latest entries appear for the stream you selected.

## Troubleshooting

<details> — Build logs are empty; trigger build from **Deploy** or push, refresh **Build logs**.
```