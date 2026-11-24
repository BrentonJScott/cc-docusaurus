---
slug: "/persistent-storage"
description: >-
  Create a Persistent Storage Capsule, bind it to a backend app, and read or
  write files from your code or over WebDAV.
title: "How to Use Persistent Storage"
sidebar_label: "Persistent Storage"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Give Your App a Hard Drive

Create a Persistent Storage Capsule, bind it to a backend app, and read or write files from your code or over WebDAV.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/backend-capsule/deploy', label: '🛠️ Backend Capsule', description: 'Deploy an app to bind storage to.'},
  ]}
/>

## Use persistent storage

1. **Create a Persistent Storage Capsule**

   In your Space, click the yellow **+**, choose **New Capsule**, then **Persistent Storage**. Select a plan and click **Create Capsule**.

2. **Bind it to a Backend Capsule**

   Open the Backend Capsule **Config** tab. In **Bind Data Capsule**, select the storage Capsule and click **Bind**. Code Capsules sets `PERSISTENT_STORAGE_DIR` on the backend.

3. **Use the mount path in code**

   Read `PERSISTENT_STORAGE_DIR` in your application (`os.getenv` in Python or `process.env` in Node.js) and read or write files under that directory.

4. **Enable WebDAV browsing (optional)**

   On the Persistent Storage Capsule **Details** tab, toggle **Public Access** to browse files with WebDAV credentials. Connect from Finder, File Explorer, or your Linux file manager using the URL from the dashboard.

## Troubleshooting

<details>
<summary>The backend cannot see files on the volume</summary>

Confirm the storage Capsule is bound on **Config** and that your code uses the exact `PERSISTENT_STORAGE_DIR` value from the Capsule environment.

</details>