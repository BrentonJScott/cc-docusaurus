# Format report — monitor (MongoDB)

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/database-capsule/mongodb/monitor.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Monitor a MongoDB Database
- **Goal:** Expect to see usage metrics for the database capsule
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove / misaligned | (under `#` title) | View usage metrics for your MongoDB Capsule on the **Metrics** tab. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | MongoDB Capsule → `/products/database-capsule/mongodb/deploy` |
| 5 | goal | `## View metrics` | **Open the Capsule** — Open the Space and select the MongoDB Capsule. |
| 6 | goal | `## View metrics` | **Open Metrics** — Click the **Metrics** tab; CPU, memory, and request charts load. |
| 7 | goal | `## View metrics` | **Confirm usage data** — Change time range; values update for the selected period. |
| 8 | goal (weak end state) | `## Troubleshooting` | Metrics show no data — wait for traffic/runtime; confirm capsule is on. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Frontmatter `description` cites **Usage** tab, billing, and Dedicated cluster metrics; steps only cover the **Metrics** tab and do not match the documented feature goal. Intro under `#` does not repeat `description`. |
| Check 2: Prerequisites | fail | Account and Space cards link to `/docs/shared/*` pages that do not exist under `docs/`. See `shared-create-an-account` and `shared-create-a-space` in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`. |
| Check 3: Links | fail | `/docs/shared/create-an-account`, `/docs/shared/create-a-space`, and `/products/database-capsule/mongodb/deploy` have no matching files under `docs/`. |
| Check 4: Format and style | fail | H1 and `title` disagree; intro/description mismatch; steps section heading is not `## <Verb> your <Thing>`; step bodies do not open with the screen name in bold. |

## Tickets

### monitor-1

- **Type:** Format fix
- **Title:** Align description, intro, and feature goal on usage metrics in Metrics.
- **Problem:** `description` says “view usage and billing in the **Usage** tab, and cluster performance metrics on Dedicated clusters.” The intro says “**Metrics** tab.” The documented goal is usage metrics for the capsule (Metrics tab), not Usage/billing/Dedicated-only flows.
- **Rule:** `FORMAT.MD`, Check 1 — `description` and end state must match the feature goal; `writing_style.md`, Every doc — intro repeats `description`.
- **Change:** Rewrite `description` and the one or two sentences under the `#` title so they both state that when the reader finishes, they see usage metrics (CPU, memory, request charts) on the **Metrics** tab for their MongoDB Capsule. Drop **Usage** tab, billing, and Dedicated-only wording unless added as explicit steps.
- **Done when:** `description`, intro, and steps all describe the same Metrics-tab usage-metrics outcome.

### monitor-2

- **Type:** Format fix
- **Title:** Replace generic H1 with the task title.
- **Problem:** Frontmatter `title` is “How to Monitor a MongoDB Database” but the H1 is `# Monitor metrics`.
- **Rule:** `how_to_format.md`, Title and description — one `#` title naming what the reader is doing (compare product guides such as `# Scale Your Docker Container`).
- **Change:** Set H1 to `# Monitor Your MongoDB Database` (or equivalent) aligned with frontmatter `title`.
- **Done when:** H1 is a clear task title consistent with `title`.

### monitor-3

- **Type:** Format fix
- **Title:** Rename the steps section to verb + your + thing.
- **Problem:** Steps are under `## View metrics` instead of `## <Verb> your <Thing>`.
- **Rule:** `how_to_format.md`, Steps — heading must be `## <Verb> your <Thing>`.
- **Change:** Rename to `## Monitor your MongoDB database` or `## View your MongoDB metrics`.
- **Done when:** The `##` heading before the numbered list matches the template pattern.

### monitor-4

- **Type:** Format fix
- **Title:** Open each step on the screen name in bold; end with the goal check.
- **Problem:** Step 1 does not start with “On **…**,”. Step 3 ends with “values update” rather than stating that usage metrics charts are visible for the capsule (documented goal).
- **Rule:** `how_to_format.md`, Steps — screen name in bold; last step must end with the reader seeing the goal.
- **Change:** Rewrite steps so step 1 opens on the Space/dashboard, step 2 on **Metrics**, step 3 confirms CPU, memory, and request usage metrics are visible for the selected range.
- **Done when:** Each step follows the template pattern and the last step explicitly describes seeing usage metrics on **Metrics**.

### monitor-5

- **Type:** Broken link
- **Title:** Link MongoDB Capsule prerequisite to an existing deploy guide.
- **Problem:** Prerequisite card `href` is `/products/database-capsule/mongodb/deploy`; there is no `docs/products/database-capsule/mongodb/deploy.md` in the repo.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/products/database-capsule/mongodb/deploy.md` or point the card at the correct in-repo deploy doc if MongoDB deploy lives elsewhere until a deploy guide is restored.
- **Done when:** The prerequisite card `href` resolves to a file under `docs/`.

### monitor-6

- **Type:** Shared page (reference)
- **Title:** Use shared account and Space pages when available.
- **Problem:** Prerequisites depend on `/docs/shared/create-an-account` and `/docs/shared/create-a-space`, which are not in `docs/` yet.
- **Rule:** `FORMAT.MD`, Check 2 — reference existing shared-page tickets in this run.
- **Change:** No duplicate shared-page work on this doc; unblock Check 2 when `shared-create-an-account` and `shared-create-a-space` in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` are done.
- **Done when:** Both shared paths exist and this guide’s prerequisite cards resolve.

## Proposed outline

```md
---
slug: "/products/database-capsule/mongodb/monitor"
title: "How to Monitor a MongoDB Database"
description: >-
  View usage metrics for your MongoDB Capsule on Code Capsules.
  When you finish, CPU, memory, and request charts on **Metrics** show
  usage for your database capsule.
sidebar_label: Monitor
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Monitor Your MongoDB Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤, 📦, 🛠️ MongoDB Capsule (deploy link when it exists)>

## Monitor your MongoDB database

1. **Open the Capsule**
   On your **Space**, select the MongoDB Capsule.

2. **Open Metrics**
   On **Metrics**, open the tab. CPU, memory, and request charts load.

3. **Confirm usage metrics**
   Change the time range if offered. Usage metric charts update for the selected period.

## Troubleshooting

<details>
<summary>Metrics show no data</summary>

New capsules may need traffic or runtime before charts populate. Confirm the capsule is on and serving requests.

</details>
```