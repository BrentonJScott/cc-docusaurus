# Format report — routing

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/products/wordpress-capsule/routing.md`
- **Doc type:** explanation
- **Template:** explanation_format.md
- **Feature:** Configure WordPress Routing
- **Goal:** Expect the reader to understand: How HTTP requests are routed through a WordPress Capsule and how to customise nginx routing
- **Format check:** fail

## Content list

1. (`build`) under `Request Flow` — - TLS termination (HTTPS → HTTP inside the capsule)
2. (`build`) under `Request Flow` — - Custom domain routing
3. (`build`) under `Request Flow` — - Real client IP forwarding via the `X-Forwarded-For` header
4. (`build`) under `Request Flow` — - Static file serving (CSS, JS, images, fonts, PDFs)
5. (`build`) under `Request Flow` — - Full-page caching
6. (`build`) under `Request Flow` — - Rate limiting
7. (`build`) under `Request Flow` — - Security header injection
8. (`build`) under `Request Flow` — - Path-based routing to PHP-FPM
9. (`build`) under `Request Flow` — - All `.php` file execution
10. (`build`) under `Request Flow` — - WordPress routing (the `index.php` catch-all)
11. (`build`) under `IP-based features that work out of the box` — - **WooCommerce geolocation** — uses `REMOTE_ADDR` to detect country for shipping and tax
12. (`build`) under `IP-based features that work out of the box` — - **Security plugins** (Wordfence, iThemes Security) — see real IPs for lockout and alerting
13. (`build`) under `IP-based features that work out of the box` — - **Rate limiting** — the built-in nginx rate limiting zones use the real client IP
14. (`build`) under `IP-based features that work out of the box` — - **Geo-restriction plugins** — receive the correct visitor country
15. (`build`) under `wp-admin and Protected Routes` — - The full-page cache is always bypassed for all admin routes.
16. (`build`) under `wp-admin and Protected Routes` — - Rate limiting is applied at the stricter `protected_routes` level (30 req/min).
17. (`build`) under `wp-admin and Protected Routes` — - Admin PHP files are passed directly to PHP-FPM with no cache layer.

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

## Tickets

### routing-1
- **Type:** Format fix
- **Title:** Add ## Overview
- **Problem:** Explanation missing `## Overview`.
- **Rule:** explanation_format.md
- **Change:** Add Overview section with content.
- **Done when:** Section present with content.

### routing-2
- **Type:** Format fix
- **Title:** Add ## Why it matters
- **Problem:** Explanation missing `## Why it matters`.
- **Rule:** explanation_format.md
- **Change:** Add Why it matters section with content.
- **Done when:** Section present with content.

### routing-3
- **Type:** Format fix
- **Title:** Add ## How it works
- **Problem:** Explanation missing `## How it works`.
- **Rule:** explanation_format.md
- **Change:** Add How it works section with content.
- **Done when:** Section present with content.

### routing-4
- **Type:** Format fix
- **Title:** Add ## When to use it
- **Problem:** Explanation missing `## When to use it`.
- **Rule:** explanation_format.md
- **Change:** Add When to use it section with content.
- **Done when:** Section present with content.

### routing-5
- **Type:** Format fix
- **Title:** Add ## Related
- **Problem:** Explanation missing `## Related`.
- **Rule:** explanation_format.md
- **Change:** Add Related section with content.
- **Done when:** Section present with content.

### routing-6
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** explanation_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/products/wordpress-capsule/routing.md` to match explanation_format.md — see tickets above.)
