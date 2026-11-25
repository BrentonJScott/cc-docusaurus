---
slug: "/products/wordpress-capsule/scale"
title: "How to Scale a WordPress Site"
description: >-
  Scale your WordPress Capsule on Code Capsules by allocating more CPU and memory as traffic to your WordPress site grows.
sidebar_label: Scale
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Scale Your WordPress Site

Scale your WordPress Capsule on Code Capsules by allocating more CPU and memory as traffic to your WordPress site grows.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>


## Scale your WordPress site

1. **Open Scale**

   On your Space dashboard, open the WordPress Capsule and select the **Scale** tab.

2. **Edit resources**

   On **Scale**, click **Edit**. Adjust **CPU**, **RAM**, **Storage**, and **Replicas**.

3. **Save**

   On **Scale**, click **Save** and confirm. The new resources are saved and show on **Scale**.

## Troubleshooting

<details>
<summary>Save is disabled</summary>

Some capsule types require the capsule to be on a paid plan or to be stopped before scaling storage. Check the message on the Scale tab.

</details>
