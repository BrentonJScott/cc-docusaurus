# New guide report: Deploy a Persistent Storage

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/storage-capsule/deploy.md`
- **Doc type**: How-to guide
- **Slug**: `/products/storage-capsule/deploy`
- **Feature**: Deploy a Persistent Storage
- **Goal**: Expect the reader to understand: You need persistent storage for your application, but you don't want a full-blown database
- **Guide status**: missing (no file at `docs/products/storage-capsule/deploy.md`)
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
- **Title**: Add `docs/products/storage-capsule/deploy.md` for Deploy a Persistent Storage.
- **Problem**: `docs/products/storage-capsule/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: You need persistent storage for your application, but you don't want a full-blown database
- **Change**: Create `docs/products/storage-capsule/deploy.md` as a how-to guide with slug `/products/storage-capsule/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/storage-capsule/deploy.md`
- **Proposed slug**: `/products/storage-capsule/deploy`
- **Goal**: Expect the reader to understand: You need persistent storage for your application, but you don't want a full-blown database
- **Outline**:

```
# Persistent Storage Capsules
Expect the reader to understand: You need persistent storage for your application, but you don't want a full-blown database

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

- **Done when**: The guide file exists at `docs/products/storage-capsule/deploy.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
