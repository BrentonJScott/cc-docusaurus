# New guide report: Host a Go AI Telegram Bot

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/tutorials/create-and-host-go-ai-telegram-bot.md`
- **Doc type**: Tutorial
- **Slug**: `/tutorials/create-and-host-go-ai-telegram-bot`
- **Feature**: Host a Go AI Telegram Bot
- **Goal**: Expect the reader to understand: Build a Go Telegram bot that replies with AI and a custom personality, then deploy it to production on Code Capsules. Step-by-step tutorial
- **Guide status**: missing (no file at `docs/tutorials/create-and-host-go-ai-telegram-bot.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Prepare prerequisites and repository
2. Follow the tutorial build steps
3. Deploy to Code Capsules
4. Verify the tutorial outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### create-and-host-go-ai-telegram-bot-ng-1

- **ID**: create-and-host-go-ai-telegram-bot-ng-1
- **Type**: New guide
- **Title**: Add `docs/tutorials/create-and-host-go-ai-telegram-bot.md` for Host a Go AI Telegram Bot.
- **Problem**: `docs/tutorials/create-and-host-go-ai-telegram-bot.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: Build a Go Telegram bot that replies with AI and a custom personality, then deploy it to production on Code Capsules. Step-by-step tutorial
- **Change**: Create `docs/tutorials/create-and-host-go-ai-telegram-bot.md` as a tutorial with slug `/tutorials/create-and-host-go-ai-telegram-bot`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/tutorials/create-and-host-go-ai-telegram-bot.md`
- **Proposed slug**: `/tutorials/create-and-host-go-ai-telegram-bot`
- **Goal**: Expect the reader to understand: Build a Go Telegram bot that replies with AI and a custom personality, then deploy it to production on Code Capsules. Step-by-step tutorial
- **Outline**:

```
# How to Create and Host a Go Telegram Bot on Code Capsules
Expect the reader to understand: Build a Go Telegram bot that replies with AI and a custom personality, then deploy it to production on Code Capsules. Step-by-step tutorial

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Build and deploy
1. **Prepare prerequisites and repository** — step detail from platform UI labels
2. **Follow the tutorial build steps** — step detail from platform UI labels
3. **Deploy to Code Capsules** — step detail from platform UI labels
4. **Verify the tutorial outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/tutorials/create-and-host-go-ai-telegram-bot.md`, passes the format check for a tutorial, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
