---
slug: "/products/database-capsule/mysql/configure"
title: "How to Configure a MySQL Database"
description: >-
  View connection details and settings for a MySQL Capsule on the Details and Config tabs.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your MySQL Database

Manage connection details and capsule settings from the dashboard.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/mysql/deploy', label: '🛠️ MySQL Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your MySQL database

1. **Open Details**

   Open the MySQL Capsule and select the **Details** tab.

2. **View connection details**

   Click **show** in **Connection Details** to reveal host, port, database name, username, password, and connection string.

3. **Rename the capsule**

   To change the display name, click **Edit** next to the capsule name in **Capsule Details**, then save.

4. **Set MySQL options**

   On the **Config** tab, open **MySQL Configuration**. Click **Edit** to set **SQL modes** or the **MySQL server version**. See [MySQL Versions](/products/database-capsule/mysql/versions/).

5. **Connect from your laptop**

   See [Connect Locally](/products/database-capsule/mysql/connect-locally/) when you need CLI access.


## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>

