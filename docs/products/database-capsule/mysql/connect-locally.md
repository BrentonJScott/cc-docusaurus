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

MySQL Capsules are private to your Space. To run queries, inspect data, or check your server version from your laptop, open a secure tunnel with the [Code Capsules CLI](/cli/) and connect with the `mysql` client.

## When to Use This

Use a local connection when you need to:

- Run ad-hoc SQL or inspect tables
- Check your MySQL version before an upgrade
- Import or export data with `mysqldump`
- Debug application issues against the live database

## Prerequisites

1. Install and log in to the [Code Capsules CLI](/cli/readme/getting-started/installation-and-usage/) (`codecaps login`).
2. Install the `mysql` client on your machine (see [Install the mysql client](#install-the-mysql-client) below).

## Open a Proxy Tunnel

1. Open your MySQL Capsule **Details** tab and copy the pre-built proxy command.
2. Run the command in a terminal. For example:

```bash
codecaps proxy capsule -s <space-slug> -c <capsule-id> -P 50001
```

3. Leave this terminal open. The tunnel stays active until you stop the process.

See the [proxy command reference](/cli/readme/commands/proxy/) for full options.

## Get Credentials

On the capsule **Details** tab, click **show** in the **Connection Details** section to reveal:

- **Username**
- **Password**
- **Database name**

Copy these values from the **Details** tab. The `mysql` client does not accept a `mysql://` connection string the way `psql` accepts a PostgreSQL URI — pass each value as a separate flag instead.


## Install the mysql Client

The `mysql` command-line client is distributed under the [GPL-2.0 license](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html).

| Platform        | Install                                                             |
| --------------- | ------------------------------------------------------------------- |
| macOS           | `brew install mysql-client`                                         |
| Ubuntu / Debian | `sudo apt install mysql-client`                                     |
| Windows         | [MySQL Community Downloads](https://dev.mysql.com/downloads/mysql/) |

Official installation guides: [MySQL Downloads](https://dev.mysql.com/downloads/mysql/)

## Connect

With the proxy running, connect using the credentials from the **Details** tab and your local proxy port:

```bash
mysql -h 127.0.0.1 -P 50001 -u <username> -p <database>
```

Replace `50001` with the port you passed to `-P` when starting the proxy. The `-p` flag prompts for your password interactively.

To pass the password on the command line (less secure, but useful in scripts):

```bash
mysql -h 127.0.0.1 -P 50001 -u <username> -p'<password>' <database>
```

This matches the [proxy command example](/cli/readme/commands/proxy/): host and port point at the tunnel on your machine; username, password, and database come from Connection Details.


## Common Tasks

### Check your MySQL version

```sql
SELECT VERSION();
```

See [MySQL Versions](/products/database-capsule/mysql/versions/) for supported versions and upgrade paths.

### Export a database

```bash
mysqldump -h 127.0.0.1 -P 50001 -u <username> -p'<password>' <database> > backup.sql
```

### Import a SQL file

```bash
mysql -h 127.0.0.1 -P 50001 -u <username> -p'<password>' <database> < backup.sql
```
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
