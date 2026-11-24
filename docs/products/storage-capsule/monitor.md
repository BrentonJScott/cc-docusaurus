---
slug: "/products/storage-capsule/monitor"
title: "How to Monitor a Persistent Storage"
description: >-
  Monitor your Persistent Storage Capsule on Code Capsules and track storage usage and resource metrics from the Metrics tab.
sidebar_label: Monitor
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Monitor metrics

View usage metrics for your Storage Capsule on the **Metrics** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/storage-capsule/deploy', label: '🛠️ Storage Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## View metrics

1. **Open the Capsule**

   Open the Space and select the Storage Capsule.

2. **Open Metrics**

   Click the **Metrics** tab. CPU, memory, and request charts load for the capsule.

3. **Confirm usage data**

   Change the time range if the UI offers one. Values update for the selected period.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Metrics show no data</summary>

New capsules may need a few minutes of traffic or runtime before charts populate. Confirm the capsule is on and serving requests.

</details>
