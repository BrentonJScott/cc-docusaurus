# Format report: Scale a WordPress Site

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/products/wordpress-capsule/scale.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Scale a WordPress Site
- **Goal:** Expect to see new resources saved in the scale tab
- **Format check:** fail

## Content list (Check 1)

1. `remove` — (under `# Scale Your WordPress Site`) — Intro repeats `description` but neither states the documented end state (resources saved on **Scale**).
2. `prerequisite` — `## Prerequisites` — Code Capsules account (card).
3. `prerequisite` — `## Prerequisites` — A Space (card).
4. `prerequisite` — (implied by step 1, not card-linked) — An existing WordPress Capsule to open.
5. `goal` — `## Scale your WordPress site` — On your Space dashboard, open the WordPress Capsule and select the **Scale** tab.
6. `goal` — `## Scale your WordPress site` — On **Scale**, click **Edit**; adjust **CPU**, **RAM**, **Storage**, and **Replicas**.
7. `goal` — `## Scale your WordPress site` — On **Scale**, click **Save** and confirm; new resources are saved and show on **Scale**.
8. `remove` — `## Troubleshooting` — Collapsed note on disabled **Save** (acceptable troubleshooting; not part of goal path).

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Steps reach the goal in step 3, but frontmatter `description` and the intro do not state the documented end state (new resources saved on **Scale**). |
| Check 2: Prerequisites | fail | An existing WordPress Capsule is required but missing from `## Prerequisites` (compare `docs/products/docker-capsule/scale.md` deploy card). |
| Check 3: Links | pass | All `href` values on the page resolve under `docs/`. |
| Check 4: Format and style | fail | `how_to_format.md`, Title and description: intro must repeat `description` and match the feature goal; `writing_style.md`, Every doc: description should say what the reader sees at the end. |

## Tickets

### scale-1

- **Type:** Format fix
- **Title:** Align description and intro with the documented feature goal.
- **Problem:** Frontmatter `description` and the paragraph under the H1 describe growing traffic and allocating CPU and memory, but neither says that saved resources appear on the **Scale** tab when finished. The last step already states that end state.
- **Rule:** `how_to_format.md`, Title and description; `writing_style.md`, Every doc.
- **Change:** Rewrite `description` and the intro (keeping them identical) to state the task and the end state, e.g. that after saving, the new resource settings are saved and visible on the **Scale** tab. Keep one or two sentences.
- **Done when:** `description`, the intro under `# Scale Your WordPress Site`, and the last step all describe the same end state: new resources saved and visible on **Scale**.

### scale-2

- **Type:** Format fix
- **Title:** Add WordPress Capsule prerequisite card.
- **Problem:** Step 1 assumes the reader already has a WordPress Capsule, but `## Prerequisites` only lists account and Space.
- **Rule:** `how_to_format.md`, Prerequisites; `FORMAT.MD`, Check 2.
- **Change:** Add a `🛠️` DocCardList card linking to the WordPress Capsule deploy how-to under `docs/`, matching other product scale guides.
- **Done when:** `## Prerequisites` includes a card for an existing WordPress Capsule with a valid `href`.

### scale-3

- **Type:** Broken link
- **Title:** Provide deploy guide for WordPress Capsule prerequisite.
- **Problem:** There is no `docs/products/wordpress-capsule/deploy.md` (or other deploy page under `docs/products/wordpress-capsule/`) to link from the prerequisite card.
- **Rule:** `FORMAT.MD`, Check 3 (Links); `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/products/wordpress-capsule/deploy.md` that passes its own format check, or point the prerequisite card at the correct existing deploy page under `docs/` once it exists.
- **Done when:** The prerequisite card `href` resolves to an existing file under `docs/`.

## Proposed outline

```md
---
slug: "/products/wordpress-capsule/scale"
title: "How to Scale a WordPress Site"
description: >-
  Scale CPU, RAM, storage, and replicas for a WordPress Capsule on Code Capsules. When you finish, the new resources are saved and show on the Scale tab.
sidebar_label: Scale
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Scale Your WordPress Site

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — account, Space, WordPress Capsule deploy.>

## Scale your WordPress site

1. **Open Scale** — Open the Capsule; select the **Scale** tab.
2. **Edit resources** — On **Scale**, **Edit**; set **CPU**, **RAM**, **Storage**, **Replicas**.
3. **Save** — On **Scale**, **Save** and confirm; new resources saved and visible on **Scale**.

## Troubleshooting

<details> — Save is disabled; plan or stopped-capsule message.
```