---
slug: "/products/storage-capsule/configure"
title: "How to Configure a Persistent Storage"
description: >-
  Rename a Storage Capsule, enable WebDAV public access, and bind the volume to application capsules.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Persistent Storage

Manage Storage Capsule settings on the **Details** and **Config** tabs.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/storage-capsule/deploy', label: '🛠️ Storage Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your Storage Capsule

1. **Rename the capsule**

   On **Details**, click **Edit** in **Capsule Details** and save a new name.

2. **Enable WebDAV access**

   Toggle **Public Access** when you need authenticated WebDAV browsing. This does not make files publicly readable without credentials.

3. **View WebDAV credentials**

   Click **show** in **WebDAV Connection Information** for server URL, username, and password.

4. **Bind to an application**

   From a Backend or Docker Capsule **Config** tab, click **Bind** on the Storage Capsule. Use `PERSISTENT_STORAGE_DIR` in your code.

## Troubleshooting

<details>
<summary>Bind does not appear</summary>

Confirm the Storage Capsule is in the same Space as the application capsule.

</details>