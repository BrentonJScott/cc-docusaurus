# Format report: Scale a Docker Container

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/products/docker-capsule/scale.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Scale a Docker Container
- **Goal:** Expect to see new resources saved in the scale tab
- **Format check:** fail

## Content list (Check 1)

1. `remove` — (under `# Scale Your Docker Container`) — Intro repeats `description` but neither states the documented end state (resources saved on **Scale**).
2. `prerequisite` — `## Prerequisites` — Code Capsules account (card).
3. `prerequisite` — `## Prerequisites` — A Space (card).
4. `prerequisite` — `## Prerequisites` — Docker Capsule deployed (card).
5. `goal` — `## Scale your Docker Capsule` — Open the Capsule and select the **Scale** tab.
6. `goal` — `## Scale your Docker Capsule` — On **Scale**, click **Edit**; adjust **CPU**, **RAM**, **Storage**, **Replicas**, and **GPU** when shown.
7. `goal` — `## Scale your Docker Capsule` — On **Scale**, click **Save** and confirm; new resources are saved and show on **Scale**.
8. `remove` — `## Troubleshooting` — Collapsed note on disabled **Save** (acceptable troubleshooting; not part of goal path).

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Steps reach the goal in step 3, but frontmatter `description` and the intro do not state the documented end state (new resources saved on **Scale**). |
| Check 2: Prerequisites | pass | Each prerequisite is a linked `DocCardList` card to existing shared or product pages. |
| Check 3: Links | pass | All `href` values resolve under `docs/`. |
| Check 4: Format and style | fail | `how_to_format.md`, Title and description: intro must repeat `description` and match the feature goal; `writing_style.md`, Every doc: description should say what the reader sees at the end. |

## Tickets

### scale-1

- **Type:** Format fix
- **Title:** Align description and intro with the documented feature goal.
- **Problem:** Frontmatter `description` and the paragraph under the H1 say scaling is for growing traffic and list CPU, RAM, replicas, and GPU, but neither says that saved resources appear on the **Scale** tab when finished. Compare `docs/products/docker-capsule/configure.md`: "When you finish, your saved values appear on the Config tab."
- **Rule:** `how_to_format.md`, Title and description; `writing_style.md`, Every doc.
- **Change:** Rewrite `description` and the intro (keeping them identical) to state the task and the end state, e.g. that after saving, the new resource settings are saved and visible on the **Scale** tab. Keep one or two sentences.
- **Done when:** `description`, the intro under `# Scale Your Docker Container`, and the last step all describe the same end state: new resources saved and visible on **Scale**.

## Proposed outline

```md
---
slug: "/products/docker-capsule/scale"
title: "How to Scale a Docker Container"
description: >-
  Scale CPU, RAM, storage, replicas, and GPU for a Docker Capsule on Code Capsules. When you finish, the new resources are saved and show on the Scale tab.
sidebar_label: Scale
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Scale Your Docker Container

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — account, Space, Docker Capsule deploy.>

## Scale your Docker Capsule

1. **Open Scale** — Open the Capsule; select the **Scale** tab.
2. **Edit resources** — On **Scale**, **Edit**; set **CPU**, **RAM**, **Storage**, **Replicas**, **GPU** when shown.
3. **Save** — On **Scale**, **Save** and confirm; new resources saved and visible on **Scale**.

## Troubleshooting

<details> — Save is disabled; plan or stopped-capsule message.
```