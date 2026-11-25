# New guide report: Add a Procfile to a Backend Capsule

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/backend-capsule/add-procfile.md`
- **Doc type**: How-to guide
- **Slug**: `/products/backend-capsule/add-procfile`
- **Feature**: Add a Procfile to a Backend Capsule
- **Goal**: Expect to see the capsule start with the process from the Procfile
- **Guide status**: missing (no file at `docs/products/backend-capsule/add-procfile.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Create the Procfile
2. Define process types
3. Commit and deploy
4. Confirm in the dashboard

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### add-procfile-ng-1

- **ID**: add-procfile-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/backend-capsule/add-procfile.md` for Add a Procfile to a Backend Capsule.
- **Problem**: `docs/products/backend-capsule/add-procfile.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the capsule start with the process from the Procfile
- **Change**: Create `docs/products/backend-capsule/add-procfile.md` as a how-to guide with slug `/products/backend-capsule/add-procfile`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/backend-capsule/add-procfile.md`
- **Proposed slug**: `/products/backend-capsule/add-procfile`
- **Goal**: Expect to see the capsule start with the process from the Procfile
- **Outline**:

```
# Add a Procfile to a Backend Application
How to add a Procfile to a Backend Capsule on Code Capsules to define which processes run and how they start. Optional, but useful for custom commands.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Add your Procfile
1. **Create the Procfile** — step detail from platform UI labels
2. **Define process types** — step detail from platform UI labels
3. **Commit and deploy** — step detail from platform UI labels
4. **Confirm in the dashboard** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/backend-capsule/add-procfile.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
