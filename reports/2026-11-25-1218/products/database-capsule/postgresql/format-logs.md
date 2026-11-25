# Format report — logs (PostgreSQL)

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/database-capsule/postgresql/logs.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** View logs for a PostgreSQL Database Capsule
- **Goal:** Expect to see the database logs
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | View **Capsule logs**, **Build logs**, and **Access logs** for your PostgreSQL Capsule on Code Capsules. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite (missing) | — | A deployed PostgreSQL Capsule (assumed in step 1; not listed in Prerequisites) |
| 5 | goal | `## View your PostgreSQL logs` | **Open the Capsule** — In your Space, select the PostgreSQL Capsule. |
| 6 | goal | `## View your PostgreSQL logs` | **Open Logs** — On the Capsule, click the **Logs** tab. |
| 7 | goal | `## View your PostgreSQL logs` | **Choose a log stream** — On **Logs**, open **Capsule logs**, **Build logs**, or **Access logs**; latest entries appear for the selected stream. |
| 8 | — | `## Troubleshooting` | Build logs are empty — trigger a new build or push, then refresh **Build logs**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | pass | Steps reach the documented goal: the last step states that latest log entries are visible for the stream the reader opened. |
| Check 2: Prerequisites | fail | A deployed PostgreSQL Capsule is required but is not a prerequisite card in `## Prerequisites`. |
| Check 3: Links | pass | `/docs/shared/create-an-account` and `/docs/shared/create-a-space` resolve under `docs/`. |
| Check 4: Format and style | fail | Steps 1 and 2 do not open with the screen name in bold per `how_to_format.md`, Steps. |

## Tickets

### logs-1

- **Type:** Move to prerequisites
- **Title:** Add a PostgreSQL Capsule prerequisite card.
- **Problem:** Step 1 assumes the reader already has a PostgreSQL Capsule in the Space; only account and Space appear under `## Prerequisites`.
- **Rule:** `how_to_format.md`, Prerequisites — list everything the reader must have before the goal; `FORMAT.MD`, Check 2.
- **Change:** Add a `DocCardList` item with label `🛠️ PostgreSQL Capsule`, description `Create the Capsule first.`, and `href` to the in-repo PostgreSQL deploy how-to when it exists.
- **Done when:** `## Prerequisites` includes the capsule card and the steps start from opening that Capsule.

### logs-2

- **Type:** Broken link (blocked by logs-1)
- **Title:** Link the capsule prerequisite to an existing deploy guide.
- **Problem:** There is no `docs/products/database-capsule/postgresql/deploy.md` (or equivalent) for the prerequisite `href`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add the PostgreSQL deploy how-to under `docs/products/database-capsule/postgresql/` or point the card at the correct slug once that page is restored.
- **Done when:** The prerequisite card `href` resolves to a file under `docs/`.

### logs-3

- **Type:** Format fix
- **Title:** Open steps 1 and 2 on the screen name in bold.
- **Problem:** Step 1 begins with “In your Space,” without **Space** in bold or an “On **…**,” opener. Step 2 uses “On the Capsule,” with **Capsule** not bold.
- **Rule:** `how_to_format.md`, Steps — start the description with the screen's name in bold, such as “On **Plan**, …”.
- **Change:** Rewrite step 1 to open on the Space dashboard (for example “On your Space dashboard, select the PostgreSQL Capsule.”). Rewrite step 2 to open on **Capsule** or the Capsule page with the UI label in bold (for example “On the Capsule page, click the **Logs** tab.”).
- **Done when:** Both step descriptions follow the template’s “On **Screen**, …” pattern.

## Proposed outline

```md
---
slug: "/products/database-capsule/postgresql/logs"
title: "How to View Logs for a PostgreSQL Database"
description: >-
  View **Capsule logs**, **Build logs**, and **Access logs** for your
  PostgreSQL Capsule on Code Capsules.
sidebar_label: Logs
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# View Your PostgreSQL Logs

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤, 📦, 🛠️ PostgreSQL Capsule (deploy link when it exists)>

## View your PostgreSQL logs

1. **Open the Capsule**
   On your Space dashboard, select the PostgreSQL Capsule.

2. **Open Logs**
   On the Capsule page, click the **Logs** tab.

3. **Choose a log stream**
   On **Logs**, open **Capsule logs**, **Build logs**, or **Access logs**.
   The latest entries for that stream are visible in the list.

## Troubleshooting

<details>
<summary>Build logs are empty</summary>

Trigger a new build from **Deploy** or push to the connected branch, then refresh **Build logs**.

</details>
```