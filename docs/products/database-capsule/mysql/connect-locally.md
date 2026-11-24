---
slug: "/products/database-capsule/mysql/connect-locally"
title: "How to Connect to MySQL Locally"
description: >-
  Connect to a MySQL Database Capsule from your local machine using the Code Capsules CLI proxy and the mysql client.
sidebar_label: "Connect Locally"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect to Your MySQL Database From Your Machine

Connect to a private MySQL Capsule from your laptop with the Code Capsules CLI and the `mysql` client.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/getting-started/installation-and-usage', label: '🛠️ Code Capsules CLI', description: 'Install and run codecaps login.'},
    {type: 'link', href: '/products/database-capsule/mysql/deploy', label: '🛠️ MySQL Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Connect to your MySQL database locally

1. **Install the mysql client**

   On macOS: `brew install mysql-client`. On Ubuntu/Debian: `sudo apt install mysql-client`. See [MySQL Downloads](https://dev.mysql.com/downloads/mysql/) for other platforms.

2. **Open a proxy tunnel**

   On the capsule **Details** tab, copy the proxy command and run it in a terminal, for example `codecaps proxy capsule -s <space-slug> -c <capsule-id> -P 50001`. Leave the terminal open. See the [proxy command reference](/cli/readme/commands/proxy/).

3. **Copy credentials**

   On **Details**, click **show** in **Connection Details** and copy **Username**, **Password**, and **Database name**.

4. **Connect with mysql**

   Run `mysql -h 127.0.0.1 -P 50001 -u <username> -p <database>` using your proxy port. Use `SELECT VERSION();` to confirm the server version, or `mysqldump` / file import for backups.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Connection refused on 127.0.0.1</summary>

Confirm the `codecaps proxy` process is still running and the `-P` port matches your `mysql -P` flag.

</details>