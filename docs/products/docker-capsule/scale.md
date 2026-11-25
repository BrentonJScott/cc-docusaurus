---
slug: "/products/docker-capsule/scale"
title: "How to Scale a Docker Container"
description: >-
  Scale your Docker Capsule on Code Capsules by adding replicas or allocating more CPU, memory, and GPU as your application traffic grows.
sidebar_label: Scale
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Scale Your Docker Container

Scale your Docker Capsule on Code Capsules by adding replicas or allocating more CPU, memory, and GPU as your application traffic grows.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/products/docker-capsule/git/deploy', label: '🛠️ Docker Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Scale your Docker Capsule

1. **Open Scale**

   Open your Docker Capsule and select the **Scale** tab.

2. **Edit resources**

   On **Scale**, click **Edit**. Adjust **CPU**, **RAM**, **Storage**, **Replicas**, and **GPU** (when shown).

3. **Save**

   On **Scale**, click **Save** and confirm. The new resources are saved and show on **Scale**.

## Troubleshooting

<details>
<summary>Save is disabled</summary>

Some capsule types require the capsule to be on a paid plan or to be stopped before scaling storage. Check the message on the Scale tab.

</details>
