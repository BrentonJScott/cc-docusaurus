---
slug: "/products/database-capsule/redis/configure"
title: "How to Configure a Redis Database"
description: >-
  Update connection details and database settings for a Redis Capsule on the Details and Config tabs. When you finish, your saved settings are visible on the capsule.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Redis Database

Update connection details and database settings for a Redis Capsule on the Details and Config tabs. When you finish, your saved settings are visible on the capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Configure your Redis database

1. **Open Details**

   In your Space, open the Redis Capsule and click the **Details** tab.

2. **View connection details**

   In **Connection Details**, click **Show**. The host, port, database name, username, password, and connection string appear.

3. **Rename the capsule**

   In **Capsule Details**, click **Edit** next to the capsule name, enter the new name, and click **Save**.

4. **Open Config**

   Click the **Config** tab.

5. **Edit the database settings**

   On **Config**, click **Edit**, change the settings you need, and click **Save**.

6. **Confirm the saved settings**

   Return to **Config**. The updated database settings you saved are shown.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>

