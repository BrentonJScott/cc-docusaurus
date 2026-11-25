# New guide report: Deploy a Go Telegram Bot from GitHub

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/go/go-telegram-bot.md`
- **Doc type**: How-to guide
- **Slug**: `/backend/go/go-telegram-bot`
- **Feature**: Deploy a Go Telegram Bot from GitHub
- **Goal**: Expect to Deploy a Go Telegram bot to Code Capsules straight from GitHub. Connect the Telegram Bot API, build with Docker, and run it in production
- **Guide status**: missing (no file at `docs/backend/go/go-telegram-bot.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Start a Backend Capsule
2. Choose the capsule type, Team, and Space
3. Choose the plan
4. Connect the repository
5. Set the run command
6. Create the capsule

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### go-telegram-bot-ng-1

- **ID**: go-telegram-bot-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/go/go-telegram-bot.md` for Deploy a Go Telegram Bot from GitHub.
- **Problem**: `docs/backend/go/go-telegram-bot.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy a Go Telegram bot to Code Capsules straight from GitHub. Connect the Telegram Bot API, build with Docker, and run it in production
- **Change**: Create `docs/backend/go/go-telegram-bot.md` as a how-to guide with slug `/backend/go/go-telegram-bot`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/go/go-telegram-bot.md`
- **Proposed slug**: `/backend/go/go-telegram-bot`
- **Goal**: Expect to Deploy a Go Telegram bot to Code Capsules straight from GitHub. Connect the Telegram Bot API, build with Docker, and run it in production
- **Outline**:

```
# Deploy a Go Telegram Bot from GitHub
Expect to Deploy a Go Telegram bot to Code Capsules straight from GitHub. Connect the Telegram Bot API, build with Docker, and run it in production

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the task
1. **Start a Backend Capsule** — step detail from platform UI labels
2. **Choose the capsule type, Team, and Space** — step detail from platform UI labels
3. **Choose the plan** — step detail from platform UI labels
4. **Connect the repository** — step detail from platform UI labels
5. **Set the run command** — step detail from platform UI labels
6. **Create the capsule** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/backend/go/go-telegram-bot.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
