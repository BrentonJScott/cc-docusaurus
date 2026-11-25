# New guide report: Log Out With the CLI (logout command)

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/cli/readme/commands/logout.md`
- **Doc type**: How-to guide
- **Slug**: `/cli/readme/commands/logout`
- **Feature**: Log Out With the CLI (logout command)
- **Goal**: Expect whoami to show no session after logout
- **Guide status**: missing (no file at `docs/cli/readme/commands/logout.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Check current session with whoami
2. Run codecapsules logout
3. Confirm no active session

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### logout-ng-1

- **ID**: logout-ng-1
- **Type**: New guide
- **Title**: Add `docs/cli/readme/commands/logout.md` for Log Out With the CLI (logout command).
- **Problem**: `docs/cli/readme/commands/logout.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect whoami to show no session after logout
- **Change**: Create `docs/cli/readme/commands/logout.md` as a how-to guide with slug `/cli/readme/commands/logout`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/cli/readme/commands/logout.md`
- **Proposed slug**: `/cli/readme/commands/logout`
- **Goal**: Expect whoami to show no session after logout
- **Outline**:

```
# Log Out From Your Terminal
Expect whoami to show no session after logout

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Log out
1. **Check current session with whoami** — step detail from platform UI labels
2. **Run codecapsules logout** — step detail from platform UI labels
3. **Confirm no active session** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/cli/readme/commands/logout.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
