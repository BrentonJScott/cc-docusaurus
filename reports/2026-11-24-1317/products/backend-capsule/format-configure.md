# Format report — configure

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/backend-capsule/configure.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Configure a Backend Application
- **Goal:** Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Format check:** fail

## Content list

1. (`goal`) under `Build settings` — - Python: `python app.py`
2. (`goal`) under `Build settings` — - Node.js: `npm start`
3. (`goal`) under `Build settings` — - Ruby: `ruby app.rb`

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### configure-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

## Proposed outline

(Rewrite `docs/products/backend-capsule/configure.md` to match how_to_format.md — see tickets above.)
