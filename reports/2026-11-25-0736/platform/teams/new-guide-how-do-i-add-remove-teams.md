# New guide report: Add and Remove Teams

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/teams/how-do-i-add-remove-teams.md`
- **Doc type**: How-to guide
- **Slug**: `/platform/teams/how-do-i-add-remove-teams`
- **Feature**: Add and Remove Teams
- **Goal**: Expect to see Team is created and later removed
- **Guide status**: missing (no file at `docs/platform/teams/how-do-i-add-remove-teams.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### how-do-i-add-remove-teams-ng-1

- **ID**: how-do-i-add-remove-teams-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/teams/how-do-i-add-remove-teams.md` for Add and Remove Teams.
- **Problem**: `docs/platform/teams/how-do-i-add-remove-teams.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see Team is created and later removed
- **Change**: Create `docs/platform/teams/how-do-i-add-remove-teams.md` as a how-to guide with slug `/platform/teams/how-do-i-add-remove-teams`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/teams/how-do-i-add-remove-teams.md`
- **Proposed slug**: `/platform/teams/how-do-i-add-remove-teams`
- **Goal**: Expect to see Team is created and later removed
- **Outline**:

```
# Add and Remove Teams
Expect to see Team is created and later removed

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Add and Remove Teams
1. **Sign in to the test platform** — step detail from platform UI labels
2. **Open the account or Space area described in the guide** — step detail from platform UI labels
3. **Follow each step using UI labels from the platform** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/platform/teams/how-do-i-add-remove-teams.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
