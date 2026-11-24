---
slug: "/products/storage-capsule/backups"
title: "How to Back Up a Persistent Storage"
description: >-
  Configure manual and automatic backups for your Storage Capsule to protect uploaded media and files.
sidebar_label: Backups
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Back up your Backups

Create and view backups for your Storage Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/storage-capsule/deploy', label: '🛠️ Storage Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Run a backup

1. **Open Backups**

   Open the Capsule and select the **Backups** tab.

2. **Start a backup**

   Click **Create backup** or **Backup now** as labeled on your cluster.

3. **Confirm completion**

   Wait until the backup status shows **Completed**. The backup appears in the list with a timestamp.

## Troubleshooting

<details>
<summary>Backup stays in progress</summary>

Large databases take longer. If it fails, open **Logs** and retry when the capsule is healthy.

</details>
