# New guide report: Python Application Hosting Reference

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/python/index.md`
- **Doc type**: Reference hub
- **Slug**: `/backend/python`
- **Feature**: Python Application Hosting Reference
- **Goal**: Expect every link on the page to open an existing page
- **Guide status**: missing (no file at `docs/backend/python/index.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### python-index-ng-1

- **ID**: python-index-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/python/index.md` for Python Application Hosting Reference.
- **Problem**: `docs/backend/python/index.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect every link on the page to open an existing page
- **Change**: Create `docs/backend/python/index.md` as a reference hub with slug `/backend/python`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/python/index.md`
- **Proposed slug**: `/backend/python`
- **Goal**: Expect every link on the page to open an existing page
- **Outline**:

```
# Python Application Hosting Reference
Python Application Hosting Reference index and links to child guides.

## Overview
Slug `/backend/python`; table for Django, Flask, generic Python, and bot guides.
Note Persistent Storage binding for Django.
DocCardList to database binding guides where relevant.

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/backend/python/index.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
