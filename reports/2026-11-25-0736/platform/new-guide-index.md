# New guide report: Platform Guides — Accounts, Billing, Teams & Domains

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/index.md`
- **Doc type**: Reference hub
- **Slug**: `/platform`
- **Feature**: Platform Guides — Accounts, Billing, Teams & Domains
- **Goal**: Expect every link on the page to open an existing page
- **Guide status**: missing (no file at `docs/platform/index.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### platform-index-ng-1

- **ID**: platform-index-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/index.md` for Platform Guides — Accounts, Billing, Teams & Domains.
- **Problem**: `docs/platform/index.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect every link on the page to open an existing page
- **Change**: Create `docs/platform/index.md` as a reference hub with slug `/platform`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/index.md`
- **Proposed slug**: `/platform`
- **Goal**: Expect every link on the page to open an existing page
- **Outline**:

```
# Platform Guides — Accounts, Billing, Teams & Domains
Platform Guides — Accounts, Billing, Teams & Domains index and links to child guides.

## Overview
Slug `/platform`; group links: Account, Billing, Spaces, Teams, Capsules, Security, Regions.
Only link to pages that exist; note gaps explicitly in the table.
Pointer to `/docs/platform/what-is-code-capsules` for newcomers.

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/platform/index.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
