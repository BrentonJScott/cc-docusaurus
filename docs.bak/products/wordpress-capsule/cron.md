---
slug: "/products/wordpress-capsule/cron"
title: "How to Schedule WordPress Cron Jobs"
description: >-
  How WordPress scheduled tasks work on Code Capsules and how to configure reliable cron execution.
sidebar_label: Cron
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Schedule Your WordPress Cron Jobs

WordPress Capsules replace HTTP-triggered WP-Cron with a platform job that runs every five minutes.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/wordpress-capsule/deploy', label: '🛠️ WordPress Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your WordPress cron

1. **Disable on-page cron**

   Add `define('DISABLE_WP_CRON', true);` through `WORDPRESS_CONFIG_EXTRA` on **Config**.

2. **Apply platform defaults**

   Leave `DISABLE_PUBLIC_WP_CRON=true` so `/wp-cron.php` is not reachable from the public internet. The platform calls cron on the internal network every five minutes.

3. **Use recommended variables**

   Set `DISABLE_PUBLIC_WP_CRON=true` and `WORDPRESS_CONFIG_EXTRA=define('DISABLE_WP_CRON', true);` for production sites.

4. **Allow public cron only when required**

   If a third-party service must hit `/wp-cron.php`, set `DISABLE_PUBLIC_WP_CRON=false`. The endpoint remains rate-limited.

## Troubleshooting

<details>
<summary>Scheduled posts are late</summary>

Confirm `DISABLE_WP_CRON` is set and allow up to five minutes for the platform cron interval.

</details>