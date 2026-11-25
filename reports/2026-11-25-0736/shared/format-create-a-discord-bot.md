# Format report: Create a Discord Bot

- **Run**: 2026-11-25-0736
- **Doc**: `docs/shared/create-a-discord-bot.md`
- **Doc type**: How-to guide
- **Template**: `how_to_format.md`
- **Feature**: Create a Discord Bot
- **Goal**: Expect to have a bot token and the bot added to your Discord server
- **Format check**: fail

## Content list

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | goal | `## Create your Discord bot` | Create a server (Discord UI) |
| 2 | goal | `## Create your Discord bot` | New Application in Developer Portal |
| 3 | goal | `## Create your Discord bot` | Add bot, enable Message Content Intent |
| 4 | goal | `## Create your Discord bot` | Reset Token and copy token |
| 5 | goal | `## Create your Discord bot` | OAuth URL Generator: scopes and permissions |
| 6 | goal | `## Create your Discord bot` | Invite URL: add bot to server; bot in member list |
| 7 | remove | `## Troubleshooting` | Message Content Intent off — enable on Bot tab |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | pass | Goal steps reach token and server membership; none misplaced |
| Check 2: Prerequisites | pass | Discord account card with external signup link (tool install pattern) |
| Check 3: Links | pass | No broken internal links or images |
| Check 4: Format and style | fail | Step 1 names **+** instead of the control by its on-screen action or label |

## Tickets

### create-a-discord-bot-1

- **ID**: create-a-discord-bot-1
- **Type**: Format fix
- **Title**: Name the new-server control by action, not **+**.
- **Problem**: Step 1 says: "In Discord, click **+** in the left toolbar and create a server for the bot to join."
- **Rule**: `writing_style.md`, Words — name UI controls by what they say or do, not by colour or position alone.
- **Change**: Rewrite step 1 so the reader uses the control labeled for creating or adding a server (for example **Add a Server** or the flow’s visible label) without leading with **+** or sidebar position alone.
- **Done when**: Step 1 follows the writing-style rule and still starts the new-server flow.

## Proposed outline

```md
# Create a Discord Bot
<Token and bot on your server — matches goal.>

## Prerequisites
<DocCardList — Discord account (external signup)>

## Create your Discord bot
1. **Create a server** — open server-creation using on-screen labels (no **+**-only wording)
2. **Create an application** — Developer Portal
3. **Add the bot and enable message content** — Bot tab
4. **Copy the token** — Reset Token, Copy
5. **Generate the invite URL** — OAuth2 URL Generator
6. **Add the bot to your server** — invite URL; bot in member list

## Troubleshooting
<details> Message content intent … </details>
```