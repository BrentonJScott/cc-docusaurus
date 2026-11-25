# New guide report: Supported Frontend Frameworks and Runtimes

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/frontend-capsule/supported-runtimes.md`
- **Doc type**: Reference
- **Slug**: `/products/frontend-capsule/supported-runtimes`
- **Feature**: Supported Frontend Frameworks and Runtimes
- **Goal**: Expect to see the build Node.js version, supported frameworks and package managers
- **Guide status**: missing (no file at `docs/products/frontend-capsule/supported-runtimes.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### supported-runtimes-ng-1

- **ID**: supported-runtimes-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/frontend-capsule/supported-runtimes.md` for Supported Frontend Frameworks and Runtimes.
- **Problem**: `docs/products/frontend-capsule/supported-runtimes.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the build Node.js version, supported frameworks and package managers
- **Change**: Create `docs/products/frontend-capsule/supported-runtimes.md` as a reference with slug `/products/frontend-capsule/supported-runtimes`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/frontend-capsule/supported-runtimes.md`
- **Proposed slug**: `/products/frontend-capsule/supported-runtimes`
- **Goal**: Expect to see the build Node.js version, supported frameworks and package managers
- **Outline**:

```
# Supported Frontend Frameworks and Runtimes
Supported Frontend Frameworks and Runtimes index and links to child guides.

## Overview
Table of Node versions, npm/yarn/pnpm, framework detection notes.
How to set Node version in Configure/build settings.

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/products/frontend-capsule/supported-runtimes.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
