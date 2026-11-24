---
slug: "/products/wordpress-capsule/backups"
title: "How to Back Up a WordPress Site"
description: "WordPress stores content in two locations:"
sidebar_label: Backups
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Back up your Backups

Create and view backups for your WordPress Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/wordpress-capsule/deploy', label: '🛠️ WordPress Capsule', description: 'Create the Capsule first.'},
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
