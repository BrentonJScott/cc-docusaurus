---
slug: "/products/wordpress-capsule/scale"
title: "How to Scale a WordPress Site"
description: >-
  Scale your WordPress Capsule on Code Capsules by allocating more CPU and memory as traffic to your WordPress site grows.
sidebar_label: Scale
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Scale your Scale

Change CPU, RAM, replicas, or storage for your WordPress Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/wordpress-capsule/deploy', label: '🛠️ WordPress Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Scale the Capsule

1. **Open Scale**

   Open the Capsule and select the **Scale** tab.

2. **Edit resources**

   Click **Edit**. Adjust **CPU**, **RAM**, **Storage**, or **Replicas** as offered for this capsule type.

3. **Save**

   Click **Save** and confirm. The capsule redeploys or resizes with the new resources showing on **Scale**.

## Troubleshooting

<details>
<summary>Save is disabled</summary>

Some capsule types require the capsule to be on a paid plan or to be stopped before scaling storage. Check the message on the Scale tab.

</details>
