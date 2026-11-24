---
slug: "/products/database-capsule/documentdb/configure"
title: "How to Configure a DocumentDB Database"
description: >-
  Configure a DocumentDB Capsule on Code Capsules: view connection details, connect from your local machine, rename it, and bind it to your application.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your DocumentDB Database

DocumentDB Capsules are configured from the **Details** tab. There is no **Config** tab for DocumentDB — server settings are managed by the platform.


## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/documentdb/deploy', label: '🛠️ DocumentDB Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## View connection details

The **Details** tab provides connection details once provisioning completes. While the capsule is still being created, an info message explains that details will appear when the capsule is ready.

Click **show** in the **Connection details** section to view:

- Host
- Port (default `27017`)
- Database name
- Username
- Password
- Connection string

The connection string uses TLS:

```
mongodb://<username>:<password>@<host>:<port>/<database>?tls=true&tlsAllowInvalidCertificates=true
```

Use the copy icon next to any value to copy it to your clipboard.

## Connect from your local machine

DocumentDB Capsules are not publicly accessible. To connect from your laptop—for example, to run queries or check your server version—open a secure tunnel with the Code Capsules CLI and connect with `mongosh`. See [Connect Locally](/products/database-capsule/documentdb/connect-locally/) for the full workflow, client installation, and examples.

## Edit capsule name

Click **Edit** next to the capsule name in the **Capsule Details** section to rename the capsule.

## Bind to an application capsule

DocumentDB Capsules are accessed privately from other capsules in the same Space. They do not support public access or custom domains.

To provide connection details to a Backend, Docker, or Agent Capsule:

1. Open the application capsule's **Config** tab.
2. In the **Data capsules** section, click **View** next to your DocumentDB Capsule.
3. Copy individual values or click **+** next to **Connection string** to create a `DATABASE_URL` environment variable.

Available environment variables include:

| Variable            | Description                             |
| ------------------- | --------------------------------------- |
| `DATABASE_URL`      | Full MongoDB connection string with TLS |
| `DATABASE_HOST`     | Private hostname                        |
| `DATABASE_PORT`     | Port number                             |
| `DATABASE`          | Database name                           |
| `DATABASE_USER`     | Username                                |
| `DATABASE_PASSWORD` | Password                                |

Saving environment variables on the application capsule restarts it with the new values.
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
