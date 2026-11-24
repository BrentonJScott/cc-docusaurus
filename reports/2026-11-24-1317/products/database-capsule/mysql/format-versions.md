# Format report — versions

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/database-capsule/mysql/versions.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Supported MySQL Versions
- **Goal:** Expect to see the capsule's version and its upgrade path
- **Format check:** fail

## Content list

1. (`goal`) under `Upgrade Guides` — - [5.7 to 8.0](/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0/)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### versions-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

## Proposed outline

(Rewrite `docs/products/database-capsule/mysql/versions.md` to match how_to_format.md — see tickets above.)
