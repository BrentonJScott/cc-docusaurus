# Blocked — test platform login (walkthrough and exploratory runs)

- **Run:** 2026-11-24T08:21:00Z
- **Environment:** https://test-platform.codecapsules.io

## What happened

1. No verified test-platform credentials were available in this automation environment (`TEST_USER_EMAIL` and similar env vars unset).
2. The login page (`/auth/login`) is reachable; signup still routes to email verification (`/auth/verify-account`) without inbox access, matching prior cron runs.
3. Without a verified session, dashboard walkthroughs (Quick Start, capsule wizard, billing, teams, and data capsules) could not be attempted for guides that pass the format gate.

## Impact

All how-to guides in this run failed the format check, so walkthroughs were already skipped per `formats/FORMAT.MD`. This blocker still applies to any future rerun once guides pass format: exploratory goals for Vue, Next.js, Static HTML, and Svelte need a verified account with GitHub connected.

## Suggested fix (ops)

Provide automation-safe test-platform credentials (verified account with GitHub already connected) via team secrets for the cron environment, documented in the automation setup only—not in reports or commits.