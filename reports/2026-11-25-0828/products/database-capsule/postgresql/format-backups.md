# Format report — backups (PostgreSQL)

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/database-capsule/postgresql/backups.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Back Up a PostgreSQL Database
- **Goal:** Expect to see a backup created and available to restore
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove / misaligned | (under `#` title) | Create and view backups for your PostgreSQL Capsule. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | PostgreSQL Capsule → `/products/database-capsule/postgresql/deploy` |
| 5 | goal | `## Run a backup` | **Open Backups** — Open the Capsule and select the **Backups** tab. |
| 6 | goal | `## Run a backup` | **Start a backup** — Click **Create backup** or **Backup now** as labeled on your cluster. |
| 7 | goal (weak end state) | `## Run a backup` | **Confirm completion** — Wait until the backup status shows **Completed**. The backup appears in the list with a timestamp. |
| 8 | goal (troubleshooting) | `## Troubleshooting` | Backup stays in progress — retry when the capsule is healthy. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Frontmatter `description` promises manual backups, automatic daily/weekly/monthly schedules, and restore; steps cover only a single manual run and never state the backup is **available to restore** (`DOCUMENTED_FEATURES.MD` goal). Intro under `#` does not repeat `description`. Step 2 offers two control labels instead of one path. |
| Check 2: Prerequisites | fail | Account and Space cards link to `/docs/shared/*` pages that do not exist under `docs/`. See `shared-create-an-account` and `shared-create-a-space` in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`. |
| Check 3: Links | fail | `/docs/shared/create-an-account`, `/docs/shared/create-a-space`, and `/products/database-capsule/postgresql/deploy` have no matching files under `docs/`. |
| Check 4: Format and style | fail | H1 is a placeholder (`# Back up your Backups`); intro/description mismatch; steps heading is not `## <Verb> your <Thing>`; step bodies do not open with the screen name in bold; last step does not end on the documented goal end state. |

## Tickets

### backups-1

- **Type:** Format fix
- **Title:** Replace placeholder page title.
- **Problem:** The H1 is `# Back up your Backups`, which repeats the word “Backups” like a template placeholder rather than naming the task.
- **Rule:** `how_to_format.md`, Title and description — one `#` title naming what the reader is doing (compare `docs/products/docker-capsule/scale.md`: `# Scale Your Docker Container`).
- **Change:** Set the H1 to `# Back Up Your PostgreSQL Database` (aligned with frontmatter `title`).
- **Done when:** The H1 is a meaningful task title with no duplicate “Backups” wording.

### backups-2

- **Type:** Format fix
- **Title:** Align description, intro, and feature goal.
- **Problem:** `description` mentions automatic schedules and restore; `DOCUMENTED_FEATURES.MD` goal is a backup **created and available to restore**. The intro says only “Create and view backups” and does not repeat `description`.
- **Rule:** `FORMAT.MD`, Check 1 — `description` and last step must match the feature goal; `writing_style.md`, Every doc — intro repeats `description`.
- **Change:** Rewrite `description` and the one or two sentences under `#` so both state that when the reader finishes, a completed backup appears in **Backups** and is available to restore. Remove schedule/restore promises unless you add steps for them in a follow-up ticket.
- **Done when:** `description`, intro, steps, and `DOCUMENTED_FEATURES.MD` goal describe the same end state.

### backups-3

- **Type:** Format fix
- **Title:** Rename the steps section to verb + your + thing.
- **Problem:** Steps are under `## Run a backup` instead of `## <Verb> your <Thing>`.
- **Rule:** `how_to_format.md`, Steps — heading must be `## <Verb> your <Thing>`.
- **Change:** Rename to `## Back up your PostgreSQL database`.
- **Done when:** The `##` heading before the numbered list matches the template pattern.

### backups-4

- **Type:** Format fix
- **Title:** Open each step on the screen name; end with restore-ready backup.
- **Problem:** Step 1 does not start with “On **…**,”. Step 2 uses “**Create backup** or **Backup now**” as alternatives. Step 3 ends at “timestamp” without stating the backup is available to restore.
- **Rule:** `how_to_format.md`, Steps — screen name in bold; one path per step; last step must end with the reader seeing the goal.
- **Change:** Rewrite steps so step 1 opens on the dashboard/**Capsule**, step 2 on **Backups** with one labeled control, step 3 confirms status **Completed** and that the backup is listed and available to restore from **Backups**.
- **Done when:** Each step follows the template pattern and the last step explicitly describes a completed backup available to restore.

### backups-5

- **Type:** Broken link
- **Title:** Link PostgreSQL Capsule prerequisite to an existing deploy guide.
- **Problem:** Prerequisite card `href` is `/products/database-capsule/postgresql/deploy`; there is no `docs/products/database-capsule/postgresql/deploy.md` in the repo (only `docs.bak/…`).
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Restore or add `docs/products/database-capsule/postgresql/deploy.md`, or point the card at the correct in-repo deploy doc until a PostgreSQL deploy guide is restored.
- **Done when:** The prerequisite card `href` resolves to a file under `docs/`.

### backups-6

- **Type:** Shared page (reference)
- **Title:** Use shared account and Space pages when available.
- **Problem:** Prerequisites depend on `/docs/shared/create-an-account` and `/docs/shared/create-a-space`, which are not in `docs/` yet.
- **Rule:** `FORMAT.MD`, Check 2 — reference existing shared-page tickets in this run.
- **Change:** No duplicate shared-page work on this doc; unblock Check 2 when `shared-create-an-account` and `shared-create-a-space` in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` are done.
- **Done when:** Both shared paths exist and this guide’s prerequisite cards resolve.

## Proposed outline

```md
---
slug: "/products/database-capsule/postgresql/backups"
title: "How to Back Up a PostgreSQL Database"
description: >-
  Create a manual backup for your PostgreSQL Capsule on Code Capsules.
  When you finish, a completed backup is listed on **Backups** and is
  available to restore.
sidebar_label: Backups
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Back Up Your PostgreSQL Database

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ PostgreSQL Capsule (deploy link when it exists)>

## Back up your PostgreSQL database

1. **Open the Capsule**

   On your **Space**, open the PostgreSQL Capsule.

2. **Open Backups**

   On **Backups**, open the tab.

3. **Create a backup**

   On **Backups**, click **Create backup** (or the control labeled for your cluster). Wait until status shows **Completed**.

4. **Confirm restore availability**

   On **Backups**, confirm the new backup appears in the list with a timestamp and is available to restore.

## Troubleshooting

<details>
<summary>Backup stays in progress</summary>

Large databases take longer. If it fails, open **Logs** and retry when the capsule is healthy.

</details>
```