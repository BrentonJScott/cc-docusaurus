# Format report: python-discord-bot.md

- **Run:** 2026-11-25-1218
- **Doc file:** `docs/backend/python/python-discord-bot.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host a Python Discord Bot
- **Goal:** Expect the bot to come online in Discord
- **Format check:** fail

## Content list

1. **goal (intro)** — (under `#` title) — Deploy the Python Discord echo bot to a Backend Capsule and see the bot come online in Discord.
2. **prerequisite** — `## Prerequisites` — Code Capsules account → `/docs/shared/create-an-account`
3. **prerequisite** — `## Prerequisites` — Fork `python-discord-echobot` → `/docs/shared/fork-a-demo-repo`
4. **prerequisite** — `## Prerequisites` — A Space → `/docs/shared/create-a-space`
5. **prerequisite** — `## Prerequisites` — GitHub connected → `/docs/shared/connect-github`
6. **prerequisite** — `## Prerequisites` — A Discord bot → `/docs/shared/create-a-discord-bot`
7. **goal** — `## Deploy your Python Discord bot` — **Start a Backend Capsule** — In your Space, **+** / **New Capsule**.
8. **goal** — `## Deploy your Python Discord bot` — **Choose the capsule type, Team, and Space** — On **Capsule Details**, Backend Capsule; **Next**.
9. **goal** — `## Deploy your Python Discord bot` — **Choose the plan** — On **Plan**, **Basic**; **Next**.
10. **goal** — `## Deploy your Python Discord bot` — **Connect the repository** — On **Source Code**, `python-discord-echobot` / `main`; **Next**.
11. **goal** — `## Deploy your Python Discord bot` — **Set the run command** — On **Build and Deploy Settings**, blank **Run Command**.
12. **goal** — `## Deploy your Python Discord bot` — **Create the capsule** — **Create Capsule**; wait on **Builds**.
13. **goal** — `## Deploy your Python Discord bot` — **Add the bot token** — On **Config**, `TOKEN`; **Save**.
14. **goal** — `## Deploy your Python Discord bot` — **Restart the capsule** — toggle off and on; wait to start.
15. **remove** — `## Deploy your Python Discord bot` — **Check that the bot is online** — member list online plus send a message and see an echo reply (reply is not required for the documented goal).
16. **goal** — `## Deploy your Python Discord bot` — **Check that the bot is online** — bot shows as online in the Discord member list.
17. **—** — `## Troubleshooting` — Repository dropdown missing fork — GitHub app access.
18. **—** — `## Troubleshooting` — Bot online but no reply — **Message Content Intent**.
19. **—** — `## Troubleshooting` — Bot offline — wrong `TOKEN`.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Step **Check that the bot is online** includes echo-reply verification, labelled `remove`; non-goal content must not sit in the steps section. |
| Check 2: Prerequisites | pass | Five prerequisite cards each link to an existing `docs/shared/` page. |
| Check 3: Links | pass | Every prerequisite `href` resolves to a file under `docs/shared/`. |
| Check 4: Format and style | fail | Step 1 uses **+**; steps **Create the capsule** and **Restart the capsule** do not open with the screen name in bold per `how_to_format.md`. |

## Tickets

### python-discord-bot-1

- **Type:** Remove content
- **Title:** Drop echo-reply check from the last step.
- **Problem:** Step 9 says “Send a message in any channel the bot can see and it replies with the same message” after the member-list online check.
- **Rule:** `FORMAT.MD`, Check 1 (How-to guide: goal steps) — `remove` instructions must not appear inside the steps section; documented goal is the bot **coming online** in Discord.
- **Change:** End step 9 after confirming the bot appears **online** in the server member list. Keep echo behaviour only in **Troubleshooting** if needed.
- **Done when:** The last step describes only the online end state that matches the feature goal and `description`.

### python-discord-bot-2

- **Type:** Format fix
- **Title:** Align steps with `how_to_format.md` and `writing_style.md`.
- **Problem:** Step 1 says “click **+** and select **New Capsule**.” Step 6 is only “Click **Create Capsule**.” Step 8 describes the capsule toggle without naming the screen.
- **Rule:** `writing_style.md`, Words — name controls by label, not symbol alone; `how_to_format.md`, Steps — open each body with “On **&lt;Screen&gt;**, …”.
- **Change:**
  - Step 1: Open the Space and select **New Capsule** (no **+** alone), matching other 2026-11-25-1218 deploy guides.
  - Step 6: Start with the wizard screen in bold (for example the screen that shows **Create Capsule**), then **Create Capsule** and **Builds**.
  - Step 8: Start with “On **Config**” or the screen that hosts the run toggle, then off/on and wait.
- **Done when:** No step uses **+** alone; steps 6 and 8 follow the “On **Screen**, …” pattern.

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

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — account, fork python-discord-echobot, Space, connect-github, create-a-discord-bot.>

## Deploy your Python Discord bot

1. **Start a Backend Capsule** — Open the Space. Select **New Capsule**.
2. **Choose the capsule type, Team, and Space** — On **Capsule Details**, **Backend Capsule**; **Next**.
3. **Choose the plan** — On **Plan**, **Basic**; **Next**.
4. **Connect the repository** — On **Source Code**, `python-discord-echobot` / `main`; **Next**.
5. **Set the run command** — On **Build and Deploy Settings**, blank **Run Command**.
6. **Create the capsule** — On **&lt;screen with Create Capsule&gt;**, **Create Capsule**; on **Builds**, first build finishes.
7. **Add the bot token** — On **Config**, `TOKEN`; **Save**.
8. **Restart the capsule** — On **Config** (or run control screen), toggle off/on; wait to start.
9. **Check that the bot is online** — In Discord member list, bot shows **online** (no echo test).

## Troubleshooting

<details> — missing repo; online but no reply; offline in member list.
```