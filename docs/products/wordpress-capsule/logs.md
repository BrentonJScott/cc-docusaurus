---
slug: "/products/wordpress-capsule/logs"
title: "How to View Logs for a WordPress Site"
description: >-
  View logs from your WordPress Capsule on Code Capsules to monitor PHP and web-server activity and debug your WordPress site.
sidebar_label: Logs
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Logs logs

View build, runtime, and access logs for your WordPress Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/wordpress-capsule/deploy', label: '🛠️ WordPress Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## View logs

1. **Open the Capsule**

   Open the Space and select the WordPress Capsule.

2. **Open Logs**

   Click the **Logs** tab.

3. **Switch log streams**

   Open **Capsule logs**, **Build logs**, or **Access logs** as listed. Scroll to the latest entries after a deploy.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Build logs are empty</summary>

Trigger a new build from the **Deploy** tab or push to the connected branch, then refresh **Build logs**.

</details>
