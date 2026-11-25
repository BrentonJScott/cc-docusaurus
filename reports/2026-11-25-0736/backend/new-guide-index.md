# New guide report: Backend Hosting Reference

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/index.md`
- **Doc type**: Reference hub
- **Slug**: `/backend`
- **Feature**: Backend Hosting Reference
- **Goal**: Expect every link on the page to open an existing page
- **Guide status**: missing (no file at `docs/backend/index.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### backend-index-ng-1

- **ID**: backend-index-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/index.md` for Backend Hosting Reference.
- **Problem**: `docs/backend/index.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect every link on the page to open an existing page
- **Change**: Create `docs/backend/index.md` as a reference hub with slug `/backend`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/index.md`
- **Proposed slug**: `/backend`
- **Goal**: Expect every link on the page to open an existing page
- **Outline**:

```
# Backend Hosting Reference
Backend Hosting Reference index and links to child guides.

## Overview
Slug `/backend`; hub for Python, Node.js, Go, Java, and Docker framework guides.
Tables by language with links only to guides that exist (or mark unpublished).
DocCardList to `/docs/products/backend-capsule` and shared prerequisites.

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/backend/index.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
