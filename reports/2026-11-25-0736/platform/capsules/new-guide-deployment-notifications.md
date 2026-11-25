# New guide report: Set Up Deployment Notifications

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/capsules/deployment-notifications.md`
- **Doc type**: How-to guide
- **Slug**: `/platform/capsules/deployment-notifications`
- **Feature**: Set Up Deployment Notifications
- **Goal**: Expect to see notification preferences saved
- **Guide status**: missing (no file at `docs/platform/capsules/deployment-notifications.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### deployment-notifications-ng-1

- **ID**: deployment-notifications-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/capsules/deployment-notifications.md` for Set Up Deployment Notifications.
- **Problem**: `docs/platform/capsules/deployment-notifications.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see notification preferences saved
- **Change**: Create `docs/platform/capsules/deployment-notifications.md` as a how-to guide with slug `/platform/capsules/deployment-notifications`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/capsules/deployment-notifications.md`
- **Proposed slug**: `/platform/capsules/deployment-notifications`
- **Goal**: Expect to see notification preferences saved
- **Outline**:

```
# Set Up Deployment Notifications
Expect to see notification preferences saved

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Set Up Deployment Notifications
1. **Sign in to the test platform** — step detail from platform UI labels
2. **Open the account or Space area described in the guide** — step detail from platform UI labels
3. **Follow each step using UI labels from the platform** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/platform/capsules/deployment-notifications.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
