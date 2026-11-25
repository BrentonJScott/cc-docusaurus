# New guide report: Log In With the CLI (login command)

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/cli/readme/commands/login.md`
- **Doc type**: How-to guide
- **Slug**: `/cli/readme/commands/login`
- **Feature**: Log In With the CLI (login command)
- **Goal**: Expect login to succeed
- **Guide status**: missing (no file at `docs/cli/readme/commands/login.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Install the CLI
2. Run codecapsules login
3. Confirm session with whoami

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### login-ng-1

- **ID**: login-ng-1
- **Type**: New guide
- **Title**: Add `docs/cli/readme/commands/login.md` for Log In With the CLI (login command).
- **Problem**: `docs/cli/readme/commands/login.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect login to succeed
- **Change**: Create `docs/cli/readme/commands/login.md` as a how-to guide with slug `/cli/readme/commands/login`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/cli/readme/commands/login.md`
- **Proposed slug**: `/cli/readme/commands/login`
- **Goal**: Expect login to succeed
- **Outline**:

```
# Log In From Your Terminal
Expect login to succeed

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Log in with the CLI
1. **Install the CLI** — step detail from platform UI labels
2. **Run codecapsules login** — step detail from platform UI labels
3. **Confirm session with whoami** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/cli/readme/commands/login.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
