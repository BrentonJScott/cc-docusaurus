# New guide report: How Persistent Storage State Works

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/storage-capsule/how-state-works.md`
- **Doc type**: Concept
- **Slug**: `/products/storage-capsule/how-state-works`
- **Feature**: How Persistent Storage State Works
- **Goal**: Expect to know which data persists across redeploys
- **Guide status**: missing (no file at `docs/products/storage-capsule/how-state-works.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the storage Capsule
2. Review persistence behavior
3. Understand redeploy impact

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### how-state-works-ng-1

- **ID**: how-state-works-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/storage-capsule/how-state-works.md` for How Persistent Storage State Works.
- **Problem**: `docs/products/storage-capsule/how-state-works.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to know which data persists across redeploys
- **Change**: Create `docs/products/storage-capsule/how-state-works.md` as a concept with slug `/products/storage-capsule/how-state-works`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/storage-capsule/how-state-works.md`
- **Proposed slug**: `/products/storage-capsule/how-state-works`
- **Goal**: Expect to know which data persists across redeploys
- **Outline**:

```
# Persistent storage on Capsules
Explain the feature and what readers should understand before enterprise availability or deeper guides.

## Overview
Purpose and key points aligned to the documented goal.

## Why it matters
Context for when to use this capability.

## Related
Links to sibling docs under `/docs/...`.
```

- **Done when**: The guide file exists at `docs/products/storage-capsule/how-state-works.md`, passes the format check for a concept, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
