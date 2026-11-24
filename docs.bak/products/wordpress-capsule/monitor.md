---
slug: "/products/wordpress-capsule/monitor"
title: "How to Monitor a WordPress Site"
description: >-
  Monitor your WordPress Capsule using built-in Prometheus metrics for nginx, PHP-FPM, and WordPress application health.
sidebar_label: Monitor
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Monitor metrics

View usage metrics for your WordPress Capsule on the **Metrics** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/wordpress-capsule/deploy', label: '🛠️ WordPress Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## View metrics

1. **Open the Capsule**

   Open the Space and select the WordPress Capsule.

2. **Open Metrics**

   Click the **Metrics** tab. CPU, memory, and request charts load for the capsule.

3. **Confirm usage data**

   Change the time range if the UI offers one. Values update for the selected period.

## Troubleshooting

<details>
<summary>Metrics show no data</summary>

New capsules may need a few minutes of traffic or runtime before charts populate. Confirm the capsule is on and serving requests.

</details>
