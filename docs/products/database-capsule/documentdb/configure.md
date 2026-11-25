---
slug: "/products/database-capsule/documentdb/configure"
title: "How to Configure a DocumentDB Database"
description: >-
  Update connection details and database settings for a DocumentDB Capsule on the Details and Config tabs. When you finish, your updated settings are saved.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your DocumentDB Database

Update connection details and database settings for a DocumentDB Capsule on the Details and Config tabs. When you finish, your updated settings are saved.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/products/database-capsule/documentdb/deploy', label: '🛠️ DocumentDB Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your documentdb database

1. **Open Details**

   Open the DocumentDB Capsule and select the **Details** tab.

2. **View connection details**

   Click **show** in **Connection Details** to reveal host, port, database name, username, password, and connection string.

3. **Rename the capsule**

   To change the display name, click **Edit** next to the capsule name in **Capsule Details**, then click **Save**.

4. **Open Config**

   Select the **Config** tab.

5. **Edit database settings**

   Click **Edit**, change the database settings you need, and click **Save**.

6. **Confirm the saved settings**

   Reload the page and return to **Config**. The updated database settings are saved.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>

