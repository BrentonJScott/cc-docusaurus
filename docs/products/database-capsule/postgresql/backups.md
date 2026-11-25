---
slug: "/products/database-capsule/postgresql/backups"
title: "How to Back Up a PostgreSQL Database"
description: >-
  Create a manual backup for your PostgreSQL Capsule on Code Capsules. When you finish, a completed backup is listed on Backups and is available to restore.
sidebar_label: Backups
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Back Up Your PostgreSQL Database

Create a manual backup for your PostgreSQL Capsule on Code Capsules. When you finish, a completed backup is listed on **Backups** and is available to restore.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/products/database-capsule/postgresql/deploy', label: '🛠️ PostgreSQL Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Back up your PostgreSQL database

1. **Open the Capsule**

   On your **Space** dashboard, open the PostgreSQL Capsule.

2. **Open Backups**

   On the **Capsule** page, click the **Backups** tab.

3. **Create a backup**

   On **Backups**, click **Create backup**. Wait until the backup status shows **Completed**.

4. **Confirm the backup**

   On **Backups**, the new backup appears in the list with a timestamp and is available to restore.

## Troubleshooting

<details>
<summary>Backup stays in progress</summary>

Large databases take longer. If it fails, open **Logs** and retry when the capsule is healthy.

</details>