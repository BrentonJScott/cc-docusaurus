# New guide report: Check Your CLI Session (whoami command)

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/cli/readme/commands/whoami.md`
- **Doc type**: How-to guide
- **Slug**: `/cli/readme/commands/whoami`
- **Feature**: Check Your CLI Session (whoami command)
- **Goal**: Expect whoami to print the logged-in account
- **Guide status**: missing (no file at `docs/cli/readme/commands/whoami.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Install the CLI
2. Run codecapsules whoami
3. Review printed account

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### whoami-ng-1

- **ID**: whoami-ng-1
- **Type**: New guide
- **Title**: Add `docs/cli/readme/commands/whoami.md` for Check Your CLI Session (whoami command).
- **Problem**: `docs/cli/readme/commands/whoami.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect whoami to print the logged-in account
- **Change**: Create `docs/cli/readme/commands/whoami.md` as a how-to guide with slug `/cli/readme/commands/whoami`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/cli/readme/commands/whoami.md`
- **Proposed slug**: `/cli/readme/commands/whoami`
- **Goal**: Expect whoami to print the logged-in account
- **Outline**:

```
# See Who You Are Logged In As
Expect whoami to print the logged-in account

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Check your session
1. **Install the CLI** — step detail from platform UI labels
2. **Run codecapsules whoami** — step detail from platform UI labels
3. **Review printed account** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/cli/readme/commands/whoami.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
