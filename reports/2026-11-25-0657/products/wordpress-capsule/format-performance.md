# Format report — performance

- **Run timestamp:** 2026-11-25T06:57:29Z
- **Doc file:** `docs/products/wordpress-capsule/performance.md`
- **Doc type:** explanation
- **Template:** explanation_format.md
- **Feature:** Maximize WordPress Performance
- **Goal:** Expect the reader to understand: Tune PHP, OPcache, and PHP-FPM workers to get the best performance from your WordPress Capsule
- **Format check:** fail

## Content list

1. (`build`) under `How Requests Are Processed` — - **Nginx** serves static files (CSS, JS, images) directly without involving PHP.
2. (`build`) under `How Requests Are Processed` — - **Nginx page cache** serves cached HTML to anonymous visitors without involving PHP or MySQL.
3. (`build`) under `How Requests Are Processed` — - **PHP-FPM** processes PHP requests using a pool of worker processes.
4. (`build`) under `How Requests Are Processed` — - **OPcache** caches compiled PHP bytecode in memory so PHP files do not need to be parsed on every request.
5. (`build`) under ``static` vs `dynamic` process manager` — - **`pm = static`**: All workers are pre-allocated. No spawning overhead under load. Best for 2GB+ capsules with consist
6. (`build`) under ``static` vs `dynamic` process manager` — - **`pm = dynamic`**: Workers are spawned and killed based on demand. More memory-efficient for low-traffic or bursty si
7. (`build`) under `Detecting worker exhaustion` — - Response times spike under moderate traffic
8. (`build`) under `Detecting worker exhaustion` — - The Prometheus metric `phpfpm_listen_queue` is greater than 0
9. (`build`) under `Detecting worker exhaustion` — - The metric `phpfpm_max_children_reached_total` is increasing
10. (`build`) under `Detecting worker exhaustion` — - CPU usage is low but response times are high (workers are waiting on I/O, not CPU)
11. (`build`) under `Memory Limit` — - Page builders (Elementor, Divi, Beaver Builder) with complex layouts
12. (`build`) under `Memory Limit` — - WooCommerce stores with large product catalogues
13. (`build`) under `Memory Limit` — - Membership plugins with complex access rules
14. (`build`) under `Memory Limit` — - Large WXR import/export operations
15. (`build`) under `Execution Time` — - WooCommerce order exports
16. (`build`) under `Execution Time` — - WXR file imports
17. (`build`) under `Execution Time` — - Plugin update operations
18. (`build`) under `Execution Time` — - Large image regeneration batches
19. (`build`) under `Blog / Brochure site` — - `CACHE_TTL_SECONDS=60` — protects against traffic spikes, content stays fresh ✓
20. (`build`) under `Blog / Brochure site` — - `opcache.validate_timestamps = 0` for production ✓
21. (`build`) under `Blog / Brochure site` — - Default FPM pool is sufficient
22. (`build`) under `WooCommerce store` — - `CACHE_TTL_SECONDS=60` — cart/checkout are automatically bypassed ✓
23. (`build`) under `WooCommerce store` — - Increase `pm.max_children` (WooCommerce uses more memory per worker)
24. (`build`) under `WooCommerce store` — - Enable Redis object cache for product/category query caching
25. (`build`) under `WooCommerce store` — - Set `max_execution_time = 120` for import/export operations
26. (`build`) under `High-traffic content site` — - `CACHE_TTL_SECONDS=600` — 10-minute TTL for mostly-static content
27. (`build`) under `High-traffic content site` — - `pm = static` with max workers for your RAM
28. (`build`) under `High-traffic content site` — - `opcache.validate_timestamps = 0`
29. (`build`) under `High-traffic content site` — - Consider an external CDN in front of the capsule
30. (`build`) under `Membership / LMS site` — - Leave `CACHE_TTL_SECONDS` unset — member content must not be cached
31. (`build`) under `Membership / LMS site` — - Increase `memory_limit` (membership plugins are memory-heavy)
32. (`build`) under `Membership / LMS site` — - Enable Redis object cache to compensate for no page cache

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

## Tickets

### performance-1
- **Type:** Format fix
- **Title:** Add ## Overview
- **Problem:** Explanation missing `## Overview`.
- **Rule:** explanation_format.md
- **Change:** Add Overview section with content.
- **Done when:** Section present with content.

### performance-2
- **Type:** Format fix
- **Title:** Add ## Why it matters
- **Problem:** Explanation missing `## Why it matters`.
- **Rule:** explanation_format.md
- **Change:** Add Why it matters section with content.
- **Done when:** Section present with content.

### performance-3
- **Type:** Format fix
- **Title:** Add ## How it works
- **Problem:** Explanation missing `## How it works`.
- **Rule:** explanation_format.md
- **Change:** Add How it works section with content.
- **Done when:** Section present with content.

### performance-4
- **Type:** Format fix
- **Title:** Add ## When to use it
- **Problem:** Explanation missing `## When to use it`.
- **Rule:** explanation_format.md
- **Change:** Add When to use it section with content.
- **Done when:** Section present with content.

### performance-5
- **Type:** Format fix
- **Title:** Add ## Related
- **Problem:** Explanation missing `## Related`.
- **Rule:** explanation_format.md
- **Change:** Add Related section with content.
- **Done when:** Section present with content.

### performance-6
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** explanation_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/products/wordpress-capsule/performance.md` to match explanation_format.md — see tickets above.)
