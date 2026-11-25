# New guide report: Host a Python Telegram Bot

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/python/python-telegram-bot.md`
- **Doc type**: How-to guide
- **Slug**: `/backend/python/python-telegram-bot`
- **Feature**: Host a Python Telegram Bot
- **Goal**: Expect to Deploy the Python Telegram echo bot to a Backend Capsule and see it reply in Telegram
- **Guide status**: missing (no file at `docs/backend/python/python-telegram-bot.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Start a Backend Capsule
2. Choose the capsule type, Team, and Space
3. Choose the plan
4. Connect the repository
5. Set the run command
6. Create the capsule
7. Add the environment variables
8. Restart the capsule
9. Set the webhook
10. Chat with the bot

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### python-telegram-bot-ng-1

- **ID**: python-telegram-bot-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/python/python-telegram-bot.md` for Host a Python Telegram Bot.
- **Problem**: `docs/backend/python/python-telegram-bot.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy the Python Telegram echo bot to a Backend Capsule and see it reply in Telegram
- **Change**: Create `docs/backend/python/python-telegram-bot.md` as a how-to guide with slug `/backend/python/python-telegram-bot`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/python/python-telegram-bot.md`
- **Proposed slug**: `/backend/python/python-telegram-bot`
- **Goal**: Expect to Deploy the Python Telegram echo bot to a Backend Capsule and see it reply in Telegram
- **Outline**:

```
# Host Your Python Telegram Bot
Deploy the Python Telegram echo bot to a Backend Capsule and see it reply in Telegram.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your Python Telegram bot
1. **Start a Backend Capsule** — step detail from platform UI labels
2. **Choose the capsule type, Team, and Space** — step detail from platform UI labels
3. **Choose the plan** — step detail from platform UI labels
4. **Connect the repository** — step detail from platform UI labels
5. **Set the run command** — step detail from platform UI labels
6. **Create the capsule** — step detail from platform UI labels
7. **Add the environment variables** — step detail from platform UI labels
8. **Restart the capsule** — step detail from platform UI labels
9. **Set the webhook** — step detail from platform UI labels
10. **Chat with the bot** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/backend/python/python-telegram-bot.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
