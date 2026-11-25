# New guide report: Back Up a WordPress Site

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/wordpress-capsule/backups.md`
- **Doc type**: How-to guide
- **Slug**: `/products/wordpress-capsule/backups`
- **Feature**: Back Up a WordPress Site
- **Goal**: Expect to see a completed backup listed under backups
- **Guide status**: missing (no file at `docs/products/wordpress-capsule/backups.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Backups
2. Start a backup
3. Confirm completion

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### backups-ng-1

- **ID**: backups-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/wordpress-capsule/backups.md` for Back Up a WordPress Site.
- **Problem**: `docs/products/wordpress-capsule/backups.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see a completed backup listed under backups
- **Change**: Create `docs/products/wordpress-capsule/backups.md` as a how-to guide with slug `/products/wordpress-capsule/backups`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/wordpress-capsule/backups.md`
- **Proposed slug**: `/products/wordpress-capsule/backups`
- **Goal**: Expect to see a completed backup listed under backups
- **Outline**:

```
# Back up your Backups
Expect to see a completed backup listed under backups

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Run a backup
1. **Open Backups** — step detail from platform UI labels
2. **Start a backup** — step detail from platform UI labels
3. **Confirm completion** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/wordpress-capsule/backups.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
