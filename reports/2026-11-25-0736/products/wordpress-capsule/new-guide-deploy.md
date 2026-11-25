# New guide report: Deploy a WordPress Site

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/wordpress-capsule/deploy.md`
- **Doc type**: How-to guide
- **Slug**: `/products/wordpress-capsule/deploy`
- **Feature**: Deploy a WordPress Site
- **Goal**: Expect to Deploy a WordPress site on Code Capsules with the managed WordPress Capsule. Set up hosting, database, and storage in minutes
- **Guide status**: missing (no file at `docs/products/wordpress-capsule/deploy.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Space and start capsule wizard
2. Choose capsule type, Team, and Space
3. Complete wizard and create the Capsule
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/wordpress-capsule/deploy.md` for Deploy a WordPress Site.
- **Problem**: `docs/products/wordpress-capsule/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy a WordPress site on Code Capsules with the managed WordPress Capsule. Set up hosting, database, and storage in minutes
- **Change**: Create `docs/products/wordpress-capsule/deploy.md` as a how-to guide with slug `/products/wordpress-capsule/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/wordpress-capsule/deploy.md`
- **Proposed slug**: `/products/wordpress-capsule/deploy`
- **Goal**: Expect to Deploy a WordPress site on Code Capsules with the managed WordPress Capsule. Set up hosting, database, and storage in minutes
- **Outline**:

```
# Deploy Your WordPress Site
Expect to Deploy a WordPress site on Code Capsules with the managed WordPress Capsule. Set up hosting, database, and storage in minutes

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your capsule
1. **Open Space and start capsule wizard** — step detail from platform UI labels
2. **Choose capsule type, Team, and Space** — step detail from platform UI labels
3. **Complete wizard and create the Capsule** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/wordpress-capsule/deploy.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
