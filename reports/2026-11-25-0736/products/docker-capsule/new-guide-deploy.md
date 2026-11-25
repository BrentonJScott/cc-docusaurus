# New guide report: Deploy a Docker Capsule

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/docker-capsule/deploy.md`
- **Doc type**: Explanation
- **Slug**: `/products/docker-capsule/deploy`
- **Feature**: Deploy a Docker Capsule
- **Goal**: Expect the reader to understand: Choose Git or an existing image to deploy a Docker Capsule
- **Guide status**: missing (no file at `docs/products/docker-capsule/deploy.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Space and start capsule wizard
2. Complete wizard through documented goal

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/docker-capsule/deploy.md` for Deploy a Docker Capsule.
- **Problem**: `docs/products/docker-capsule/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: Choose Git or an existing image to deploy a Docker Capsule
- **Change**: Create `docs/products/docker-capsule/deploy.md` as a explanation with slug `/products/docker-capsule/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/docker-capsule/deploy.md`
- **Proposed slug**: `/products/docker-capsule/deploy`
- **Goal**: Expect the reader to understand: Choose Git or an existing image to deploy a Docker Capsule
- **Outline**:

```
# Deploy a Docker Capsule
Choose Git or an existing image to deploy a Docker Capsule.

## What this covers
Concept sections aligned with goal: Expect the reader to understand: Choose Git or an existing image to deploy a Docker Capsule

## Related
DocCardList to how-to guides.
```

- **Done when**: The guide file exists at `docs/products/docker-capsule/deploy.md`, passes the format check for a explanation, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
