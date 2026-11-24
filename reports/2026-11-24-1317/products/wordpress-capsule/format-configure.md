# Format report — configure

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/wordpress-capsule/configure.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Configure a WordPress Site
- **Goal:** Expect to see database, storage, site URL and PHP settings saved
- **Format check:** fail

## Content list

1. (`goal`) under `Upload Size (`MAX_UPLOAD_SIZE`)` — - Nginx `client_max_body_size`
2. (`goal`) under `Upload Size (`MAX_UPLOAD_SIZE`)` — - PHP `upload_max_filesize`
3. (`goal`) under `Upload Size (`MAX_UPLOAD_SIZE`)` — - PHP `post_max_size`

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

(Rewrite `docs/products/wordpress-capsule/configure.md` to match how_to_format.md — see tickets above.)
