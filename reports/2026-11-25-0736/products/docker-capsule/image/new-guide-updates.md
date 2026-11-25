# New guide report: Update a Deployed Docker Image

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/docker-capsule/image/updates.md`
- **Doc type**: How-to guide
- **Slug**: `/products/docker-capsule/image/updates`
- **Feature**: Update a Deployed Docker Image
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Guide status**: missing (no file at `docs/products/docker-capsule/image/updates.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Pull a new version
2. Change the image reference
3. Read the deployed digest
4. Roll back if needed

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### updates-ng-1

- **ID**: updates-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/docker-capsule/image/updates.md` for Update a Deployed Docker Image.
- **Problem**: `docs/products/docker-capsule/image/updates.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the guide's described outcome on test-platform.codecapsules.io
- **Change**: Create `docs/products/docker-capsule/image/updates.md` as a how-to guide with slug `/products/docker-capsule/image/updates`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/docker-capsule/image/updates.md`
- **Proposed slug**: `/products/docker-capsule/image/updates`
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Outline**:

```
# Keep Your Container Image Up to Date
Keep an image-based Docker Capsule up to date on Code Capsules: pull and deploy a newer tag, pin versions, change the image, and fix failed image deploys.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## How image deploys work
1. **Pull a new version** — step detail from platform UI labels
2. **Change the image reference** — step detail from platform UI labels
3. **Read the deployed digest** — step detail from platform UI labels
4. **Roll back if needed** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/docker-capsule/image/updates.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
