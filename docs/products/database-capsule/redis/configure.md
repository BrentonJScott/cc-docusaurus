---
slug: "/products/database-capsule/redis/configure"
title: "How to Configure a Redis Database"
description: >-
  Configure a Redis Capsule on Code Capsules: view connection details, connect from your local machine, and rename the capsule from the Details tab.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Redis Database

Configure a Database Capsule in the **Details** tab of the Capsule dashboard.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/redis/deploy', label: '🛠️ Redis Capsule', description: 'Create the Capsule first.'},
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

Redis Capsules are not publicly accessible. To connect from your laptop—for example, to inspect keys or run Redis commands—open a secure tunnel with the Code Capsules CLI and connect with `redis-cli`. See [Connect Locally](/products/database-capsule/redis/connect-locally/) for the full workflow, client installation, and examples.

## Edit Capsule Name

To change the name of the Capsule, click **Edit** next to the Capsule name in the **Capsule Details** section.
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
