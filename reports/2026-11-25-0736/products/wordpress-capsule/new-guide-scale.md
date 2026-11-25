# New guide report: Scale a WordPress Site

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/wordpress-capsule/scale.md`
- **Doc type**: How-to guide
- **Slug**: `/products/wordpress-capsule/scale`
- **Feature**: Scale a WordPress Site
- **Goal**: Expect to see new resources saved in the scale tab
- **Guide status**: missing (no file at `docs/products/wordpress-capsule/scale.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the Capsule
2. Open Scale
3. Save new resources

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### scale-ng-1

- **ID**: scale-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/wordpress-capsule/scale.md` for Scale a WordPress Site.
- **Problem**: `docs/products/wordpress-capsule/scale.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see new resources saved in the scale tab
- **Change**: Create `docs/products/wordpress-capsule/scale.md` as a how-to guide with slug `/products/wordpress-capsule/scale`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/wordpress-capsule/scale.md`
- **Proposed slug**: `/products/wordpress-capsule/scale`
- **Goal**: Expect to see new resources saved in the scale tab
- **Outline**:

```
# Scale your Scale
Expect to see new resources saved in the scale tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Scale resources
1. **Open the Capsule** — step detail from platform UI labels
2. **Open Scale** — step detail from platform UI labels
3. **Save new resources** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/wordpress-capsule/scale.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
