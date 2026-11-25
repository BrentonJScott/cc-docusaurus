# New guide report: Host a Python WhatsApp Bot

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/python/whatsapp-bot.md`
- **Doc type**: How-to guide
- **Slug**: `/backend/python/whatsapp-bot`
- **Feature**: Host a Python WhatsApp Bot
- **Goal**: Expect to Deploy the WhatsApp echo bot to a Backend Capsule, connect it to Twilio, and see the bot reply in WhatsApp
- **Guide status**: missing (no file at `docs/backend/python/whatsapp-bot.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Start a Backend Capsule
2. Choose the capsule type, Team, and Space
3. Choose the plan
4. Connect the repository
5. Create the capsule
6. Copy the capsule URL
7. Point Twilio at the bot
8. Message the bot

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### whatsapp-bot-ng-1

- **ID**: whatsapp-bot-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/python/whatsapp-bot.md` for Host a Python WhatsApp Bot.
- **Problem**: `docs/backend/python/whatsapp-bot.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy the WhatsApp echo bot to a Backend Capsule, connect it to Twilio, and see the bot reply in WhatsApp
- **Change**: Create `docs/backend/python/whatsapp-bot.md` as a how-to guide with slug `/backend/python/whatsapp-bot`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/python/whatsapp-bot.md`
- **Proposed slug**: `/backend/python/whatsapp-bot`
- **Goal**: Expect to Deploy the WhatsApp echo bot to a Backend Capsule, connect it to Twilio, and see the bot reply in WhatsApp
- **Outline**:

```
# Host Your WhatsApp Bot Application
Deploy the WhatsApp echo bot to a Backend Capsule, connect it to Twilio, and see the bot reply in WhatsApp.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your WhatsApp bot
1. **Start a Backend Capsule** — step detail from platform UI labels
2. **Choose the capsule type, Team, and Space** — step detail from platform UI labels
3. **Choose the plan** — step detail from platform UI labels
4. **Connect the repository** — step detail from platform UI labels
5. **Create the capsule** — step detail from platform UI labels
6. **Copy the capsule URL** — step detail from platform UI labels
7. **Point Twilio at the bot** — step detail from platform UI labels
8. **Message the bot** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/backend/python/whatsapp-bot.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
