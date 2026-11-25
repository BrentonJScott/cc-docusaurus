# Format report — monitor (MongoDB)

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/database-capsule/mongodb/monitor.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Monitor a MongoDB Database
- **Goal:** Expect to see usage metrics for the database capsule
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | View usage metrics for your MongoDB Capsule on Code Capsules. When you finish, CPU, memory, and request charts on **Metrics** show usage for your database capsule. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite (missing) | (not on page) | A deployed MongoDB Capsule (implied by step 1; no prerequisite card) |
| 5 | goal | `## Monitor your MongoDB database` | **Open the Capsule** — On your Space, select the MongoDB Capsule. |
| 6 | goal | `## Monitor your MongoDB database` | **Open Metrics** — Click the **Metrics** tab. CPU, memory, and request charts load for the capsule. |
| 7 | goal | `## Monitor your MongoDB database` | **Confirm usage metrics** — Change the time range if the UI offers one. The CPU, memory, and request usage charts on **Metrics** are visible for the selected period. |
| 8 | — | `## Troubleshooting` | Metrics show no data — wait for traffic/runtime; confirm capsule is on and serving requests. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | pass | Steps under `## Monitor your MongoDB database` reach the documented goal; intro matches `description`. |
| Check 2: Prerequisites | fail | A deployed MongoDB Capsule is required before step 1 but is not listed in `## Prerequisites`. |
| Check 3: Links | pass | Prerequisite `href` values resolve under `docs/shared/`. |
| Check 4: Format and style | fail | Step descriptions do not open with the screen name in bold per `how_to_format.md`, Steps. |

## Tickets

### monitor-1

- **Type:** Move to prerequisites
- **Title:** Add a MongoDB Capsule prerequisite card.
- **Problem:** Step 1 assumes the reader already has a MongoDB Capsule in the Space; only account and Space appear under `## Prerequisites`.
- **Rule:** `FORMAT.MD`, Check 2 — every `prerequisite` from Check 1 must appear in `## Prerequisites` with a link; `how_to_format.md`, Prerequisites — one card per thing the reader needs before the goal.
- **Change:** Add a `DocCardList` item (for example `🛠️ MongoDB Capsule`) linking to the in-repo MongoDB deploy how-to when `docs/products/database-capsule/mongodb/deploy.md` exists. Until that page exists, unblock via **Shared page** / deploy-doc work tracked elsewhere (see `monitor-5` from run `2026-11-25-0828`).
- **Done when:** `## Prerequisites` includes a linked card for the MongoDB Capsule and step 1 only selects an existing capsule.

### monitor-2

- **Type:** Format fix
- **Title:** Open each step description on the screen name in bold.
- **Problem:** Step 1 uses “On your Space” without **Space** in bold. Step 2 opens with “Click the **Metrics** tab” instead of a lead-in such as “On the Capsule, …” or “On **Metrics**, …”. Step 3 opens with “Change the time range” with no screen name.
- **Rule:** `how_to_format.md`, Steps — “Start the description with the screen's name in bold, such as ‘On **Plan**, …’.”
- **Change:** Rewrite step bodies to match the pattern used on `docs/products/database-capsule/postgresql/logs.md`: for example “On **Space**, select the MongoDB Capsule.”; “On the Capsule, click the **Metrics** tab. …”; “On **Metrics**, change the time range if offered. CPU, memory, and request usage charts are visible for the selected period.”
- **Done when:** Each numbered step’s description begins with the screen or tab name in bold before the action.

## Proposed outline

```md
---
slug: "/products/database-capsule/mongodb/monitor"
title: "How to Monitor a MongoDB Database"
description: >-
  View usage metrics for your MongoDB Capsule on Code Capsules. When you finish,
  CPU, memory, and request charts on **Metrics** show usage for your database
  capsule.
sidebar_label: Monitor
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Monitor Your MongoDB Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ MongoDB Capsule → deploy guide when it exists>

## Monitor your MongoDB database

1. **Open the Capsule**
   On **Space**, select the MongoDB Capsule.

2. **Open Metrics**
   On the Capsule, click the **Metrics** tab. CPU, memory, and request charts load.

3. **Confirm usage metrics**
   On **Metrics**, change the time range if offered. CPU, memory, and request usage charts are visible for the selected period.

## Troubleshooting

<details>
<summary>Metrics show no data</summary>

New capsules may need traffic or runtime before charts populate. Confirm the capsule is on and serving requests.

</details>
```