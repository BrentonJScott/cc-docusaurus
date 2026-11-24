# Format report — configure

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/database-capsule/mysql/configure.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Configure a MySQL Database
- **Goal:** Expect to see the configuration saved as described
- **Format check:** fail

## Content list

1. (`goal`) under `View Connection Details` — - Host
2. (`goal`) under `View Connection Details` — - Port
3. (`goal`) under `View Connection Details` — - Database name
4. (`goal`) under `View Connection Details` — - Username
5. (`goal`) under `View Connection Details` — - Password
6. (`goal`) under `View Connection Details` — - Connection string
7. (`goal`) under `Set SQL Modes` — - `STRICT_TRANS_TABLES` - Enables strict mode for transactional tables
8. (`goal`) under `Set SQL Modes` — - `NO_ZERO_DATE` - Prevents the use of invalid date values
9. (`goal`) under `Set SQL Modes` — - `ONLY_FULL_GROUP_BY` - Requires `GROUP BY` to list all selected columns

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

(Rewrite `docs/products/database-capsule/mysql/configure.md` to match how_to_format.md — see tickets above.)
