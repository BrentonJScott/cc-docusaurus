# Blocked — test platform login (walkthrough runs)

- **Run:** 2026-11-24T10:35:00+02:00
- **Environment:** https://test-platform.codecapsules.io

## What happened

1. Navigated to `/auth/login`; the page loads (title **Code Capsules**) with email and password fields.
2. No verified test-platform credentials are available in this environment (`TEST_USER_EMAIL`, `CC_EMAIL`, and similar are unset; no `.env.local`).
3. All 39 manifest how-to guides failed the format check in this run, so walkthroughs were skipped per `formats/FORMAT.MD` before attempting dashboard flows.

## Impact

Dashboard walkthroughs (Quick Start, capsule wizard, billing, teams, database capsules) remain blocked until guides pass format **and** automation receives a verified account with GitHub connected.

## Suggested fix (ops)

Provide automation-safe test-platform credentials via team secrets for the cron environment. Do not store credentials in the docs repo or in report files.