# Format report: Scale a Docker Container

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/products/docker-capsule/scale.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Scale a Docker Container
- **Goal:** Expect to see new resources saved in the scale tab
- **Format check:** fail

## Content list (Check 1)

1. `remove` — `# Scale your Scale` — Placeholder title text; not a task description.
2. `prerequisite` (linked in cards) — `## Prerequisites` — Code Capsules account, a Space, and an existing Docker Capsule.
3. `goal` — `## Scale the Capsule` — Open the Capsule and select the **Scale** tab.
4. `goal` — `## Scale the Capsule` — Click **Edit** and adjust **CPU**, **RAM**, **Storage**, or **Replicas** as offered for this capsule type.
5. `goal` — `## Scale the Capsule` — Click **Save** and confirm; new resources show on **Scale**.
6. `remove` — `# Scale your Scale` (intro) — Intro sentence does not repeat the frontmatter `description` (missing GPU and traffic-growth wording).

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Intro does not match `description`; step 2 uses vague “as offered” instead of concrete values or controls. |
| Check 2: Prerequisites | fail | Prerequisites link to `/docs/shared/create-an-account` and `/docs/shared/create-a-space`, which have no pages under `docs/shared/`. |
| Check 3: Links | fail | Same missing shared targets; other prerequisite and internal slugs resolve. |
| Check 4: Format and style | fail | Wrong `#` title, intro/description mismatch, steps do not open with the screen name in bold per template. |

## Tickets

### scale-1

- **Type:** Format fix
- **Title:** Replace placeholder page title.
- **Problem:** The H1 is `# Scale your Scale`, which is a template placeholder, not the product task.
- **Rule:** `how_to_format.md`, Title and description: one `#` title naming what the reader is doing (compare `docs/products/docker-capsule/configure.md`: `# Configure Your Docker Container`).
- **Change:** Set the H1 to `# Scale Your Docker Container` (or equivalent clear task title aligned with `title` in frontmatter).
- **Done when:** The H1 is a meaningful task title with no duplicate “Scale” wording.

### scale-2

- **Type:** Format fix
- **Title:** Make the intro repeat the frontmatter description.
- **Problem:** Under the title, the doc says “Change CPU, RAM, replicas, or storage for your Docker Capsule.” Frontmatter `description` also mentions GPU and scaling as application traffic grows.
- **Rule:** `writing_style.md`, Every doc: directly under the `#` title, one or two sentences repeat `description`.
- **Change:** Replace the intro with the same one or two sentences as the `description` field (or update both so they match exactly).
- **Done when:** Intro and `description` are the same text.

### scale-3

- **Type:** Format fix
- **Title:** Tighten scale steps for screen naming and specific controls.
- **Problem:** Step bodies do not start with the screen in bold (e.g. “On **Scale**, …”). Step 2 says “as offered for this capsule type” instead of naming the controls or values the reader sets.
- **Rule:** `how_to_format.md`, Steps: start descriptions with the screen name in bold; state values the goal depends on exactly.
- **Change:** Rewrite steps 1–3 so each opens on **Scale** (or **Edit** where appropriate), lists **CPU**, **RAM**, **Storage**, **Replicas**, and **GPU** when shown, and ends with saved resources visible on **Scale** per the documented feature goal.
- **Done when:** Each step follows the template pattern and the last step states the reader sees new resources saved on **Scale**.

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** `## Prerequisites` links to `/docs/shared/create-an-account`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/create-an-account.md` with slug `/docs/shared/create-an-account`, covering sign-up and opening Personal Team, so prerequisite cards can link to it.
- **Done when:** The path resolves in `docs/` and the scale guide’s account card link works.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-space.md`.
- **Problem:** `## Prerequisites` links to `/docs/shared/create-a-space`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/create-a-space.md` with slug `/docs/shared/create-a-space`, covering creating a Space to deploy into.
- **Done when:** The path resolves in `docs/` and the scale guide’s Space card link works.

## Proposed outline

```md
---
slug: "/products/docker-capsule/scale"
title: "How to Scale a Docker Container"
description: >-
  Scale your Docker Capsule on Code Capsules by adding replicas or allocating more CPU, memory, and GPU as your application traffic grows.
sidebar_label: Scale
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Scale Your Docker Container

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — account, Space, Docker Capsule deploy how-to.>

## Scale your Docker capsule

1. **Open Scale** — On **Scale**, …
2. **Edit resources** — On **Edit**, set **CPU**, **RAM**, **Storage**, **Replicas**, **GPU** (when shown); …
3. **Save** — Click **Save**, confirm; new resources saved and visible on **Scale**.

## Troubleshooting

<details> — Save disabled / plan or stopped capsule message; fix per tab message.
```