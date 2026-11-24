---
slug: "/database/redis"
description: >-
  Create a Redis Data Capsule on Code Capsules and bind it to a Backend Capsule.
  When you finish, the capsule shows a build in progress on the Deploy tab.
title: "How to Host a Redis Instance"
sidebar_label: "Redis"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Redis Instance

Create a Redis Data Capsule on Code Capsules and bind it to a Backend Capsule. When you finish, the first build or provision step completes on the capsule **Deploy** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Create your Redis capsule

1. **Open the capsule wizard**

   Open the Space for the Redis instance. Click the yellow **+** and select **New Capsule**.

2. **Choose Redis**

   On **Capsule Details**, choose **Redis**, your Team, and Space. Click **Next**.

3. **Choose a plan**

   On **Plan**, select a payment option. Click **Create Capsule**.

4. **Wait for provisioning**

   On the capsule **Deploy** tab, confirm the capsule status leaves **Creating** when provisioning finishes.

5. **Bind the Redis capsule to a Backend Capsule**

   Open the Backend Capsule **Config** tab. Under **Data capsules**, click **View** next to the Redis capsule.

6. **Add the connection URL**

   Click **+** next to **Connection string** to create a `REDIS_URL` environment variable on the Backend Capsule. Click **Save**.

## Troubleshooting

<details>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>