# New guide report: Full-Stack Application Hosting

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/full-stack/index.md`
- **Doc type**: Reference
- **Slug**: `/full-stack/index`
- **Feature**: Full-Stack Application Hosting
- **Goal**: Expect every link on the page to open an existing page
- **Guide status**: missing (no file at `docs/full-stack/index.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### full-stack-index-ng-1

- **ID**: full-stack-index-ng-1
- **Type**: New guide
- **Title**: Add `docs/full-stack/index.md` for Full-Stack Application Hosting.
- **Problem**: `docs/full-stack/index.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect every link on the page to open an existing page
- **Change**: Create `docs/full-stack/index.md` as a reference with slug `/full-stack/index`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/full-stack/index.md`
- **Proposed slug**: `/full-stack/index`
- **Goal**: Expect every link on the page to open an existing page
- **Outline**:

```
# Full-stack hosting
Full-Stack Application Hosting index and links to child guides.

## Overview
Brief purpose and link table to child guides (each `/docs/...` path).

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/full-stack/index.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
