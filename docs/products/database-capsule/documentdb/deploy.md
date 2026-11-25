---
slug: "/products/database-capsule/documentdb/deploy"
title: "How to Deploy a DocumentDB Database"
description: >-
  Create a MongoDB-compatible DocumentDB Capsule on Code Capsules. When you finish, the capsule build is in progress on **Builds**.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your DocumentDB Database

Create a MongoDB-compatible DocumentDB Capsule on Code Capsules. When you finish, the capsule build is in progress on **Builds**.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Deploy your DocumentDB database

1. **Start the capsule wizard**

   Open your Space. Click **+** and select **New Capsule**.

2. **Choose MongoDB Compatible**

   Select **MongoDB Compatible**, your Team, and Space. Click **Next**.

3. **Choose plan and resources**

   On **Plan & Deploy**, choose a **Plan** and configure **CPU**, **RAM**, **Storage**, and **Replicas**.

4. **Create the capsule**

   Enter a **Capsule Name** and click **Create Capsule**.

5. **Check the build**

   Open the capsule and select the **Deploy** tab, then open **Builds**. The database capsule build is in progress.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>

