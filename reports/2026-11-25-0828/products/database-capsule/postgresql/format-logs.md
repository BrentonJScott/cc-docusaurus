# Format report — logs (PostgreSQL)

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/database-capsule/postgresql/logs.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** View logs for a PostgreSQL Database Capsule
- **Goal:** Expect to see capsule, build, and access log streams on the **Logs** tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | View build, runtime, and access logs for your PostgreSQL Capsule. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | PostgreSQL Capsule → `/products/database-capsule/postgresql/deploy` |
| 5 | goal | `## View logs` | **Open the Capsule** — Open the Space and select the PostgreSQL Capsule. |
| 6 | goal | `## View logs` | **Open Logs** — Click the **Logs** tab. |
| 7 | goal | `## View logs` | **Switch log streams** — Open **Capsule logs**, **Build logs**, or **Access logs**; scroll to the latest entries after a deploy. |
| 8 | goal | `## Troubleshooting` | Build logs are empty — trigger a new build or push, then refresh **Build logs**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Frontmatter `description` cites “capsule and access logs”; intro cites “build, runtime, and access logs” (`runtime` vs `capsule`). Steps omit an explicit end state that log entries are visible for the chosen stream (goal check). |
| Check 2: Prerequisites | fail | Account and Space cards link to `/docs/shared/*` pages that do not exist under `docs/`. See `shared-create-an-account` and `shared-create-a-space` in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`. |
| Check 3: Links | fail | `/docs/shared/create-an-account`, `/docs/shared/create-a-space`, and `/products/database-capsule/postgresql/deploy` have no matching files under `docs/`. |
| Check 4: Format and style | fail | H1 is `# Logs logs`; `title` is “How to View Logs for a PostgreSQL Database”. Intro does not repeat `description`. Steps section is `## View logs` not `## <Verb> your <Thing>`; step bodies do not open with the screen name in bold per `how_to_format.md`. |

## Tickets

### logs-1

- **Type:** Format fix
- **Title:** Fix H1 and align description with intro and log streams.
- **Problem:** H1 is `# Logs logs`. `description` says “capsule and access logs”; the intro says “build, runtime, and access logs.”
- **Rule:** `writing_style.md`, Every doc — one `#` title; intro repeats `description`. `FORMAT.MD`, Check 1 — goal wording must be consistent.
- **Change:** Set H1 to `# View Your PostgreSQL Logs` (or equivalent task title aligned with frontmatter `title`). Rewrite `description` and the sentences under the H1 so both state the same outcome: the reader opens **Logs** and can read **Capsule logs**, **Build logs**, and **Access logs** for their PostgreSQL Capsule.
- **Done when:** H1 is a clear task title; `description` and intro match; both mention the same log streams the steps use.

### logs-2

- **Type:** Format fix
- **Title:** Rename the steps section to verb + your + thing.
- **Problem:** Steps are under `## View logs` instead of `## <Verb> your <Thing>`.
- **Rule:** `how_to_format.md`, Steps — heading must be `## <Verb> your <Thing>`.
- **Change:** Rename to `## View your PostgreSQL logs`.
- **Done when:** The `##` heading before the numbered list matches the template pattern.

### logs-3

- **Type:** Format fix
- **Title:** Open each step on the screen name in bold; end with the goal check.
- **Problem:** Steps do not start with “On **…**,”. The last step does not state that the reader sees current log entries for the selected stream (documented goal).
- **Rule:** `how_to_format.md`, Steps — screen name in bold; last step must end with the reader seeing the goal.
- **Change:** Rewrite so step 1 opens on the Space/dashboard, step 2 on **Logs**, step 3 on the log stream selector (**Capsule logs** / **Build logs** / **Access logs**) and ends with latest log entries visible for the stream they opened.
- **Done when:** Each step follows the template pattern and the last step explicitly describes seeing log output on **Logs**.

### logs-4

- **Type:** Broken link
- **Title:** Link PostgreSQL Capsule prerequisite to an existing deploy guide.
- **Problem:** Prerequisite card `href` is `/products/database-capsule/postgresql/deploy`; there is no `docs/products/database-capsule/postgresql/deploy.md` in the repo.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/products/database-capsule/postgresql/deploy.md` or point the card at the correct in-repo deploy doc when PostgreSQL deploy is restored.
- **Done when:** The prerequisite card `href` resolves to a file under `docs/`.

### logs-5

- **Type:** Shared page (reference)
- **Title:** Use shared account and Space pages when available.
- **Problem:** Prerequisites depend on `/docs/shared/create-an-account` and `/docs/shared/create-a-space`, which are not in `docs/` yet.
- **Rule:** `FORMAT.MD`, Check 2 — reference existing shared-page tickets in this run.
- **Change:** No duplicate shared-page work on this doc; unblock Check 2 when `shared-create-an-account` and `shared-create-a-space` in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` are done.
- **Done when:** Both shared paths exist and this guide’s prerequisite cards resolve.

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
   On your **Space**, select the PostgreSQL Capsule.

2. **Open Logs**
   On **Logs**, open the tab.

3. **Choose a log stream**
   On **Logs**, open **Capsule logs**, **Build logs**, or **Access logs**.
   Latest entries appear for the stream you selected.

## Troubleshooting

<details>
<summary>Build logs are empty</summary>

Trigger a new build from **Deploy** or push to the connected branch, then refresh **Build logs**.

</details>
```