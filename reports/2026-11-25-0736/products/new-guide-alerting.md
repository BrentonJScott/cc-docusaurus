# New guide report: Set Up Deployment Notifications

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/alerting.md`
- **Doc type**: How-to guide
- **Slug**: `/products/alerting`
- **Feature**: Set Up Deployment Notifications
- **Goal**: Expect to see notification preferences saved
- **Guide status**: missing (no file at `docs/products/alerting.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open notification settings
2. Configure deployment alerts
3. Save preferences

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### alerting-ng-1

- **ID**: alerting-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/alerting.md` for Set Up Deployment Notifications.
- **Problem**: `docs/products/alerting.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see notification preferences saved
- **Change**: Create `docs/products/alerting.md` as a how-to guide with slug `/products/alerting`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/alerting.md`
- **Proposed slug**: `/products/alerting`
- **Goal**: Expect to see notification preferences saved
- **Outline**:

```
# Set Up Notification Preferences
Expect to see notification preferences saved

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Set up alerts
1. **Open notification settings** — step detail from platform UI labels
2. **Configure deployment alerts** — step detail from platform UI labels
3. **Save preferences** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/alerting.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
