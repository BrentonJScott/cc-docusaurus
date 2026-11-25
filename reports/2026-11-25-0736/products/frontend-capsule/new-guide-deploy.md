# New guide report: Frontend Framework Deployment Guides

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/frontend-capsule/deploy.md`
- **Doc type**: Reference hub
- **Slug**: `/products/frontend-capsule/deploy`
- **Feature**: Frontend Framework Deployment Guides
- **Goal**: Expect the reader to understand: Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules
- **Guide status**: missing (no file at `docs/products/frontend-capsule/deploy.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/frontend-capsule/deploy.md` for Frontend Framework Deployment Guides.
- **Problem**: `docs/products/frontend-capsule/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules
- **Change**: Create `docs/products/frontend-capsule/deploy.md` as a reference hub with slug `/products/frontend-capsule/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/frontend-capsule/deploy.md`
- **Proposed slug**: `/products/frontend-capsule/deploy`
- **Goal**: Expect the reader to understand: Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules
- **Outline**:

```
# Frontend Framework Deployment Guides
Frontend Framework Deployment Guides index and links to child guides.

## Overview
Slug `/products/frontend-capsule/deploy`.
Overview of Static vs Container paths.
DocCardList to each framework guide under `/docs/frontend` and static/container deploy guides.

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/products/frontend-capsule/deploy.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
