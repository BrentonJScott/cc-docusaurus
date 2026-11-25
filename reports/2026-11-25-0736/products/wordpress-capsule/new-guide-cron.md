# New guide report: Schedule WordPress Cron Jobs

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/wordpress-capsule/cron.md`
- **Doc type**: How-to guide
- **Slug**: `/products/wordpress-capsule/cron`
- **Feature**: Schedule WordPress Cron Jobs
- **Goal**: Expect the reader to understand: How WordPress scheduled tasks work on Code Capsules and how to configure reliable cron execution
- **Guide status**: missing (no file at `docs/products/wordpress-capsule/cron.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open WordPress Capsule cron settings
2. Review scheduled tasks
3. Confirm reliable execution

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### cron-ng-1

- **ID**: cron-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/wordpress-capsule/cron.md` for Schedule WordPress Cron Jobs.
- **Problem**: `docs/products/wordpress-capsule/cron.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: How WordPress scheduled tasks work on Code Capsules and how to configure reliable cron execution
- **Change**: Create `docs/products/wordpress-capsule/cron.md` as a how-to guide with slug `/products/wordpress-capsule/cron`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/wordpress-capsule/cron.md`
- **Proposed slug**: `/products/wordpress-capsule/cron`
- **Goal**: Expect the reader to understand: How WordPress scheduled tasks work on Code Capsules and how to configure reliable cron execution
- **Outline**:

```
# Schedule Your WordPress Cron Jobs
Expect the reader to understand: How WordPress scheduled tasks work on Code Capsules and how to configure reliable cron execution

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the guide
1. **Open WordPress Capsule cron settings** — step detail from platform UI labels
2. **Review scheduled tasks** — step detail from platform UI labels
3. **Confirm reliable execution** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/wordpress-capsule/cron.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
