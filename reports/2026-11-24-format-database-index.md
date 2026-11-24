# Format report

- **Run:** 2026-11-24T08:21:00Z
- **Doc:** `docs/database/index.md`
- **Doc type:** Explanation (intended)
- **Template:** `explanation_format.md`
- **Feature:** View database hosting index
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list (Check 1)

1. [remove] (# Managed Databases Without the Ops) Title only; no index links or overview.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | No explain content; page does not list database types. |
| Check 2: Prerequisites | not applicable | Explanation. |
| Check 3: Links | fail | No links to MySQL, PostgreSQL, MongoDB, Redis child pages. |
| Check 4: Format and style | fail | Missing frontmatter `doc_version`, DocCardList, and required Explanation sections. |
| Walkthrough | not applicable | Not a How-to/Tutorial. |

## Tickets

### database-index-1 — Complete database hosting index
- **Type:** Wrong doc type
- **Problem:** The file stops after the `#` title.
- **Rule:** `FORMAT.MD`, Step 1
- **Change:** Either build an Explanation index with Overview, Why it matters, How it works, When to use it, and Related cards to each database guide, or a hub How-to with DocCardList linking MySQL, PostgreSQL, MongoDB, Redis.
- **Done when:** Every database type links to an existing page and the template sections are present.

### database-index-2 — Add required frontmatter
- **Type:** Format fix
- **Problem:** Missing `doc_version: drift`.
- **Rule:** `writing_style.md`, Every doc
- **Change:** Add full frontmatter and `import DocCardList`.
- **Done when:** Frontmatter matches writing_style.md.

## Proposed outline

## Overview
## Why it matters
## How it works
## When to use it
## Related
- DocCardList → mysql, postgres, mongodb, redis guides
