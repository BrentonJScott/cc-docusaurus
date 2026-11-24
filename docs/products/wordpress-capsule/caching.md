---
slug: "/products/wordpress-capsule/caching"
title: "How to Enable WordPress Caching"
description: >-
  Understand and configure the built-in WordPress page cache to improve performance and handle traffic spikes.
sidebar_label: Caching
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Speed Up WordPress With Caching

WordPress Capsules include a FastCGI full-page cache for anonymous visitors. Enable it with `CACHE_TTL_SECONDS`.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/wordpress-capsule/deploy', label: '🛠️ WordPress Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your WordPress cache

1. **Enable the cache**

   On **Config**, set `CACHE_TTL_SECONDS` to a positive integer, for example `CACHE_TTL_SECONDS=60`. Unset or remove the variable to disable caching.

2. **Pick a TTL**

   Use `60` for most sites, `600` for mostly static high-traffic content, or leave unset for WooCommerce with live stock, membership/LMS sites, or when using a WordPress caching plugin.

3. **Know what bypasses the cache**

   Logged-in users, WooCommerce cart/checkout/account, POST requests, wp-admin, REST API, search, and similar routes bypass the cache. Product pages for anonymous visitors can still be cached within the TTL.

4. **Avoid duplicate caches**

   When using WP Rocket, W3 Total Cache, or WP Super Cache, leave `CACHE_TTL_SECONDS` unset and let the plugin manage caching.

5. **Debug cache behavior**

   Set `DEBUG_HEADERS=true` to expose the `X-Cache` header (`HIT`, `MISS`, `BYPASS`, `EXPIRED`).

## Troubleshooting

<details>
<summary>Visitors see stale content</summary>

Lower `CACHE_TTL_SECONDS` or clear the cache by redeploying. Confirm you are testing as an anonymous visitor; logged-in requests bypass the cache.

</details>