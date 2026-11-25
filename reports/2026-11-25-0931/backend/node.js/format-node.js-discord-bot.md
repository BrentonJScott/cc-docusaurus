# Format report: node.js-discord-bot.md

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/backend/node.js/node.js-discord-bot.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host a Node.js Discord Bot
- **Goal:** Expect the bot to come online in Discord
- **Format check:** fail

## Content list (Check 1)

1. `goal` — (under `# Host Your Node.js Discord Bot`) — Deploy the echo bot to a Backend Capsule and see it come online in Discord.
2. `prerequisite` — `## Prerequisites` — Code Capsules account → `/docs/shared/create-an-account`
3. `prerequisite` — `## Prerequisites` — Fork `nodejs-discord-echobot` → `/docs/shared/fork-a-demo-repo`
4. `prerequisite` — `## Prerequisites` — A Space → `/docs/shared/create-a-space`
5. `prerequisite` — `## Prerequisites` — GitHub connected → `/docs/shared/connect-github`
6. `prerequisite` — `## Prerequisites` — A Discord bot → `/docs/shared/create-a-discord-bot`
7. `goal` — `## Deploy your Node.js Discord bot` — **Start a Backend Capsule** — **+**, **New Capsule**.
8. `goal` — `## Deploy your Node.js Discord bot` — **Choose the capsule type, Team, and Space** — **Capsule Details**, Backend Capsule; **Next**.
9. `goal` — `## Deploy your Node.js Discord bot` — **Choose the plan** — **Basic**; **Next**.
10. `goal` — `## Deploy your Node.js Discord bot` — **Connect the repository** — `nodejs-discord-echobot`, `main`; **Next**.
11. `goal` — `## Deploy your Node.js Discord bot` — **Set the run command** — blank **Run Command**.
12. `goal` — `## Deploy your Node.js Discord bot` — **Create the capsule** — **Create Capsule**; wait on **Builds**.
13. `goal` — `## Deploy your Node.js Discord bot` — **Add the bot token** — `TOKEN` on **Config**; **Save**.
14. `goal` — `## Deploy your Node.js Discord bot` — **Restart the capsule** — toggle off and on; wait to start.
15. `goal` — `## Deploy your Node.js Discord bot` — **Check that the bot is online** — member list shows online; send a message and bot echoes.
16. `remove` — `## Deploy your Node.js Discord bot` — (step 15) — send a message; bot replies with the same message (beyond documented goal).
17. `—` — `## Troubleshooting` — Repository dropdown missing fork — GitHub app access.
18. `—` — `## Troubleshooting` — Bot online but no reply — **Message Content Intent**.
19. `—` — `## Troubleshooting` — Bot offline — wrong `TOKEN`.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Step **Check that the bot is online** includes echo verification (`remove` inside the steps list); documented goal is online in Discord only. |
| Check 2: Prerequisites | pass | Five `DocCardList` cards; each prerequisite links to an existing shared page under `docs/shared/`. |
| Check 3: Links | pass | All prerequisite `href` values resolve under `docs/`. |
| Check 4: Format and style | fail | Step 1 uses **+** instead of a control label; step **Create the capsule** does not open with the wizard screen name in bold (`how_to_format.md`, Steps; `writing_style.md`, Words). |

## Tickets

### node.js-discord-bot-1

- **Type:** Remove content
- **Title:** End the last step at the bot showing online.
- **Problem:** Step **Check that the bot is online** says “Send a message in any channel the bot can see and it replies with the same message,” which is not part of the documented goal “Expect the bot to come online in Discord.”
- **Rule:** `FORMAT.MD`, Check 1 — `remove` instructions must not appear inside `## Deploy your Node.js Discord bot`; `how_to_format.md`, Steps — the last step ends with the reader seeing the goal.
- **Change:** Keep the member-list online check; drop the echo send/reply sentences (echo behaviour stays in troubleshooting only).
- **Done when:** The final numbered step only confirms the bot appears online in the Discord member list.

### node.js-discord-bot-2

- **Type:** Format fix
- **Title:** Name the new-capsule control by label, not symbol.
- **Problem:** Step **Start a Backend Capsule** says “click **+** and select **New Capsule**.”
- **Rule:** `writing_style.md`, Words — name UI controls by label or action, not symbol alone.
- **Change:** Replace **+** with the on-screen label (for example **New Capsule** only), matching the pattern targeted in `reports/2026-11-25-0931/database/mysql/format-django-+-mysql.md`.
- **Done when:** Step 1 describes starting a capsule with bold UI labels only, with no **+** alone.

### node.js-discord-bot-3

- **Type:** Format fix
- **Title:** Open **Create the capsule** with the screen name.
- **Problem:** Step **Create the capsule** begins with “Click **Create Capsule**.” with no leading “On **…**, …”.
- **Rule:** `how_to_format.md`, Steps — start each description with the screen name in bold.
- **Change:** Prefix with the wizard screen that shows **Create Capsule** (for example **Review**), then **Create Capsule** and **Builds** wait as today.
- **Done when:** The step body opens with “On **<Screen>**, …”.

## Proposed outline

```md
---
slug: "/backend/node.js/node.js-discord-bot"
title: "How to Host a Node.js Discord Bot"
description: >-
  Deploy the Node.js Discord echo bot to a Backend Capsule and see the bot come online in Discord.
sidebar_label: "Node.js Discord Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Node.js Discord Bot

Deploy the Node.js Discord echo bot to a Backend Capsule and see the bot come online in Discord.

## Prerequisites

<DocCardList — account, fork nodejs-discord-echobot, Space, connect-github, create-a-discord-bot (unchanged).>

## Deploy your Node.js Discord bot

1. **Start a Backend Capsule** — In your Space, select **New Capsule** (labeled control, not **+**).

2. **Choose the capsule type, Team, and Space** — On **Capsule Details**, …

3–5. <Plan, Source Code, Build and Deploy Settings — unchanged.>

6. **Create the capsule** — On **<final wizard screen>**, click **Create Capsule**. On **Builds**, wait for the first build to finish.

7–8. <Config TOKEN, restart — unchanged.>

9. **Check that the bot is online** — In your Discord server, open the member list; the bot shows as online.

## Troubleshooting

<details> — unchanged (repo dropdown, no reply, offline).
```