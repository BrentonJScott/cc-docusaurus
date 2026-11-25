# New guide report: Docker Deployment Guides Reference

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/docker/index.md`
- **Doc type**: Reference
- **Slug**: `/backend/docker`
- **Feature**: Docker Deployment Guides Reference
- **Goal**: Expect every link on the page to open an existing page
- **Guide status**: missing (no file at `docs/backend/docker/index.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Space and start capsule wizard
2. Complete wizard through documented goal

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### index-ng-1

- **ID**: index-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/docker/index.md` for Docker Deployment Guides Reference.
- **Problem**: `docs/backend/docker/index.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect every link on the page to open an existing page
- **Change**: Create `docs/backend/docker/index.md` as a reference with slug `/backend/docker`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/docker/index.md`
- **Proposed slug**: `/backend/docker`
- **Goal**: Expect every link on the page to open an existing page
- **Outline**:

```
# Docker Deployment Guides
Lists the Docker Capsule deployment guides and the Docker Capsule product pages.

## Overview
Brief purpose and link table to child guides (each `/docs/...` path).

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/backend/docker/index.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
