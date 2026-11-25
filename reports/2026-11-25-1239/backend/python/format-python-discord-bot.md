# Format report — python-discord-bot

- **Run:** 2026-11-25-1239
- **Doc file:** `docs/backend/python/python-discord-bot.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host a Python Discord Bot
- **Goal:** Expect the bot to come online in Discord
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#`) | Deploy Python echo bot; bot online in Discord. |
| 2–6 | prerequisite | `## Prerequisites` | Account, fork, Space, GitHub, Discord bot cards. |
| 7 | goal | `## Deploy your Python Discord bot` | **Open the capsule wizard** — “Open your Space and select **New Capsule**.” |
| 8–15 | goal | (steps 2–9) | Wizard, token on **Config**, restart, member list online. |
| 16–18 | — | `## Troubleshooting` | Repository, Message Content Intent, TOKEN. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | pass | Goal reached when bot shows online in the member list. |
| Check 2: Prerequisites | pass | Linked shared prerequisite cards. |
| Check 3: Links | pass | Prerequisite `href` values resolve under `docs/shared/`. |
| Check 4: Format and style | fail | Same step-pattern gaps as the Node.js Discord bot guide: step 1 and step 8 do not open with `On **…**,`. |

## Tickets

### python-discord-bot-1

- **Type:** Format fix
- **Title:** Open wizard and restart steps with the screen name in bold.
- **Problem:** Step **Open the capsule wizard** starts with “Open your Space and select **New Capsule**” instead of `On your **Space**,`. **Restart the capsule** should open on `On **Config**,` before the run toggle.
- **Rule:** `how_to_format.md`, Steps — start each description with the screen name in bold.
- **Change:** Mirror the corrected wording planned for `node.js-discord-bot.md` (Space **+** / **New Capsule**; restart on **Config**).
- **Done when:** Steps 1 and 8 use the same `On **…**,` pattern as the other wizard steps.

## Proposed outline

(Python deploy flow unchanged except steps 1 and 8 screen-first wording.)