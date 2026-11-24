---
slug: "/products/database-capsule/redis/deploy"
title: "How to Deploy a Redis Database"
description: >-
  Deploy a managed in-memory Redis database on Code Capsules with a Redis Capsule, then connect it to your backend app using a framework guide.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your Redis Database

Redis Capsules provide a managed in-memory Redis database for your applications on Code Capsules. When you create a capsule in the dashboard, it is presented as **Redis**.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/redis/deploy', label: '🛠️ Redis Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Create a Redis Capsule

1. Click **New Capsule** and select **Redis**, your Team, and Space.
2. On **Plan & Deploy**, choose a **Plan** and configure **CPU**, **RAM**, **Storage**, and **Replicas** as needed.
3. Enter a **Capsule Name** and click **Create Capsule**.

Capsule creation can take several minutes. See the [Redis getting started guide](/database/redis/) for connection and binding instructions.

## Framework Guides

- [Redis](/database/redis/)
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
