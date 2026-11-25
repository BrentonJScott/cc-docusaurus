# Format report: Scale a WordPress Site

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/products/wordpress-capsule/scale.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Scale a WordPress Site
- **Goal:** Expect to see new resources saved in the scale tab
- **Format check:** fail

## Content list (Check 1)

1. `remove` — `# Scale your Scale` — Placeholder H1 text; not a task description.
2. `prerequisite` (linked in cards) — `## Prerequisites` — Code Capsules account, a Space, and an existing WordPress Capsule.
3. `goal` — `## Scale the Capsule` — Open the Capsule and select the **Scale** tab.
4. `goal` — `## Scale the Capsule` — Click **Edit** and adjust **CPU**, **RAM**, **Storage**, or **Replicas** as offered for this capsule type.
5. `goal` — `## Scale the Capsule` — Click **Save** and confirm; new resources show on **Scale**.
6. `remove` — `# Scale your Scale` (intro) — Intro sentence does not repeat the frontmatter `description` (missing Code Capsules allocation and WordPress site traffic-growth wording).

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Intro labelled `remove`; step 2 uses vague “as offered” instead of concrete controls or values. |
| Check 2: Prerequisites | fail | Account and Space cards link to missing `docs/shared/` pages; WordPress Capsule card links to a deploy guide not in `docs/`. |
| Check 3: Links | fail | `/docs/shared/create-an-account`, `/docs/shared/create-a-space`, and `/products/wordpress-capsule/deploy` have no matching files under `docs/`. |
| Check 4: Format and style | fail | Wrong `#` title, intro/description mismatch, steps section heading and step bodies do not follow the template (screen name in bold). |

## Tickets

### scale-1

- **Type:** Format fix
- **Title:** Replace placeholder page title.
- **Problem:** The H1 is `# Scale your Scale`, which is a template placeholder, not the product task.
- **Rule:** `how_to_format.md`, Title and description: one `#` title naming what the reader is doing (compare other product scale guides, e.g. `# Scale Your Docker Container`).
- **Change:** Set the H1 to `# Scale Your WordPress Site` (or equivalent clear task title aligned with `title` in frontmatter).
- **Done when:** The H1 is a meaningful task title with no duplicate “Scale” wording.

### scale-2

- **Type:** Format fix
- **Title:** Make the intro repeat the frontmatter description.
- **Problem:** Under the title, the doc says “Change CPU, RAM, replicas, or storage for your WordPress Capsule.” Frontmatter `description` says scaling on Code Capsules by allocating more CPU and memory as traffic to your WordPress site grows.
- **Rule:** `writing_style.md`, Every doc: directly under the `#` title, one or two sentences repeat `description`.
- **Change:** Replace the intro with the same one or two sentences as the `description` field (or update both so they match exactly).
- **Done when:** Intro and `description` are the same text.

### scale-3

- **Type:** Format fix
- **Title:** Tighten scale steps for screen naming and specific controls.
- **Problem:** Step bodies do not start with the screen in bold (e.g. “On **Scale**, …”). Step 2 says “as offered for this capsule type” instead of naming the controls the reader sets. The steps section heading is generic (`## Scale the Capsule`) instead of naming the task.
- **Rule:** `how_to_format.md`, Steps: heading `## <Verb> your <Thing>`; start descriptions with the screen name in bold; state values the goal depends on exactly.
- **Change:** Rename the steps section to `## Scale your WordPress site`, rewrite steps 1–3 so each opens on **Scale** (or **Edit** where appropriate), lists **CPU**, **RAM**, **Storage**, and **Replicas**, and ends with saved resources visible on **Scale** per the documented feature goal.
- **Done when:** Each step follows the template pattern and the last step states the reader sees new resources saved on **Scale**.

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** `## Prerequisites` links to `/docs/shared/create-an-account`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` (shared-create-an-account).
- **Done when:** The path resolves in `docs/` and this guide’s account card link works.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-space.md`.
- **Problem:** `## Prerequisites` links to `/docs/shared/create-a-space`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` (shared-create-a-space).
- **Done when:** The path resolves in `docs/` and this guide’s Space card link works.

### scale-4

- **Type:** Broken link
- **Title:** Fix WordPress Capsule prerequisite link target.
- **Problem:** Prerequisites card `href` is `/products/wordpress-capsule/deploy`, but `docs/products/wordpress-capsule/deploy.md` does not exist under `docs/` (only under `docs.bak/`).
- **Rule:** `FORMAT.MD`, Check 3 (Links); `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/products/wordpress-capsule/deploy.md` for the deploy feature when it exists in the documented features list, or point the card at the correct existing deploy guide path under `docs/` once that page is added.
- **Done when:** The prerequisite `href` resolves to an existing file under `docs/`.

## Proposed outline

```md
---
slug: "/products/wordpress-capsule/scale"
title: "How to Scale a WordPress Site"
description: >-
  Scale your WordPress Capsule on Code Capsules by allocating more CPU and memory as traffic to your WordPress site grows.
sidebar_label: Scale
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Scale Your WordPress Site

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — account, Space, WordPress Capsule deploy how-to (valid path under docs/).>

## Scale your WordPress site

1. **Open Scale** — On **Scale**, open the Capsule and select the **Scale** tab.
2. **Edit resources** — On **Edit**, set **CPU**, **RAM**, **Storage**, and **Replicas** as shown; …
3. **Save** — Click **Save**, confirm; new resources saved and visible on **Scale**.

## Troubleshooting

<details> — Save disabled / plan or stopped capsule message; fix per tab message.
```