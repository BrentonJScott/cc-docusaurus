# New guide report: Node.js Application Hosting Reference

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/node.js/index.md`
- **Doc type**: Reference hub
- **Slug**: `/backend/node.js`
- **Feature**: Node.js Application Hosting Reference
- **Goal**: Expect every link on the page to open an existing page
- **Guide status**: missing (no file at `docs/backend/node.js/index.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### node-js-index-ng-1

- **ID**: node-js-index-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/node.js/index.md` for Node.js Application Hosting Reference.
- **Problem**: `docs/backend/node.js/index.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect every link on the page to open an existing page
- **Change**: Create `docs/backend/node.js/index.md` as a reference hub with slug `/backend/node.js`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/node.js/index.md`
- **Proposed slug**: `/backend/node.js`
- **Goal**: Expect every link on the page to open an existing page
- **Outline**:

```
# Node.js Application Hosting Reference
Node.js Application Hosting Reference index and links to child guides.

## Overview
Slug `/backend/node.js`; list Express, Discord/Telegram/Slack bot guides.
Clarify Backend Capsule vs Docker for custom Dockerfiles.
Link to `/docs/products/backend-capsule` configuration and logs.

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/backend/node.js/index.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
