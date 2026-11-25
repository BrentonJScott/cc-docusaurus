# Format report — 7.0 to 8.0 (MongoDB upgrade)

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Upgrade MongoDB 7.0 to 8.0
- **Goal:** Expect to see the database running on version 8.0
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | prerequisite | `## Prerequisites` | Code Capsules account, Space, GitHub connected (cards). |
| 2 | remove | After `## Prerequisites` | “This guide covers upgrading a Dedicated MongoDB Capsule from **7.0** to **8.0**.” (misplaced intro). |
| 3 | prerequisite | `## Before You Begin` | Take a manual backup; link to MongoDB backups doc. |
| 4 | prerequisite | `## Before You Begin` | Plan for brief disruption during **Updating** status. |
| 5 | goal | `## Change the Version` | Open dashboard → **Config** → **MongoDB Configuration** → **Edit** → **8.0** → save → confirm. |
| 6 | goal | (paragraph under version steps) | Wait for **Running** and new version applied. |
| 7 | goal | `## After Upgrading` | Verify connectivity, `db.version()`, review logs. |
| 8 | remove | `## After Upgrading` | Link to MongoDB 8.0 release notes (external). |
| 9 | remove | `## Troubleshooting` | Symptom about UI not matching steps (generic). |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Extra sections (`## Before You Begin`, `## Change the Version`, `## After Upgrading`); goal actions and prerequisites are not under the template’s single steps section; last content does not end with the reader seeing MongoDB **8.0** running on the capsule; GitHub is not part of the upgrade goal. |
| Check 2: Prerequisites | fail | Missing Dedicated MongoDB 7.0 capsule (and backup) as cards; backup/disruption are explained in a non-prerequisite section; shared prerequisite targets under `docs/shared/` do not exist (see existing run tickets). |
| Check 3: Links | fail | `/docs/shared/create-an-account`, `/docs/shared/create-a-space`, `/docs/shared/configure-git-for-code-capsules` have no files under `docs/`; `/products/database-capsule/mongodb/backups/` has no matching doc (only PostgreSQL `backups.md` exists). |
| Check 4: Format and style | fail | No one- or two-sentence intro directly under `#` before `## Prerequisites`; forbidden extra `##` sections; steps section not named `## <Verb> your <Thing>`; numbered steps lack bold titles, blank lines, and “On **Screen**,” openings; prose paragraph sits between step list and next section. |

## Tickets

### 7-0-to-8-0-1

- **Type:** Format fix
- **Title:** Collapse layout to the four allowed sections.
- **Problem:** The doc uses `## Before You Begin`, `## Change the Version`, and `## After Upgrading` in addition to Prerequisites and Troubleshooting.
- **Rule:** `how_to_format.md`, Sections — only Title/description, `## Prerequisites`, `## <Verb> your <Thing>`, and `## Troubleshooting`, in that order.
- **Change:** Remove the extra `##` headings; move backup and disruption warnings into Prerequisites (linked) or the steps intro; fold version change and post-upgrade checks into one numbered steps list under a single `## Upgrade your MongoDB database` (or equivalent).
- **Done when:** The page has no `##` sections other than Prerequisites, the steps section, and Troubleshooting.

### 7-0-to-8-0-2

- **Type:** Format fix
- **Title:** Put the intro under the title and match the feature goal.
- **Problem:** Nothing repeats `description` directly under `#`; the only intro sentence sits after the prerequisite cards.
- **Rule:** `writing_style.md`, Every doc — one or two sentences under `#` repeat `description` and state the end state (database running on **8.0**).
- **Change:** Move intro copy above `## Prerequisites`; align `description` and intro on completing the upgrade with **8.0** visible as the active version when the capsule is **Running**.
- **Done when:** Intro and `description` match and mention version **8.0** as the outcome.

### 7-0-to-8-0-3

- **Type:** Move to prerequisites
- **Title:** Replace GitHub card with MongoDB capsule and backup prerequisites.
- **Problem:** `🔌 GitHub connected` is listed but is not required to change MongoDB version on an existing Dedicated capsule; backup is only mentioned inside `## Before You Begin`.
- **Rule:** `FORMAT.MD`, Check 1 — prerequisite instructions belong in `## Prerequisites`, not in other sections; `how_to_format.md`, Prerequisites.
- **Change:** Remove the GitHub card unless a shared page proves it is required for this task; add a card for an existing Dedicated MongoDB **7.0** capsule and a card linking to the in-repo MongoDB backup guide once it exists.
- **Done when:** Every non-goal requirement appears as a prerequisite card with a working link.

### 7-0-to-8-0-4

- **Type:** Missing goal step
- **Title:** Rewrite steps to end on version 8.0 running.
- **Problem:** Steps are plain sentences without bold step titles; they do not open on **Config**; verification is a separate bullet list and never states that the UI shows **8.0** as the active version.
- **Rule:** `how_to_format.md`, Steps — `## Upgrade your …`, bold titles, screen names in bold, last step must show the documented goal.
- **Change:** Use one numbered list: open capsule, edit version on **Config**, confirm upgrade, wait for **Running**, then confirm **MongoDB Configuration** shows **8.0** (and optional `db.version()` check in the last step).
- **Done when:** The last step explicitly says the reader sees the database running on version **8.0**.

### 7-0-to-8-0-5

- **Type:** Remove content
- **Title:** Drop release-notes pitch from the how-to body.
- **Problem:** “Review the MongoDB 8.0 release notes …” is background, not an upgrade step.
- **Rule:** `FORMAT.MD`, Check 1 — content labelled `remove`; `how_to_format.md`, no extra sections or teaching.
- **Change:** Delete the external release-notes paragraph from the guide (or move to a future Explanation and link from Related if needed).
- **Done when:** The guide contains only prerequisite cards, steps, and troubleshooting.

### 7-0-to-8-0-6

- **Type:** Broken link
- **Title:** Fix the manual backup link target.
- **Problem:** `[manual backup](/products/database-capsule/mongodb/backups/)` has no `docs/products/database-capsule/mongodb/backups.md`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add the MongoDB backups how-to under `docs/` or point the link at an existing backup doc slug.
- **Done when:** The backup href resolves to a file under `docs/`.

### 7-0-to-8-0-7

- **Type:** Shared page (reference)
- **Title:** Use shared account and Space pages when available.
- **Problem:** Prerequisite cards link to `/docs/shared/create-an-account` and `/docs/shared/create-a-space`, which are not in `docs/` yet.
- **Rule:** `FORMAT.MD`, Check 2 — reference existing shared-page tickets in this run.
- **Change:** No duplicate shared-page work; unblock when `shared-create-an-account` and `shared-create-a-space` in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` are done.
- **Done when:** Both shared paths exist and this guide’s account and Space cards resolve.

## Proposed outline

```md
---
slug: "/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0"
title: "How to Upgrade MongoDB 7.0 to 8.0"
description: >-
  Upgrade a Dedicated MongoDB Capsule from MongoDB 7.0 to 8.0 on Code Capsules.
  When you finish, the capsule is **Running** and **MongoDB Configuration** shows **8.0**.
sidebar_label: "7.0 to 8.0"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Upgrade Your MongoDB Database From 7.0 to 8.0

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ Dedicated MongoDB 7.0 capsule, backup card when backups doc exists>

## Upgrade your MongoDB database

1. **Open the capsule**

   On your **Space**, open the Dedicated MongoDB Capsule.

2. **Start the version change**

   On **Config**, in **MongoDB Configuration**, click **Edit**, select **8.0**, save, and confirm when prompted.

3. **Wait for the rollout**

   On the capsule dashboard, wait until status is **Running** and the version change finishes.

4. **Confirm version 8.0**

   On **Config**, **MongoDB Configuration** shows **8.0** as the active version; optionally run `db.version()` and confirm **8.0**.

## Troubleshooting

<details>
<summary>The upgrade stays on Updating or fails</summary>

Check capsule events and logs; confirm backup was taken; retry from **Config** after status returns to **Running** or support guidance.

</details>
```