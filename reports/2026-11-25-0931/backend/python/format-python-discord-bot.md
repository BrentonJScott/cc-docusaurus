# Format report — python-discord-bot

- **Run:** 2026-11-25-0931
- **Doc:** `docs/backend/python/python-discord-bot.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host a Python Discord Bot
- **Goal:** Expect the bot to come online in Discord
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Deploy the Python Discord echo bot to a Backend Capsule and see the bot come online in Discord. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | Fork `python-discord-echobot` → `/docs/shared/fork-a-demo-repo` |
| 4 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 5 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/connect-github` |
| 6 | prerequisite | `## Prerequisites` | A Discord bot → `/docs/shared/create-a-discord-bot` |
| 7 | goal | `## Deploy your Python Discord bot` | **Start a Backend Capsule** — In your Space, click **+** and select **New Capsule**. |
| 8 | goal | `## Deploy your Python Discord bot` | **Choose the capsule type, Team, and Space** — On **Capsule Details**, **Backend Capsule**, Team, Space; **Next**. |
| 9 | goal | `## Deploy your Python Discord bot` | **Choose the plan** — On **Plan**, **Basic**; **Next**. |
| 10 | goal | `## Deploy your Python Discord bot` | **Connect the repository** — On **Source Code**, `python-discord-echobot` / `main`; **Next**. |
| 11 | goal | `## Deploy your Python Discord bot` | **Set the run command** — On **Build and Deploy Settings**, blank **Run Command**. |
| 12 | goal | `## Deploy your Python Discord bot` | **Create the capsule** — **Create Capsule**; **Builds** tab until first build finishes. |
| 13 | goal | `## Deploy your Python Discord bot` | **Add the bot token** — On **Config**, **Environment Variables**, `TOKEN`; **Save**. |
| 14 | goal | `## Deploy your Python Discord bot` | **Restart the capsule** — Toggle off and on; wait to start. |
| 15 | goal | `## Deploy your Python Discord bot` | **Check that the bot is online** — Bot online in member list; echo reply in a channel. |
| 16 | — | `## Troubleshooting` | Repository dropdown missing fork — GitHub app access. |
| 17 | — | `## Troubleshooting` | Bot online but no reply — **Message Content Intent**. |
| 18 | — | `## Troubleshooting` | Bot offline — wrong `TOKEN`. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | pass | Intro and `description` match the documented goal (bot online); steps include repo, branch, plan, **Run Command**, `TOKEN`, restart, and the last step confirms the bot is online. |
| Check 2: Prerequisites | pass | Five prerequisites are linked `DocCardList` cards; targets exist under `docs/shared/`. |
| Check 3: Links | pass | Every prerequisite `href` resolves under `docs/`. |
| Check 4: Format and style | fail | Step 1 uses **+**; steps **Start a Backend Capsule**, **Create the capsule**, and **Restart the capsule** do not open with the wizard or dashboard screen name in bold (`how_to_format.md`, Steps; `writing_style.md`, Words). |
| Walkthrough | not run (format fail) | — |

## Tickets

### python-discord-bot-1

- **Type:** Format fix
- **Title:** Name the new-capsule control by label, not symbol.
- **Problem:** Step **Start a Backend Capsule** says “click **+** and select **New Capsule**.”
- **Rule:** `writing_style.md`, Words — name UI controls by label or action, not position or symbol alone.
- **Change:** Replace **+** with the on-screen control label (for example “select **New Capsule**” in your Space), matching `docs/backend/node.js/express.js.md` once that guide is fixed or `reports/2026-11-25-0931/database/mysql/format-django-+-mysql.md` ticket django-+-mysql-3.
- **Done when:** Step 1 describes starting a new capsule using bold UI labels only, with no **+** alone.

### python-discord-bot-2

- **Type:** Format fix
- **Title:** Open create-capsule and restart steps with the screen name.
- **Problem:** **Create the capsule** is only “Click **Create Capsule**.”; **Restart the capsule** is only “Turn the capsule's toggle off and on again”; neither opens with “On **<Screen>**, …”.
- **Rule:** `how_to_format.md`, Steps — one step per wizard screen; start each description with the screen name in bold.
- **Change:** Prefix **Create the capsule** with the wizard screen that shows **Create Capsule** (for example **Review**). Prefix **Restart the capsule** with the tab that has the power toggle (for example “On **Details**, …” or the label the UI uses).
- **Done when:** Every step body in the deploy section opens with “On **<Screen>**, …” except the Space-only **New Capsule** step.

### python-discord-bot-3

- **Type:** Format fix
- **Title:** Open the Space step without **+** and optional split from **Capsule Details**.
- **Problem:** **Start a Backend Capsule** combines the Space action with wizard entry wording and does not use “On **<Screen>**, …”.
- **Rule:** `how_to_format.md`, Steps — one step covers one wizard screen.
- **Change:** If the product pattern is one item per screen, keep step 1 as only **New Capsule** from the Space and leave **Capsule Details** in step 2 (already separate); either way, drop **+** and use the labeled control.
- **Done when:** Step 1 matches the repo’s chosen pattern (Space action only or single labeled control) and does not use **+** alone.

## Proposed outline

```md
---
slug: "/backend/python/python-discord-bot"
title: "How to Host a Python Discord Bot"
description: >-
  Deploy the Python Discord echo bot to a Backend Capsule and see the bot come online in Discord.
sidebar_label: "Python Discord Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Python Discord Bot

Deploy the Python Discord echo bot to a Backend Capsule and see the bot come online in Discord.

## Prerequisites

<DocCardList — existing five /docs/shared/ cards>

## Deploy your Python Discord bot

1. **Start a Backend Capsule** — In your Space, select **New Capsule** (labeled control, not **+**).

2. **Choose the capsule type, Team, and Space** — On **Capsule Details**, **Backend Capsule**, Team, Space; **Next**.

3. **Choose the plan** — On **Plan**, **Basic**; **Next**.

4. **Connect the repository** — On **Source Code**, `python-discord-echobot`, `main`; **Next**.

5. **Set the run command** — On **Build and Deploy Settings**, blank **Run Command**.

6. **Create the capsule** — On **<final wizard screen>**, **Create Capsule**; on **Builds**, wait for the first build to finish.

7. **Add the bot token** — On **Config**, **Environment Variables**, `TOKEN`; **Save**.

8. **Restart the capsule** — On **Details** (or tab with the toggle), turn the capsule off and on; wait to start.

9. **Check that the bot is online** — In Discord, the bot shows online in the member list (optional echo check in a channel).

## Troubleshooting

<details> — missing repo; online but no reply; offline in member list.
```