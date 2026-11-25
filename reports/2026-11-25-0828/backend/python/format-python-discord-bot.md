# Format report: python-discord-bot.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/backend/python/python-discord-bot.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host a Python Discord Bot
- **Goal:** Expect the bot to come online in Discord
- **Format check:** fail

## Content list

1. **intro/goal** — (under `#` title) — Deploy the Python Discord echo bot to a Backend Capsule and see it reply in Discord.
2. **prerequisite** — `## Prerequisites` — Code Capsules account → `/docs/shared/create-an-account`
3. **prerequisite** — `## Prerequisites` — Fork `python-discord-echobot` → `/docs/shared/fork-a-demo-repo`
4. **prerequisite** — `## Prerequisites` — A Space → `/docs/shared/create-a-space`
5. **prerequisite** — `## Prerequisites` — GitHub connected → `/docs/shared/connect-github`
6. **prerequisite** — `## Prerequisites` — A Discord bot → `/docs/shared/create-a-discord-bot`
7. **goal** — `## Deploy your Python Discord bot` — **Start a Backend Capsule** — click **+** to add a new capsule.
8. **goal** — `## Deploy your Python Discord bot` — **Choose the capsule type, Team, and Space** — Backend Capsule, Team, Space; **Next**.
9. **goal** — `## Deploy your Python Discord bot` — **Choose the plan** — **Basic**; **Next**.
10. **goal** — `## Deploy your Python Discord bot` — **Connect the repository** — `python-discord-echobot` / `main`; **Next**.
11. **goal** — `## Deploy your Python Discord bot` — **Set the run command** — blank **Run Command**.
12. **goal** — `## Deploy your Python Discord bot` — **Create the capsule** — **Create Capsule**; wait on **Builds**.
13. **goal** — `## Deploy your Python Discord bot` — **Add the bot token** — `TOKEN` on **Config**; **Save**.
14. **goal** — `## Deploy your Python Discord bot` — **Restart the capsule** — toggle off and on; wait to start.
15. **goal** — `## Deploy your Python Discord bot` — **Chat with the bot** — send a message; bot replies with the same message.
16. **—** — `## Troubleshooting` — Repository dropdown missing fork — GitHub app access.
17. **—** — `## Troubleshooting` — Bot online but no reply — **Message Content Intent**.
18. **—** — `## Troubleshooting` — Bot offline — wrong `TOKEN`.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Intro, `description`, and the last step describe seeing the bot **reply**; the documented feature goal is the bot **coming online** in Discord. |
| Check 2: Prerequisites | fail | All five prerequisite cards link to `/docs/shared/*` pages that do not exist under `docs/` (see tickets below; account, Space, and fork reference existing run tickets). |
| Check 3: Links | fail | Hrefs `/docs/shared/create-an-account`, `/docs/shared/fork-a-demo-repo`, `/docs/shared/create-a-space`, `/docs/shared/connect-github`, and `/docs/shared/create-a-discord-bot` have no matching files under `docs/`. |
| Check 4: Format and style | fail | Step 1 uses **+** instead of naming the on-screen control; intro end state does not match the documented feature goal per `how_to_format.md`. |

## Tickets

### python-discord-bot-1

- **Type:** Format fix
- **Title:** Align the intro and last step with the documented feature goal.
- **Problem:** `DOCUMENTED_FEATURES.MD` goal is “Expect the bot to come online in Discord.” Frontmatter `description`, the intro, and step **Chat with the bot** say the reader will see the bot **reply** with the same message.
- **Rule:** `how_to_format.md`, Title and description — text under the `#` title must match the feature's goal in the documented features list; `FORMAT.MD`, Check 1 — last step must say what the reader sees when the goal is reached.
- **Change:** Either update `description`, the intro, and the final step so the reader confirms the bot is **online** in the Discord member list (and adjust `DOCUMENTED_FEATURES.MD` only if product owners want echo behaviour as the goal), or keep echo verification only if the documented goal is updated to match. The three fields must agree with the feature goal.
- **Done when:** `description`, intro, documented feature goal line, and the last deployment step describe the same end state.

### python-discord-bot-2

- **Type:** Format fix
- **Title:** Name the new-capsule control by label, not symbol.
- **Problem:** Step 1 says “click **+** to add a new capsule.”
- **Rule:** `writing_style.md`, Words — name UI controls by label or action, not position or symbol alone; `how_to_format.md`, Steps.
- **Change:** Replace **+** with the control’s on-screen label (for example **New Capsule** or **Add Capsule**).
- **Done when:** Step 1 describes starting a new capsule using bold UI labels only, with no **+** alone.

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-an-account`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/platform/capsules/format-health-checks.md` (shared-create-an-account).
- **Done when:** That shared page exists and this guide’s account card resolves.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-space.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-a-space`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` (shared-create-a-space).
- **Done when:** That shared page exists and this guide’s Space card resolves.

### shared-fork-a-demo-repo

- **Type:** Shared page
- **Title:** Create `docs/shared/fork-a-demo-repo.md`.
- **Problem:** Prerequisites link to `/docs/shared/fork-a-demo-repo`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/frontend/format-static-html.md` (shared-fork-a-demo-repo).
- **Done when:** That shared page exists and this guide’s fork card resolves.

### shared-connect-github

- **Type:** Shared page
- **Title:** Create `docs/shared/connect-github.md`.
- **Problem:** Prerequisites link to `/docs/shared/connect-github`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/connect-github.md` with slug `/shared/connect-github`, covering installing the Code Capsules GitHub app and granting access so a fork appears in the capsule wizard **Repository** dropdown (outline in `docs.bak/shared/connect-github.md`).
- **Done when:** The path resolves in `docs/` and this guide’s GitHub card link works.

### shared-create-a-discord-bot

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-discord-bot.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-a-discord-bot`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/create-a-discord-bot.md` with slug `/shared/create-a-discord-bot`, covering Developer Portal app creation, **Message Content Intent**, token copy, and inviting the bot to the reader’s server (outline in `docs.bak/shared/create-a-discord-bot.md`).
- **Done when:** The path resolves in `docs/` and this guide’s Discord bot card link works.

## Proposed outline

```md
---
slug: "/backend/python/python-discord-bot"
title: "How to Host a Python Discord Bot"
description: >-
  <Matches documented feature goal: bot online in Discord.>
sidebar_label: "Python Discord Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Python Discord Bot

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — account, fork python-discord-echobot, Space, connect-github, create-a-discord-bot.>

## Deploy your Python Discord bot

1. **Start a Backend Capsule** — **New Capsule** (or on-screen label), not **+** alone.
2. **Choose the capsule type, Team, and Space** — On **Capsule Details**, Backend Capsule; **Next**.
3. **Choose the plan** — On **Plan**, **Basic**; **Next**.
4. **Connect the repository** — On **Source Code**, `python-discord-echobot` / `main`; **Next**.
5. **Set the run command** — On **Build and Deploy Settings**, blank **Run Command**.
6. **Create the capsule** — **Create Capsule**; **Builds** finishes.
7. **Add the bot token** — On **Config**, `TOKEN`; **Save**.
8. **Restart the capsule** — toggle off/on; wait to start.
9. **Confirm the bot is online** — In Discord, the bot appears online in the member list <or echo step if goal is updated>.

## Troubleshooting

<details> — missing repo in dropdown; online but no reply; offline in member list.
```