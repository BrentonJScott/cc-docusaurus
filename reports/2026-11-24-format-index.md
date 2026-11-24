# Format report: index

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/index.md
**Doc type:** Explanation (index hub; no template)
**Template:** explanation_format.md

**Feature:** View platform guides index

**Goal:** Expect every link on the page to open an existing page

**Format check:** fail
**Walkthrough:** not applicable

## Content list (Check 1)

1. [fact] (## Account) Card table links to two account guides.
2. [fact] (## Billing) Card table links to three billing guides.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content | fail | Index incomplete vs platform scope; Gitbook HTML tables not DocCardList. |
| Prerequisites | not applicable |  |
| Links | fail | cover image missing; only subset of platform links present. |
| Format and style | fail | Missing doc_version; non-standard cover frontmatter; no # description repeat pattern. |

## Tickets

### index-1: Rebuild platform index with DocCardList.

- **Type:** Wrong doc type
- **Title:** Rebuild platform index with DocCardList.
- **Problem:** Gitbook card tables; partial sections.
- **Rule:** writing_style.md Page pieces
- **Change:** Sections for Teams, Spaces, Capsules, Security, Regions with DocCardList items; remove cover or move to meta only.
- **Done when:** Every listed platform guide linked and resolvable.

### index-2: Remove or add cover asset.

- **Type:** Broken link
- **Title:** Remove or add cover asset.
- **Problem:** generic-docs-banner.jpg not in static/.
- **Rule:** Check 3
- **Change:** Remove cover until asset exists.
- **Done when:** No missing images.


## Proposed outline

# Platform guides
## Account (DocCardList)
## Billing
## Teams
## Spaces
## Capsules
## Security
## Regions
