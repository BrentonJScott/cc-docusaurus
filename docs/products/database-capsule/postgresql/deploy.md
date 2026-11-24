---
slug: "/products/database-capsule/postgresql/deploy"
title: "How to Deploy a PostgreSQL Database"
description: >-
  Deploy a managed PostgreSQL database on Code Capsules with a PostgreSQL Capsule, then connect it to your backend app using a framework guide.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your PostgreSQL Database

PostgreSQL Capsules provide a managed PostgreSQL database for your applications on Code Capsules.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Deploy your PostgreSQL database

1. **Start the capsule wizard**

   Open your Space. Click the yellow **+** and select **New Capsule**.

2. **Choose PostgreSQL**

   Select **PostgreSQL**, your Team, and Space. Click **Next**.

3. **Choose plan and resources**

   On **Plan & Deploy**, choose a **Plan** and configure **CPU**, **RAM**, **Storage**, and **Replicas** as needed.

4. **Create the capsule**

   Enter a **Capsule Name** and click **Create Capsule**. Creation can take several minutes.

5. **Connect your application**

   See the [PostgreSQL getting started guide](/database/postgres/) for connection and binding instructions.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>