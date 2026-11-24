---
slug: "/products/database-capsule/postgresql/connect-locally"
title: "How to Connect to PostgreSQL Locally"
description: >-
  Connect to a PostgreSQL Capsule from your local machine using the Code Capsules CLI proxy and psql.
sidebar_label: "Connect Locally"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect to Your PostgreSQL Database From Your Machine

Connect to a private PostgreSQL Capsule with the CLI proxy and `psql`.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/getting-started/installation-and-usage', label: '🛠️ Code Capsules CLI', description: 'Install and run codecaps login.'},
    {type: 'link', href: '/products/database-capsule/postgresql/deploy', label: '🛠️ PostgreSQL Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Connect to your PostgreSQL database locally

1. **Install client tools**

   Install `psql` (PostgreSQL client). On macOS: `brew install libpq`.

2. **Open a proxy tunnel**

   Copy the proxy command from **Details** and run it, for example `codecaps proxy capsule -s <space> -c <id> -P 5432`.

3. **Copy credentials**

   On **Details**, reveal **Connection Details** and copy username, password, and database name.

4. **Connect with psql**

   Run `psql "postgresql://<username>:<password>@127.0.0.1:5432/<database>"` or use `-h`, `-p`, `-U`, and `-d` flags. Run `SELECT version();` to confirm the server version.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Connection refused</summary>

Confirm the proxy process is running and the local port matches your `psql` connection.

</details>