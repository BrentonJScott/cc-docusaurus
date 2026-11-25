---
slug: "/products/storage-capsule/logs"
title: "How to View Logs for a Persistent Storage Capsule"
description: >-
  View Capsule logs, Build logs, and Access logs for your Persistent Storage Capsule on Code Capsules.
sidebar_label: Logs
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# View Your Persistent Storage Logs

View **Capsule logs**, **Build logs**, and **Access logs** for your Persistent Storage Capsule on Code Capsules.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/products/storage-capsule/deploy', label: '🛠️ Storage Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## View your Persistent Storage logs

1. **Open the Capsule**

   On your **Space** dashboard, select the Persistent Storage Capsule.

2. **Open Logs**

   On the **Capsule** page, click the **Logs** tab.

3. **Read a log stream**

   On **Logs**, open **Capsule logs**, **Build logs**, or **Access logs**. The latest entries for that stream are visible in the list.

## Troubleshooting

<details>
<summary>Build logs are empty</summary>

Trigger a new build from the **Deploy** tab or push to the connected branch, then refresh **Build logs**.

</details>