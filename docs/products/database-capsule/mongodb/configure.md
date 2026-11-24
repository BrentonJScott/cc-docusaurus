---
slug: "/products/database-capsule/mongodb/configure"
title: "How to Configure a MongoDB Database"
description: >-
  Configure a MongoDB Capsule on Code Capsules: view connection details, get the public connection string, rename the capsule, and set the MongoDB version.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your MongoDB Database

Configure a MongoDB Capsule from the **Details** and **Config** tabs of the Capsule dashboard.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/mongodb/deploy', label: '🛠️ MongoDB Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## View Connection Details

The **Details** tab provides connection details once the capsule is ready.

Click **show** in the **Connection details** section to view:

- Database name
- Username
- Password

While the capsule is still being created, an info message explains that connection details will appear when provisioning completes.

## Public Connection String

MongoDB Capsules provide a **Public Connection String** on the **Details** tab. This string is available once the capsule has been created and is the URI your applications should use to connect.

Click **show** next to **Public Connection String** to reveal the value, then use the copy icon to copy it to your clipboard.

The string uses the `mongodb+srv://` format and includes embedded credentials.

## Edit Capsule Name

To change the name of the Capsule, click **Edit** next to the Capsule name in the **Capsule Details** section on the **Details** tab.

## Configure MongoDB Version


Additional MongoDB configuration is available in the **Config** tab.

In the **MongoDB Configuration** section, click **Edit** to change the MongoDB server version on Dedicated clusters.

You can upgrade to a newer supported version; downgrades are not supported.

If your capsule uses the **latest** version option, MongoDB is automatically upgraded to the newest available version when it is released.

See [Versions](/products/database-capsule/mongodb/versions/) for supported versions and upgrade paths.
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
