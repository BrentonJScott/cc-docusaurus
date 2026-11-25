---
slug: "/products/database-capsule/documentdb/deploy"
title: "How to Host a DocumentDB Database"
description: >-
  Create a MongoDB-compatible DocumentDB Capsule on Code Capsules. When you finish, the capsule build is in progress on **Builds**.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your DocumentDB Database

Create a MongoDB-compatible DocumentDB Capsule on Code Capsules. When you finish, the capsule build is in progress on **Builds**.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Deploy your DocumentDB database

1. **Open the capsule wizard**

   Open your Space. Select **New Capsule**.

2. **Choose MongoDB Compatible**

   On **Capsule Details**, select **MongoDB Compatible**, your Team, and Space. Click **Next**.

3. **Choose plan and resources**

   On **Plan & Deploy**, choose the **Free** plan. Configure **CPU**, **RAM**, **Storage**, and **Replicas**. Click **Next**.

4. **Create the capsule**

   On **Plan & Deploy**, enter a **Capsule Name** and click **Create Capsule**.

5. **Check the build**

   On the capsule **Deploy** tab, open **Builds**. The database capsule build is in progress.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>