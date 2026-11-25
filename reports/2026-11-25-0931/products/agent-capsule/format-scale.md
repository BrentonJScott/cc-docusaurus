# Format report: Scale an AI Agent

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/products/agent-capsule/scale.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Scale an AI Agent
- **Goal:** Expect to see new resources saved in the scale tab
- **Format check:** fail

## Content list (Check 1)

1. `remove` — (under `# Scale Your AI Agent`) — Intro repeats `description` but neither states the documented end state (resources saved on **Scale**).
2. `prerequisite` — `## Prerequisites` — Code Capsules account (card).
3. `prerequisite` — `## Prerequisites` — A Space (card).
4. `prerequisite` — (implied by step 1, not card-linked) — An existing Agent Capsule to open.
5. `goal` — `## Scale your Agent capsule` — Open the Agent Capsule and select the **Scale** tab.
6. `goal` — `## Scale your Agent capsule` — On **Scale**, click **Edit**; set **CPU**, **RAM**, **Storage**, and **Replicas**.
7. `goal` — `## Scale your Agent capsule` — On **Edit**, click **Save** and confirm; new resources are saved and show on **Scale**.
8. `remove` — `## Troubleshooting` — Collapsed note on disabled **Save** (acceptable troubleshooting; not part of goal path).

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Steps reach the goal in step 3, but frontmatter `description` and the intro do not state the documented end state (new resources saved on **Scale**). |
| Check 2: Prerequisites | fail | An existing Agent Capsule is required but missing from `## Prerequisites` (compare `docs/products/docker-capsule/scale.md` deploy card). |
| Check 3: Links | pass | All `href` values on the page resolve under `docs/`. |
| Check 4: Format and style | fail | `how_to_format.md`, Title and description: intro must repeat `description` and match the feature goal; `writing_style.md`, Every doc: description should say what the reader sees at the end. |

## Tickets

### scale-1

- **Type:** Format fix
- **Title:** Align description and intro with the documented feature goal.
- **Problem:** Frontmatter `description` and the paragraph under the H1 describe growing workload and allocating CPU and memory, but neither says that saved resources appear on the **Scale** tab when finished. The last step already states that end state.
- **Rule:** `how_to_format.md`, Title and description; `writing_style.md`, Every doc.
- **Change:** Rewrite `description` and the intro (keeping them identical) to state the task and the end state, e.g. that after saving, the new resource settings are saved and visible on the **Scale** tab. Keep one or two sentences.
- **Done when:** `description`, the intro under `# Scale Your AI Agent`, and the last step all describe the same end state: new resources saved and visible on **Scale**.

### scale-2

- **Type:** Format fix
- **Title:** Add Agent Capsule prerequisite card.
- **Problem:** Step 1 assumes the reader already has an Agent Capsule, but `## Prerequisites` only lists account and Space.
- **Rule:** `how_to_format.md`, Prerequisites; `FORMAT.MD`, Check 2.
- **Change:** Add a `🛠️` DocCardList card linking to the Agent Capsule deploy how-to under `docs/`, matching other scale guides.
- **Done when:** `## Prerequisites` includes a card for an existing Agent Capsule with a valid `href`.

### scale-3

- **Type:** Broken link
- **Title:** Provide deploy guide for Agent Capsule prerequisite.
- **Problem:** There is no `docs/products/agent-capsule/deploy.md` (or other deploy page under `docs/`) to link from the prerequisite card.
- **Rule:** `FORMAT.MD`, Check 3 (Links); `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/products/agent-capsule/deploy.md` that passes its own format check, or point the prerequisite card at the correct existing deploy page under `docs/` once it exists.
- **Done when:** The prerequisite card `href` resolves to an existing file under `docs/`.

## Proposed outline

```md
---
slug: "/products/agent-capsule/scale"
title: "How to Scale an AI Agent"
description: >-
  Scale CPU, RAM, storage, and replicas for an Agent Capsule on Code Capsules. When you finish, the new resources are saved and show on the Scale tab.
sidebar_label: Scale
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Scale Your AI Agent

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — account, Space, Agent Capsule deploy.>

## Scale your Agent capsule

1. **Open Scale** — Open the Capsule; select the **Scale** tab.
2. **Edit resources** — On **Scale**, **Edit**; set **CPU**, **RAM**, **Storage**, **Replicas**.
3. **Save** — On **Scale**, **Save** and confirm; new resources saved and visible on **Scale**.

## Troubleshooting

<details> — Save is disabled; plan or stopped-capsule message.
```