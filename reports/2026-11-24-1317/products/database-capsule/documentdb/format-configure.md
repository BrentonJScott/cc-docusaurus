# Format report — configure

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/database-capsule/documentdb/configure.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Configure a DocumentDB Database
- **Goal:** Expect to see the configuration saved as described
- **Format check:** fail

## Content list

1. (`goal`) under `View connection details` — - Host
2. (`goal`) under `View connection details` — - Port (default `27017`)
3. (`goal`) under `View connection details` — - Database name
4. (`goal`) under `View connection details` — - Username
5. (`goal`) under `View connection details` — - Password
6. (`goal`) under `View connection details` — - Connection string

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

(Rewrite `docs/products/database-capsule/documentdb/configure.md` to match how_to_format.md — see tickets above.)
