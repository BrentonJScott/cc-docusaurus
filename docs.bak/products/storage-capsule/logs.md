---
slug: "/products/storage-capsule/logs"
title: "How to View Logs for a Persistent Storage"
description: >-
  View logs from your Persistent Storage Capsule on Code Capsules to monitor file activity and debug storage issues.
sidebar_label: Logs
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Logs logs

View build, runtime, and access logs for your Storage Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/storage-capsule/deploy', label: '🛠️ Storage Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## View logs

1. **Open the Capsule**

   Open the Space and select the Storage Capsule.

2. **Open Logs**

   Click the **Logs** tab.

3. **Switch log streams**

   Open **Capsule logs**, **Build logs**, or **Access logs** as listed. Scroll to the latest entries after a deploy.

## Troubleshooting

<details>
<summary>Build logs are empty</summary>

Trigger a new build from the **Deploy** tab or push to the connected branch, then refresh **Build logs**.

</details>
