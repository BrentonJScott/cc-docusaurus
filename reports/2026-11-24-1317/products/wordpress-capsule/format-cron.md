# Format report — cron

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/wordpress-capsule/cron.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Schedule WordPress Cron Jobs
- **Goal:** Expect the reader to understand: How WordPress scheduled tasks work on Code Capsules and how to configure reliable cron execution
- **Format check:** fail

## Content list

1. (`goal`) under `Schedule Your WordPress Cron Jobs` — - **Low-traffic sites**: If nobody visits for hours, scheduled tasks don't run.
2. (`goal`) under `Schedule Your WordPress Cron Jobs` — - **High-traffic sites**: Every page load attempts to run pending cron jobs, wasting PHP worker time.
3. (`goal`) under `Default Behaviour` — 1. **Restrict public access to `wp-cron.php`** — external HTTP requests to `/wp-cron.php` return `403 Forbidden`. This p
4. (`goal`) under `Default Behaviour` — 2. **The platform calls `wp-cron.php` internally every 5 minutes** — a scheduled job inside the platform network trigger
5. (`goal`) under `Plugin Cron Jobs` — - Scheduled posts publish within 5 minutes of their scheduled time.
6. (`goal`) under `Plugin Cron Jobs` — - WooCommerce emails send within 5 minutes of an order.
7. (`goal`) under `Plugin Cron Jobs` — - Plugin cleanup and maintenance tasks run on their configured schedule.

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### cron-1
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### cron-2
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

## Proposed outline

(Rewrite `docs/products/wordpress-capsule/cron.md` to match how_to_format.md — see tickets above.)
