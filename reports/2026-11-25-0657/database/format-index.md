# Format report — database

- **Run timestamp:** 2026-11-25T06:57:29Z
- **Doc file:** `docs/database/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Managed Database Hosting — MySQL, MongoDB, Postgres & Redis
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`fact`) under `Managed Databases Without the Ops` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

## Tickets

### index-1
- **Type:** Format fix
- **Title:** Add Overview section
- **Problem:** Reference missing ## Overview.
- **Rule:** reference_format.md
- **Change:** Add overview facts.
- **Done when:** Overview present.

### index-2
- **Type:** Format fix
- **Title:** Add Related section
- **Problem:** Reference missing ## Related.
- **Rule:** reference_format.md
- **Change:** Add DocCardList Related with 2+ cards.
- **Done when:** Related with 2+ links.

### index-3
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** reference_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/database/index.md` to match reference_format.md — see tickets above.)
