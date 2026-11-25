---
slug: "/products/database-capsule/postgresql/logs"
title: "How to View Logs for a PostgreSQL Database"
description: >-
  View Capsule logs, Build logs, and Access logs for your PostgreSQL Capsule on Code Capsules.
sidebar_label: Logs
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# View Your PostgreSQL Logs

View **Capsule logs**, **Build logs**, and **Access logs** for your PostgreSQL Capsule on Code Capsules.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/products/database-capsule/postgresql/deploy', label: '🛠️ PostgreSQL Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## View your PostgreSQL logs

1. **Open the Capsule**

   On your **Space** dashboard, select the PostgreSQL Capsule.

2. **Open Logs**

   On the **Capsule** page, click the **Logs** tab.

3. **Choose a log stream**

   On **Logs**, open **Capsule logs**, **Build logs**, or **Access logs**. The latest entries for the stream you selected appear on **Logs**.

## Troubleshooting

<details>
<summary>Build logs are empty</summary>

Trigger a new build from the **Deploy** tab or push to the connected branch, then refresh **Build logs**.

</details>