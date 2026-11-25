# Format report — configure (Agent Capsule)

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/agent-capsule/configure.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Configure an AI Agent
- **Goal:** Expect to see updated capsule parameters and environment variables saved
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Change agent build settings, runtime, and provider configuration on the **Config** tab. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card → `/docs/shared/create-an-account`) |
| 3 | prerequisite | `## Prerequisites` | A Space (card → `/docs/shared/create-a-space`) |
| 4 | prerequisite | `## Prerequisites` | Agent Capsule (card → `/products/agent-capsule/deploy`) |
| 5 | goal | `## Configure your Agent Capsule` | **Edit build settings** — **Capsule Parameters**, **Edit** next to **Build**, set **Project Path** and **Run Command**, **Save** and confirm. |
| 6 | goal | `## Configure your Agent Capsule` | **Edit runtime settings** — **Edit** next to **Runtime**, set **Network Port** and **Health Check**, **Save** and confirm. |
| 7 | goal | `## Configure your Agent Capsule` | **Set environment variables** — add or edit in **Environment Variables**, **Save**. |
| 8 | goal (partial) | `## Configure your Agent Capsule` | **Update Agent Config** — edit provider, model, or API settings; capsule restarts. |
| 9 | — | `## Troubleshooting` | Changes did not save — refresh and confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | The last step ends on capsule restart for **Agent Config**, not on the reader seeing updated **Capsule Parameters** and **Environment Variables** saved per the documented goal. |
| Check 2: Prerequisites | fail | Account and Space cards link to `/docs/shared/*` pages that do not exist under `docs/`. See shared tickets in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`. |
| Check 3: Links | fail | Prerequisite card `href: '/products/agent-capsule/deploy'` has no matching file under `docs/`; shared prerequisite paths missing. |
| Check 4: Format and style | fail | Intro omits environment variables and the saved-parameters goal outcome; last numbered step does not close with the goal per `how_to_format.md`, Steps. |
| Walkthrough | not run (format fail) | — |

## Tickets

### configure-1

- **Type:** Missing goal step
- **Title:** End steps with saved capsule parameters and environment variables
- **Problem:** Steps 1–3 click **Save** (and step 4 restarts the capsule) without stating what the reader should see when **Capsule Parameters** and **Environment Variables** show the updated values saved, as required by `DOCUMENTED_FEATURES.MD` for Configure an AI Agent.
- **Rule:** `FORMAT.MD`, Check 1 (How-to guide: goal steps); `how_to_format.md`, Steps — last step must end with the reader seeing the goal.
- **Change:** After build, runtime, and environment-variable edits, add or extend the final step so the reader reopens **Config**, confirms **Capsule Parameters** and **Environment Variables** display the saved values, and describe that outcome explicitly. Keep **Agent Config** in the list only if it stays required by the aligned `description`; the closing step must still state the saved-parameters goal.
- **Done when:** The numbered steps alone take a reader with prerequisites from the **Config** tab to visibly saved capsule parameters and environment variables, and the final step describes that outcome.

### configure-2

- **Type:** Format fix
- **Title:** Align title block with `description` and the documented goal
- **Problem:** `description` names build settings, runtime, environment variables, and agent model settings; the intro sentence omits environment variables and does not say the reader will see updated capsule parameters and environment variables saved when finished.
- **Rule:** `writing_style.md`, Every doc — one or two sentences repeat `description`; `how_to_format.md`, Title and description — match the feature goal.
- **Change:** Rewrite the one or two sentences under `# Configure Your AI Agent` so they repeat `description` and state the saved-parameters goal in plain language (still one or two short sentences).
- **Done when:** Frontmatter `description` and the intro under the `#` title match each other and the documented goal.

### configure-3

- **Type:** Broken link
- **Title:** Fix or add deploy prerequisite target
- **Problem:** The **Agent Capsule** prerequisite card links to `/products/agent-capsule/deploy`, but there is no `docs/products/agent-capsule/deploy.md` (or equivalent) in `docs/`.
- **Rule:** `FORMAT.MD`, Check 3 (Links)
- **Change:** Add `docs/products/agent-capsule/deploy.md` for the deploy how-to, or point the card at the correct existing slug under `docs/` once that page exists.
- **Done when:** The prerequisite `href` resolves to a file under `docs/`.

See **shared-create-an-account** and **shared-create-a-space** in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`. This doc’s account and Space cards depend on those pages before Check 2 can pass.

## Proposed outline

```md
---
slug: "/products/agent-capsule/configure"
title: "How to Configure an AI Agent"
description: >-
  Configure build settings, runtime, environment variables, and agent model settings on the Config tab, with saved parameters visible when you finish.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your AI Agent

<One or two sentences repeating description and the saved-parameters goal.>

## Prerequisites

<DocCardList — account, Space, Agent Capsule (deploy) cards.>

## Configure your Agent Capsule

1. **Edit build settings** — **Config** / **Capsule Parameters** / **Build**; set **Project Path**, **Run Command**; **Save**; confirm saved values.

2. **Edit runtime settings** — **Runtime**; **Network Port**, **Health Check**; **Save**; confirm.

3. **Set environment variables** — **Environment Variables**; add or edit; **Save**.

4. **Update Agent Config** (if still in scope) — **Agent Config**; provider/model; **Save**; optional restart note.

5. **Confirm saved settings** — reload **Config**; reader sees updated **Capsule Parameters** and **Environment Variables** saved (goal).

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh and confirm **Save** on the correct section.

</details>
```