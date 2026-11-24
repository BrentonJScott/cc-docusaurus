# Format report — caching

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/wordpress-capsule/caching.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Enable WordPress Caching
- **Goal:** Expect the reader to understand: Understand and configure the built-in WordPress page cache to improve performance and handle traffic spikes
- **Format check:** fail

## Content list

1. (`goal`) under `How It Works` — 2. **Cache HIT** — the stored HTML is returned immediately. PHP and the database are not involved.
2. (`goal`) under `How It Works` — 3. **Cache MISS** — nginx passes the request to PHP-FPM, WordPress renders the page, and the result is stored in the cac
3. (`goal`) under `How It Works` — - Logged-in users (any `wordpress_logged_in` cookie)
4. (`goal`) under `How It Works` — - WooCommerce sessions (cart, checkout, account pages)
5. (`goal`) under `How It Works` — - Easy Digital Downloads sessions (`edd_items_in_cart`)
6. (`goal`) under `How It Works` — - Password-protected posts
7. (`goal`) under `How It Works` — - Comment authors (they see their own comment immediately)
8. (`goal`) under `How It Works` — - All POST, PUT, PATCH, DELETE requests
9. (`goal`) under `How It Works` — - wp-admin, wp-login.php, xmlrpc.php, wp-cron.php
10. (`goal`) under `How It Works` — - The WordPress REST API (`/wp-json/` and `/wc-api/`)
11. (`goal`) under `How It Works` — - Cart and checkout paths (`/cart/`, `/checkout/`, `/my-account/`, `/account/`)
12. (`goal`) under `How It Works` — - Search results (`?s=`)
13. (`goal`) under `How It Works` — - Live preview and page builder previews
14. (`goal`) under `Disabling the Cache` — - You are using a WordPress caching plugin (WP Rocket, W3 Total Cache, WP Super Cache) that generates its own static fil
15. (`goal`) under `Disabling the Cache` — - Your site is behind an external CDN that handles full-page caching (e.g. Cloudflare with APO).
16. (`goal`) under `Disabling the Cache` — - You are debugging a rendering issue and need to rule out stale cache.
17. (`goal`) under `WooCommerce` — - The cart page
18. (`goal`) under `WooCommerce` — - The checkout page
19. (`goal`) under `WooCommerce` — - The account page
20. (`goal`) under `WooCommerce` — - Any visitor with an active WooCommerce session cookie (`woocommerce_items_in_cart`, `woocommerce_cart_hash`, `wp_wooco

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### caching-1
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### caching-2
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

### caching-3
- **Type:** Format fix
- **Title:** Remove simply/just/easy
- **Problem:** Doc uses discouraged words (simply, just, or easy).
- **Rule:** writing_style.md Words
- **Change:** Rewrite those sentences.
- **Done when:** No simply/just/easy in prose.

## Proposed outline

(Rewrite `docs/products/wordpress-capsule/caching.md` to match how_to_format.md — see tickets above.)
