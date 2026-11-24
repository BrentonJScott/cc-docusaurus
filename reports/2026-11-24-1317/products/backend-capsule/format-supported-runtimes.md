# Format report — supported-runtimes

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/backend-capsule/supported-runtimes.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Supported Backend Runtimes and Versions
- **Goal:** Expect to see supported runtimes and pin a runtime version
- **Format check:** fail

## Content list

1. (`goal`) under `Related` — - [Build and Deploy](/products/backend-capsule/deploy/) — language and framework deployment guides
2. (`goal`) under `Related` — - [Configure](/products/backend-capsule/configure/) — run command, port, and environment variables
3. (`goal`) under `Related` — - [Add a Procfile](/products/backend-capsule/add-procfile/) — custom process definitions for Python and other apps

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### supported-runtimes-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

## Proposed outline

(Rewrite `docs/products/backend-capsule/supported-runtimes.md` to match how_to_format.md — see tickets above.)
