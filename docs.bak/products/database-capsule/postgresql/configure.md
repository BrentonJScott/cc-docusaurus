---
slug: "/products/database-capsule/postgresql/configure"
title: "How to Configure a PostgreSQL Database"
description: >-
  View connection details and settings for a PostgreSQL Capsule on the Details and Config tabs.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your PostgreSQL Database

Manage connection details and capsule settings from the dashboard.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/postgresql/deploy', label: '🛠️ PostgreSQL Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your postgresql database

1. **Open Details**

   Open the PostgreSQL Capsule and select the **Details** tab.

2. **View connection details**

   Click **show** in **Connection Details** to reveal host, port, database name, username, password, and connection string.

3. **Rename the capsule**

   To change the display name, click **Edit** next to the capsule name in **Capsule Details**, then save.



4. **Connect from your laptop**

   See [Connect Locally](/products/database-capsule/postgresql/connect-locally/) when you need CLI access.


## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>

