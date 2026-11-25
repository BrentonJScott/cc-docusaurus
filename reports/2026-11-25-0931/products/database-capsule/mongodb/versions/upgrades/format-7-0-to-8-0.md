# Format report — 7.0 to 8.0 (MongoDB upgrade)

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Upgrade MongoDB 7.0 to 8.0
- **Goal:** database on 8.0
- **Format check:** fail

## Content list (Check 1)

1. `goal` — (under `# Upgrade Your MongoDB Database From 7.0 to 8.0`) — Intro repeats `description`: capsule **Running**, **MongoDB Configuration** shows **8.0**.
2. `prerequisite` — `## Prerequisites` — Code Capsules account (card → `/docs/shared/create-an-account`).
3. `prerequisite` — `## Prerequisites` — A Space (card → `/docs/shared/create-a-space`).
4. `prerequisite` — `## Prerequisites` — MongoDB 7.0 capsule (card → `/docs/products/database-capsule/mongodb/versions`).
5. `prerequisite` — `## Upgrade your MongoDB database` → step 1 — Take a manual backup before upgrading; plan for brief disruption while status is **Updating** (not in `## Prerequisites`).
6. `goal` — `## Upgrade your MongoDB database` — **Open the capsule** — Open the Dedicated MongoDB Capsule in the Space.
7. `goal` — `## Upgrade your MongoDB database` — **Start the version change** — On **Config**, in **MongoDB Configuration**, select `8.0`, save, confirm.
8. `goal` — `## Upgrade your MongoDB database` — **Wait for the rollout** — Wait until status is **Running** and the version change finishes.
9. `goal` — `## Upgrade your MongoDB database` — **Confirm version 8.0** — On **Config**, **8.0** is active; optional `db.version()` and log review.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Manual backup and disruption planning are `prerequisite` items inside the steps section. |
| Check 2: Prerequisites | fail | Backup is not a linked prerequisite card; it is explained in step 1. |
| Check 3: Links | pass | Prerequisite `href` values resolve to `docs/shared/create-an-account.md`, `docs/shared/create-a-space.md`, and `docs/products/database-capsule/mongodb/versions.md`. |
| Check 4: Format and style | fail | `how_to_format.md`, Steps — step 1 opens with "In your Space" instead of `On **…**`; step 3 does not start with the screen name in bold. |

## Tickets

### 7-0-to-8-0-1

- **Type:** Move to prerequisites
- **Title:** Move manual backup out of step 1 into Prerequisites.
- **Problem:** Step 1 says "Take a manual backup first, because applications may see short connection interruptions while the capsule shows **Updating**."
- **Rule:** `FORMAT.MD`, Check 1 — prerequisite instructions belong in `## Prerequisites`, not in the steps section; `how_to_format.md`, Prerequisites.
- **Change:** Remove the backup sentence from step 1; add a prerequisite card (or linked warning under the cards) that points readers to a MongoDB backup how-to once it exists; keep disruption context in the step or in the card description only if it stays a single line.
- **Done when:** Backup appears only in `## Prerequisites` with a valid internal link, and step 1 contains only actions that reach the goal.

### 7-0-to-8-0-2

- **Type:** Broken link
- **Title:** Add a MongoDB backups guide for the backup prerequisite.
- **Problem:** The doc tells readers to take a manual backup but there is no `docs/products/database-capsule/mongodb/backups.md` to link from a prerequisite card.
- **Rule:** `FORMAT.MD`, Check 3 (Links); Check 2 — each prerequisite must have a link.
- **Change:** Add `docs/products/database-capsule/mongodb/backups.md` (or point the card at the correct slug when added) and link it from `## Prerequisites`.
- **Done when:** The backup card `href` resolves to a file under `docs/`.

### 7-0-to-8-0-3

- **Type:** Format fix
- **Title:** Open step descriptions on the screen name in bold.
- **Problem:** Step 1 uses "In your Space, open…" instead of `On **…**`. Step 3 says "Wait until the capsule status is **Running**" without naming the screen first (e.g. capsule header or dashboard).
- **Rule:** `how_to_format.md`, Steps — start the description with the screen name in bold.
- **Change:** Rewrite step 1 to open on the Space or capsule list (e.g. "On your **Space**, open your Dedicated MongoDB Capsule."). Rewrite step 3 to open on the status area (e.g. "On the capsule **Overview**, wait until status is **Running** and the version change finishes.").
- **Done when:** Each step body follows the `On **Screen**, …` pattern.

## Proposed outline

```md
---
slug: "/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0"
title: "How to Upgrade MongoDB 7.0 to 8.0"
description: >-
  Upgrade a Dedicated MongoDB Capsule on Code Capsules from MongoDB 7.0 to 8.0. When you finish, the capsule is Running and MongoDB Configuration shows 8.0.
sidebar_label: "7.0 to 8.0"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Upgrade Your MongoDB Database From 7.0 to 8.0

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ MongoDB 7.0 capsule, backup card → MongoDB backups how-to>

## Upgrade your MongoDB database

1. **Open the capsule**

   On your **Space**, open your Dedicated MongoDB Capsule.

2. **Start the version change**

   On **Config**, in **MongoDB Configuration**, click **Edit**, select `8.0`, save, and confirm when prompted.

3. **Wait for the rollout**

   On the capsule **Overview**, wait until status is **Running** and the new version is fully applied.

4. **Confirm version 8.0**

   On **Config**, **MongoDB Configuration** shows **8.0** as the active version. Run `db.version()` to confirm `8.0`, and review your application logs for driver or query errors.

## Troubleshooting

<details>
<summary>The capsule stays on Updating</summary>

The new version is still being applied. Wait for the status to return to **Running**, then check **Config** again.

</details>
```