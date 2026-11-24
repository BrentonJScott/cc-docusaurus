# Format report — redis

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/database/redis.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Managed Redis Hosting
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`explain`) under `Troubleshooting` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### redis-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

## Proposed outline

(Rewrite `docs/database/redis.md` to match how_to_format.md — see tickets above.)
