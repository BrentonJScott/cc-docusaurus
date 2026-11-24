# Format report — quick-start

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/cli/readme/getting-started/quick-start.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** CLI Quick Start Guide
- **Goal:** Expect to log in and run a first command
- **Format check:** fail

## Content list

1. (`explain`) under `Troubleshooting` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### quick-start-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### quick-start-2
- **Type:** Format fix
- **Title:** Remove simply/just/easy
- **Problem:** Doc uses discouraged words (simply, just, or easy).
- **Rule:** writing_style.md Words
- **Change:** Rewrite those sentences.
- **Done when:** No simply/just/easy in prose.

## Proposed outline

(Rewrite `docs/cli/readme/getting-started/quick-start.md` to match how_to_format.md — see tickets above.)
