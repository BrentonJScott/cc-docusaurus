---
slug: "/products/database-capsule/mysql/configure"
title: "How to Configure a MySQL Database"
description: >-
  Configure a MySQL Capsule on Code Capsules: view connection details, connect from your machine, and set SQL modes and the MySQL version.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your MySQL Database

Configure a Database Capsule in the **Details** tab of the Capsule dashboard.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/mysql/deploy', label: '🛠️ MySQL Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## View Connection Details

The **Details** tab provides connection details for a Database Capsule.

Click **show** in the **Connection Details** section to view database credentials:

- Host
- Port
- Database name
- Username
- Password
- Connection string

## Connect from Your Local Machine

MySQL Capsules are not publicly accessible. To connect from your laptop—for example, to run SQL or check your server version—open a secure tunnel with the Code Capsules CLI and connect with the `mysql` client. See [Connect Locally](/products/database-capsule/mysql/connect-locally/) for the full workflow, client installation, and examples.

## Edit Capsule Name

To change the name of the Capsule, click **Edit** next to the Capsule name in the **Capsule Details** section.

## Configure MySQL Settings


Additional MySQL configuration is available in the **Config** tab of MySQL Capsules.

### Set SQL Modes

In the **MySQL Configuration** section, click **Edit** to select SQL modes for your MySQL server.

SQL modes determine how MySQL handles queries and data validation. Common options include:

- `STRICT_TRANS_TABLES` - Enables strict mode for transactional tables
- `NO_ZERO_DATE` - Prevents the use of invalid date values
- `ONLY_FULL_GROUP_BY` - Requires `GROUP BY` to list all selected columns

### Set MySQL Version

In the **MySQL Configuration** section, you can select the MySQL server version for your Capsule.

Supported major versions are **5.7** and **8.0**. Major version upgrades must be done one step at a time (for example, 5.7 to 8.0).

See [MySQL Versions](/products/database-capsule/mysql/versions/) for supported versions and upgrade paths.
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
