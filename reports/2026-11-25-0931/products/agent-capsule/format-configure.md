# Format report — configure (Agent Capsule)

- **Run:** 2026-11-25-0931
- **Doc:** `docs/products/agent-capsule/configure.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Configure an AI Agent
- **Goal:** Expect to see updated capsule parameters and environment variables saved
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Change agent build settings, runtime, environment variables, and provider configuration on the **Config** tab; when finished, capsule parameters and environment variables are saved. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`). |
| 3 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`). |
| 4 | prerequisite (missing) | — | An Agent Capsule deployed in the Space (not listed; compare `docs/products/docker-capsule/configure.md`). |
| 5 | goal | `## Configure your Agent Capsule` | **Edit build settings** — **Capsule Parameters**, **Edit** next to **Build**, **Project Path**, **Run Command**, **Save** and confirm. |
| 6 | goal | `## Configure your Agent Capsule` | **Edit runtime settings** — **Edit** next to **Runtime**, **Network Port**, **Health Check**, **Save** and confirm. |
| 7 | goal | `## Configure your Agent Capsule` | **Set environment variables** — **Environment Variables**, **Save**. |
| 8 | goal | `## Configure your Agent Capsule` | **Update Agent Config** — provider, model, or API settings; capsule restarts. |
| 9 | goal | `## Configure your Agent Capsule` | **Confirm the saved settings** — reload **Config**; **Capsule Parameters** and **Environment Variables** show saved values. |
| 10 | — | `## Troubleshooting` | Changes did not save — refresh and confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Steps assume the reader is already on **Config** with no **Open Config** step; a deployed Agent Capsule is a `prerequisite` but not in `## Prerequisites`. |
| Check 2: Prerequisites | fail | Account and Space are linked cards; the deployed Agent Capsule prerequisite is missing from `DocCardList`. |
| Check 3: Links | pass | Listed prerequisite `href` values resolve to `docs/shared/create-an-account.md` and `docs/shared/create-a-space.md`. |
| Check 4: Format and style | fail | Step bodies do not open with `On **Config**, …` per `how_to_format.md`, Steps; `description` says “agent model settings” while the intro says “provider configuration”; intro omits bold on **Config** tab where `description` should match. |
| Walkthrough | not run (format fail) | — |

## Tickets

### configure-1

- **Type:** Format fix
- **Title:** Add an Agent Capsule prerequisite card.
- **Problem:** `## Prerequisites` lists only account and Space. Readers need an existing Agent Capsule before editing **Config**, as in `docs/products/docker-capsule/configure.md`.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add `{type: 'link', href: '/docs/products/agent-capsule/deploy', label: '🛠️ Agent Capsule', description: 'Create the Capsule first.'}` (or the correct deploy slug when the page exists).
- **Done when:** Every prerequisite from Check 1 appears as one linked card in `## Prerequisites`.

### configure-2

- **Type:** Broken link
- **Title:** Add or link Agent Capsule deploy guide for the prerequisite card.
- **Problem:** No `docs/products/agent-capsule/deploy.md` exists under `docs/` (only under `docs.bak/`), so the deploy card cannot resolve until a deploy how-to is added or the card points at an existing slug.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/products/agent-capsule/deploy.md` that passes format check, or point the prerequisite card at the correct in-repo deploy path once available.
- **Done when:** The Agent Capsule prerequisite `href` resolves to a file under `docs/`.

### configure-3

- **Type:** Missing goal step
- **Title:** Open the Agent Capsule on **Config** before editing parameters.
- **Problem:** Step 1 jumps to **Edit build settings** in **Capsule Parameters** without opening the capsule or selecting **Config**, unlike `docs/products/docker-capsule/configure.md` step **Open Config**.
- **Rule:** `FORMAT.MD`, Check 1; `how_to_format.md`, Steps — one screen per step, screen name in bold.
- **Change:** Add a first step such as **Open Config**: in your Space, open the Agent Capsule and select the **Config** tab.
- **Done when:** The numbered list starts from a reader with prerequisites at the **Config** tab before build/runtime edits.

### configure-4

- **Type:** Format fix
- **Title:** Start each step on **Config** and align intro with `description`.
- **Problem:** Steps 1–4 use “In **Capsule Parameters**” or similar without leading `On **Config**, …`. Intro says “provider configuration” while `description` names “agent model settings”; intro does not bold **Config** tab consistently with the docker configure pattern.
- **Rule:** `how_to_format.md`, Steps; `writing_style.md`, Every doc — one or two sentences repeat `description`.
- **Change:** Rewrite step bodies to open with the screen in bold; make intro and `description` identical (including **Config** tab and agent model settings wording).
- **Done when:** Every step body starts with the relevant screen label; frontmatter `description` and intro text match.

## Proposed outline

```md
---
slug: "/products/agent-capsule/configure"
title: "How to Configure an AI Agent"
description: >-
  Configure build settings, runtime, environment variables, and agent model
  settings on the **Config** tab. When you finish, your saved values appear on
  **Config** in **Capsule Parameters** and **Environment Variables**.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your AI Agent

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🛠️ Agent Capsule (deploy)>

## Configure your Agent Capsule

1. **Open Config**
   In your Space, open the Agent Capsule and select the **Config** tab.

2. **Edit build settings**
   On **Config**, in **Capsule Parameters**, click **Edit** next to **Build**. Set **Project Path** and **Run Command**. Click **Save** and confirm.

3. **Edit runtime settings**
   On **Config**, click **Edit** next to **Runtime**. Set **Network Port** and **Health Check**. Click **Save** and confirm.

4. **Set environment variables**
   On **Config**, add or edit variables in **Environment Variables** and click **Save**.

5. **Update Agent Config**
   On **Config**, edit **Agent Config** for provider, model, or API settings. Click **Save**; the capsule restarts with the new configuration.

6. **Confirm the saved settings**
   Reload the **Config** tab. **Capsule Parameters** and **Environment Variables** show the values you saved.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>
```