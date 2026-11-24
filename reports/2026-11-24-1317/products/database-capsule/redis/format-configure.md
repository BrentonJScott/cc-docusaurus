# Format report — configure

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/database-capsule/redis/configure.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Configure a Redis Database
- **Goal:** Expect to see the configuration saved as described
- **Format check:** fail

## Content list

1. (`goal`) under `View Connection Details` — - Host
2. (`goal`) under `View Connection Details` — - Port
3. (`goal`) under `View Connection Details` — - Database name
4. (`goal`) under `View Connection Details` — - Username
5. (`goal`) under `View Connection Details` — - Password
6. (`goal`) under `View Connection Details` — - Connection string

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

(Rewrite `docs/products/database-capsule/redis/configure.md` to match how_to_format.md — see tickets above.)
