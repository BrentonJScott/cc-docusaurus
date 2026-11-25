# Format report: Monitor a MongoDB Database

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/products/database-capsule/mongodb/monitor.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Monitor a MongoDB Database
- **Goal:** Expect to see usage metrics for the database capsule
- **Format check:** fail

## Content list (Check 1)

1. `goal` — (under `# Monitor Your MongoDB Database`) — Intro repeats `description`: usage metrics on **Metrics** (CPU, memory, request charts).
2. `prerequisite` — `## Prerequisites` — Code Capsules account (card → `/docs/shared/create-an-account`).
3. `prerequisite` — `## Prerequisites` — A Space (card → `/docs/shared/create-a-space`).
4. `prerequisite` (missing) — — Reader must have a MongoDB Capsule deployed before opening **Metrics**; not listed in `## Prerequisites`.
5. `goal` — `## Monitor your MongoDB database` — **Open the Capsule** — On your Space, select the MongoDB Capsule.
6. `goal` — `## Monitor your MongoDB database` — **Open Metrics** — Click the **Metrics** tab; charts load.
7. `goal` — `## Monitor your MongoDB database` — **Confirm usage metrics** — Change time range if offered; CPU, memory, and request charts visible for the period.
8. `remove` — `## Troubleshooting` — Collapsed note when metrics show no data (acceptable troubleshooting).

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Steps reach the documented goal, but a deployed MongoDB Capsule is a `prerequisite` and is not listed in `## Prerequisites`. |
| Check 2: Prerequisites | fail | Account and Space are linked cards; MongoDB Capsule prerequisite is missing from `DocCardList`. |
| Check 3: Links | pass | Prerequisite `href` values resolve to `docs/shared/create-an-account.md` and `docs/shared/create-a-space.md`. |
| Check 4: Format and style | fail | `how_to_format.md`, Steps: step bodies must start with the screen name in bold (`On **…**`); steps 1–2 do not. |

## Tickets

### monitor-1

- **Type:** Format fix
- **Title:** Add a MongoDB Capsule prerequisite card.
- **Problem:** `## Prerequisites` lists only account and Space. Readers need an existing MongoDB Capsule to view **Metrics**; comparable guides such as `docs/products/docker-capsule/scale.md` include a capsule deploy card.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add a third card: `{type: 'link', href: '/docs/products/database-capsule/mongodb/deploy', label: '🛠️ MongoDB Capsule', description: 'Create the Capsule first.'}` (or the correct in-repo deploy path when the guide exists).
- **Done when:** Every prerequisite from Check 1 appears as one linked card in `## Prerequisites`.

### monitor-2

- **Type:** Broken link
- **Title:** Restore or link a MongoDB deploy guide for the prerequisite card.
- **Problem:** There is no `docs/products/database-capsule/mongodb/deploy.md` (or equivalent) in the repo, so the capsule prerequisite cannot link to a valid doc yet.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/products/database-capsule/mongodb/deploy.md` that passes its own format check, or point the prerequisite card at the correct existing deploy page until one is added.
- **Done when:** The MongoDB Capsule card `href` resolves to a file under `docs/`.

### monitor-3

- **Type:** Format fix
- **Title:** Open step descriptions on the screen name in bold.
- **Problem:** Step 1 says "On your Space, select…" without **`Space`**. Step 2 says "Click the **Metrics** tab" instead of starting with "On **Metrics**, …".
- **Rule:** `how_to_format.md`, Steps — start the description with the screen name in bold.
- **Change:** Rewrite step 1 to open on the Space or capsule list (e.g. "On your **Space**, select the MongoDB Capsule."). Rewrite step 2 to "On **Metrics**, open the tab. CPU, memory, and request charts load for the capsule."
- **Done when:** Each step body follows the `On **Screen**, …` pattern.

## Proposed outline

```md
---
slug: "/products/database-capsule/mongodb/monitor"
title: "How to Monitor a MongoDB Database"
description: >-
  View usage metrics for your MongoDB Capsule on Code Capsules. When you finish,
  CPU, memory, and request charts on **Metrics** show usage for your database capsule.
sidebar_label: Monitor
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Monitor Your MongoDB Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ MongoDB Capsule (deploy link).>

## Monitor your MongoDB database

1. **Open the Capsule** — On your **Space**, select the MongoDB Capsule.
2. **Open Metrics** — On **Metrics**, open the tab. CPU, memory, and request charts load.
3. **Confirm usage metrics** — Change the time range if offered. Usage metric charts are visible for the selected period.

## Troubleshooting

<details> — Metrics show no data; wait for traffic/runtime; confirm capsule is on.
```