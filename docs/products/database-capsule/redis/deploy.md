---
slug: "/products/database-capsule/redis/deploy"
title: "How to Host a Redis Database"
description: >-
  Create a Redis Capsule on Code Capsules. When you finish, the database capsule build is in progress on **Builds**.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Redis Database

Create a Redis Capsule on Code Capsules. When you finish, the database capsule build is in progress on **Builds**.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Deploy your Redis database

1. **Open the capsule wizard**

   Open your Space. Select **New Capsule**.

2. **Choose Redis**

   On **Capsule Details**, select **Redis**, your Team, and Space. Click **Next**.

3. **Choose plan and resources**

   On **Plan & Deploy**, choose the **Free** plan. Set **CPU**, **RAM**, **Storage**, and **Replicas** as shown. Click **Next**.

4. **Create the capsule**

   On **Plan & Deploy**, enter a **Capsule Name** and click **Create Capsule**.

5. **Check the build**

   On the capsule **Deploy** tab, open **Builds**. The database capsule build is in progress.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>