# Format report — node.js-discord-bot

- **Run:** 2026-11-25-1239
- **Doc file:** `docs/backend/node.js/node.js-discord-bot.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host a Node.js Discord Bot
- **Goal:** Expect the bot to come online in Discord
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#`) | Deploy echo bot to Backend Capsule; bot online in Discord. |
| 2–6 | prerequisite | `## Prerequisites` | Account, fork, Space, GitHub, Discord bot cards. |
| 7 | goal | `## Deploy your Node.js Discord bot` | **Open the capsule wizard** — “Open your Space and select **New Capsule**.” |
| 8–15 | goal | (steps 2–9) | Wizard through **Config**, token, restart, member list online check. |
| 16–18 | — | `## Troubleshooting` | Repository, Message Content Intent, TOKEN. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | pass | Last step reaches online in member list; no echo-reply verification in steps. |
| Check 2: Prerequisites | pass | Five linked shared prerequisite cards. |
| Check 3: Links | pass | All prerequisite paths under `docs/shared/` exist. |
| Check 4: Format and style | fail | Step **Open the capsule wizard** does not open with `On **Screen**,`; **Restart the capsule** says “turn the capsule run toggle” without `On **Config**,` first. |

## Tickets

### node.js-discord-bot-1

- **Type:** Format fix
- **Title:** Open wizard and restart steps with the screen name in bold.
- **Problem:** Step 1 starts with “Open your Space and select **New Capsule**.” Step 8 starts with “On **Config**, turn the capsule run toggle…” but omits naming **Config** as the opening surface for the toggle action consistently with other steps.
- **Rule:** `how_to_format.md`, Steps — start the description with the screen name in bold.
- **Change:** Rewrite step 1 as `On your **Space**, click **+** and select **New Capsule**.` Ensure step 8 begins `On **Config**,` before the run toggle.
- **Done when:** Steps 1 and 8 follow the `On **…**,` pattern like steps 2–7.

## Proposed outline

(Existing deploy flow; steps 1 and 8 rewritten for screen-first wording.)