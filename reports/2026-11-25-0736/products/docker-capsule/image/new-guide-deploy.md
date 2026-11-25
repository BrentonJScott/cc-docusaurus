# New guide report: Deploy an Existing Docker Image

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/docker-capsule/image/deploy.md`
- **Doc type**: How-to guide
- **Slug**: `/products/docker-capsule/image/deploy`
- **Feature**: Deploy an Existing Docker Image
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/products/docker-capsule/image/deploy.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the capsule wizard
2. Choose Docker Capsule
3. Choose plan
4. Select container image source
5. Name the capsule
6. Pull and deploy
7. Verify and manage updates

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/docker-capsule/image/deploy.md` for Deploy an Existing Docker Image.
- **Problem**: `docs/products/docker-capsule/image/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/products/docker-capsule/image/deploy.md` as a how-to guide with slug `/products/docker-capsule/image/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/docker-capsule/image/deploy.md`
- **Proposed slug**: `/products/docker-capsule/image/deploy`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Deploy Your Existing Container Image
Deploy a public container image to a Docker Capsule. When you finish, Pull & Deploy has started the first image import on the Deploy tab.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your Docker image
1. **Open the capsule wizard** — step detail from platform UI labels
2. **Choose Docker Capsule** — step detail from platform UI labels
3. **Choose plan** — step detail from platform UI labels
4. **Select container image source** — step detail from platform UI labels
5. **Name the capsule** — step detail from platform UI labels
6. **Pull and deploy** — step detail from platform UI labels
7. **Verify and manage updates** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/docker-capsule/image/deploy.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
