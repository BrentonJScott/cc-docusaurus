# Format report — configure (Agent Capsule)

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/agent-capsule/configure.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Configure an AI Agent
- **Goal:** Expect to see updated capsule parameters and environment variables saved
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Change agent build settings, runtime, environment variables, and provider configuration on the **Config** tab. When you finish, the updated capsule parameters and environment variables are saved. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`) |
| 3 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`) |
| 4 | prerequisite (missing on page) | (steps assume) | An existing Agent Capsule with the **Config** tab available |
| 5 | goal | `## Configure your Agent Capsule` | **Edit build settings** — In **Capsule Parameters**, **Edit** next to **Build**; set **Project Path** and **Run Command**; **Save** and confirm. |
| 6 | goal | `## Configure your Agent Capsule` | **Edit runtime settings** — **Edit** next to **Runtime**; set **Network Port** and **Health Check**; **Save** and confirm. |
| 7 | goal | `## Configure your Agent Capsule` | **Set environment variables** — add or edit in **Environment Variables**; **Save**. |
| 8 | goal | `## Configure your Agent Capsule` | **Update Agent Config** — edit public AI provider, model, or API-related settings; capsule restarts. |
| 9 | goal | `## Configure your Agent Capsule` | **Confirm the saved settings** — reload **Config**; **Capsule Parameters** and **Environment Variables** show saved values (goal). |
| 10 | — | `## Troubleshooting` | Changes did not save — refresh and confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Steps jump into **Capsule Parameters** with no step to open the Agent Capsule and **Config** tab; step bodies do not name example values for fields the walkthrough uses. |
| Check 2: Prerequisites | fail | Steps require an existing Agent Capsule, but `## Prerequisites` has no deploy card (compare `docs/products/database-capsule/documentdb/configure.md`). |
| Check 3: Links | pass | Prerequisite `href` values resolve to `docs/shared/create-an-account.md` and `docs/shared/create-a-space.md`. |
| Check 4: Format and style | fail | `writing_style.md`, Every doc — intro does not repeat `description`; `how_to_format.md`, Steps — missing **Config** entry step and exact field values. |
| Walkthrough | not run (format fail) | — |

## Tickets

### configure-1

- **Type:** Missing goal step
- **Title:** Add a step to open the Config tab.
- **Problem:** Step 1 begins in **Capsule Parameters** without telling the reader to open their Agent Capsule and select **Config**.
- **Rule:** `FORMAT.MD`, Check 1 (goal steps); `how_to_format.md`, Steps — steps start from a reader who has prerequisites only.
- **Change:** Insert step 1 **Open Config** (open the Agent Capsule in your Space, click **Config**); renumber the list.
- **Done when:** The numbered list opens the capsule UI before editing **Capsule Parameters**.

### configure-2

- **Type:** Move to prerequisites
- **Title:** Add an Agent Capsule prerequisite card.
- **Problem:** All configuration steps assume a deployed Agent Capsule; `## Prerequisites` lists only account and Space.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add a third `DocCardList` item (🛠️ Agent Capsule) linking to the agent deploy how-to under `docs/`, matching DocumentDB configure. Create `docs/products/agent-capsule/deploy.md` if it does not exist yet.
- **Done when:** Every prerequisite implied by the steps appears as a linked card, and the deploy target exists under `docs/`.

### configure-3

- **Type:** Format fix
- **Title:** Make the intro repeat the frontmatter description.
- **Problem:** `description` uses “Configure” and “agent model settings”; the intro uses “Change agent” and “provider configuration.”
- **Rule:** `writing_style.md`, Every doc — one or two sentences under `#` repeat `description`.
- **Change:** Set the intro text to match `description` exactly (or update both so they are identical).
- **Done when:** Intro and `description` are the same wording.

### configure-4

- **Type:** Format fix
- **Title:** State exact build, runtime, and environment values in the steps.
- **Problem:** Steps name control labels but not the **Project Path**, **Run Command**, **Network Port**, **Health Check**, or environment variable key/value the documented walkthrough uses.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1.
- **Change:** Align steps 1–3 (and **Agent Config** if in scope) with walkthrough/test-platform values so readers enter concrete settings, not unspecified edits.
- **Done when:** Each edit step includes the exact value(s) from the aligned walkthrough.

## Proposed outline

```md
---
slug: "/products/agent-capsule/configure"
title: "How to Configure an AI Agent"
description: >-
  Configure build settings, runtime, environment variables, and agent model settings on the Config tab. When you finish, the updated capsule parameters and environment variables are saved.
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
   In your Space, open the Agent Capsule. Click the **Config** tab.

2. **Edit build settings**
   On **Config**, in **Capsule Parameters**, click **Edit** next to **Build**. Set **Project Path** to `<value>` and **Run Command** to `<value>`. Click **Save** and confirm.

3. **Edit runtime settings**
   On **Config**, click **Edit** next to **Runtime**. Set **Network Port** to `<value>` and **Health Check** to `<value>`. Click **Save** and confirm.

4. **Set environment variables**
   On **Config**, in **Environment Variables**, add or edit `<KEY>` to `<value>`. Click **Save**.

5. **Update Agent Config** (if in scope)
   On **Config**, edit **Agent Config** for provider/model/API settings. Save; note restart if applicable.

6. **Confirm the saved settings**
   Reload **Config**. **Capsule Parameters** and **Environment Variables** show the values you saved.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>
```