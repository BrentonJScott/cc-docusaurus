# New guide report: Enterprise PaaS on Your Own Cloud

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/enterprise/index.md`
- **Doc type**: Reference
- **Slug**: `/enterprise/index`
- **Feature**: Enterprise PaaS on Your Own Cloud
- **Goal**: Expect every link on the page to open an existing page
- **Guide status**: missing (no file at `docs/enterprise/index.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### enterprise-index-ng-1

- **ID**: enterprise-index-ng-1
- **Type**: New guide
- **Title**: Add `docs/enterprise/index.md` for Enterprise PaaS on Your Own Cloud.
- **Problem**: `docs/enterprise/index.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect every link on the page to open an existing page
- **Change**: Create `docs/enterprise/index.md` as a reference with slug `/enterprise/index`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/enterprise/index.md`
- **Proposed slug**: `/enterprise/index`
- **Goal**: Expect every link on the page to open an existing page
- **Outline**:

```
# The Platform, on Your Cloud
Enterprise PaaS on Your Own Cloud index and links to child guides.

## Overview
Brief purpose and link table to child guides (each `/docs/...` path).

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/enterprise/index.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
