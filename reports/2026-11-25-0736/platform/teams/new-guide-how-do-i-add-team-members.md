# New guide report: Add Team Members to a Team

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/teams/how-do-i-add-team-members.md`
- **Doc type**: How-to guide
- **Slug**: `/platform/teams/how-do-i-add-team-members`
- **Feature**: Add Team Members to a Team
- **Goal**: Expect to see they appear in the Team member list
- **Guide status**: missing (no file at `docs/platform/teams/how-do-i-add-team-members.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### how-do-i-add-team-members-ng-1

- **ID**: how-do-i-add-team-members-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/teams/how-do-i-add-team-members.md` for Add Team Members to a Team.
- **Problem**: `docs/platform/teams/how-do-i-add-team-members.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see they appear in the Team member list
- **Change**: Create `docs/platform/teams/how-do-i-add-team-members.md` as a how-to guide with slug `/platform/teams/how-do-i-add-team-members`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/teams/how-do-i-add-team-members.md`
- **Proposed slug**: `/platform/teams/how-do-i-add-team-members`
- **Goal**: Expect to see they appear in the Team member list
- **Outline**:

```
# Add Team Members to a Team
Expect to see they appear in the Team member list

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Add Team Members to a Team
1. **Sign in to the test platform** — step detail from platform UI labels
2. **Open the account or Space area described in the guide** — step detail from platform UI labels
3. **Follow each step using UI labels from the platform** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/platform/teams/how-do-i-add-team-members.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
