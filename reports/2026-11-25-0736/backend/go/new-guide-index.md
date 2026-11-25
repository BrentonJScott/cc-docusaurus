# New guide report: Go Hosting Reference

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/go/index.md`
- **Doc type**: Reference hub
- **Slug**: `/backend/go`
- **Feature**: Go Hosting Reference
- **Goal**: Expect every link on the page to open an existing page
- **Guide status**: missing (no file at `docs/backend/go/index.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### go-index-ng-1

- **ID**: go-index-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/go/index.md` for Go Hosting Reference.
- **Problem**: `docs/backend/go/index.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect every link on the page to open an existing page
- **Change**: Create `docs/backend/go/index.md` as a reference hub with slug `/backend/go`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/go/index.md`
- **Proposed slug**: `/backend/go`
- **Goal**: Expect every link on the page to open an existing page
- **Outline**:

```
# Go Hosting Reference
Go Hosting Reference index and links to child guides.

## Overview
Frontmatter: slug `/backend/go`, title Go Hosting Reference.
`#` title plus one-sentence description.
`## Overview` — Backend Capsules for Go and when to use Docker instead.
`## Deployment guides` — table linking `go.md`, `go-telegram-bot.md`, and related tutorials.
`## Related` — DocCardList to `/docs/backend`, `/docs/products/backend-capsule`, fork/demo prerequisites.

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/backend/go/index.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
