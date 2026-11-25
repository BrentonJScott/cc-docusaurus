# New guide report: Python Sandbox SDK Methods & Types

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/sandbox/python/api-reference.md`
- **Doc type**: Reference
- **Slug**: `/sandbox/python/api-reference`
- **Feature**: Python Sandbox SDK Methods & Types
- **Goal**: Expect to see each method, type and exception
- **Guide status**: missing (no file at `docs/sandbox/python/api-reference.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the SDK reference
2. Review methods and types
3. Confirm documented API surface

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### api-reference-ng-1

- **ID**: api-reference-ng-1
- **Type**: New guide
- **Title**: Add `docs/sandbox/python/api-reference.md` for Python Sandbox SDK Methods & Types.
- **Problem**: `docs/sandbox/python/api-reference.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see each method, type and exception
- **Change**: Create `docs/sandbox/python/api-reference.md` as a reference with slug `/sandbox/python/api-reference`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/sandbox/python/api-reference.md`
- **Proposed slug**: `/sandbox/python/api-reference`
- **Goal**: Expect to see each method, type and exception
- **Outline**:

```
# Python API Reference
Python Sandbox SDK Methods & Types index and links to child guides.

## Overview
Brief purpose and link table to child guides (each `/docs/...` path).

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/sandbox/python/api-reference.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
