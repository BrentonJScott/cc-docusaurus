# Walkthrough report (missing guide): Deploy a Go Telegram Bot from GitHub

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/backend/go/go-telegram-bot.md` does not exist on disk)
- **Feature**: Deploy a Go Telegram Bot from GitHub
- **Goal**: Expect to Deploy a Go Telegram bot to Code Capsules straight from GitHub. Connect the Telegram Bot API, build with Docker, and run it in production
- **Target**: https://test-platform.codecapsules.io
- **Format check**: not run (no guide)
- **Manifest goals reached**: not attempted (no guide to follow)

## Exploration

Headless Playwright sign-in at `https://test-platform.codecapsules.io` (via **Log in** from `/auth/registration`; direct `/auth/login` loads the registration view). Credential values from env vars only; not recorded. UI labels confirmed against existing published guides and the angular walkthrough in this run. No step-by-step walkthrough was run because no guide file exists on disk.

## Actions taken

None. WALKTHROUGH.md requires reading the guide before browser actions; there is no guide file for this feature.

## Guide alignment

Not applicable.

## Mismatches / issues

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/backend/go/go-telegram-bot.md` in the docs repo.

## Tickets

### go-telegram-bot-wt-1

- **ID**: go-telegram-bot-wt-1
- **Type**: New guide
- **Title**: Create `docs/backend/go/go-telegram-bot.md` for Deploy a Go Telegram Bot from GitHub.
- **Problem**: The feature is listed with goal: Expect to Deploy a Go Telegram bot to Code Capsules straight from GitHub. Connect the Telegram Bot API, build with Docker, and run it in production. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/backend/go/go-telegram-bot.md`
  - **Proposed slug**: `/backend/go/go-telegram-bot`
  - **Doc type**: How-to
  - **Goal**: Expect to Deploy a Go Telegram bot to Code Capsules straight from GitHub. Connect the Telegram Bot API, build with Docker, and run it in production
  - **Outline**:
  - Prerequisites: Telegram bot token, demo/fork repo with Dockerfile.
  - Backend or Docker capsule; env vars for bot token.
  - Verify bot responds in Telegram.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
