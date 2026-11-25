---
slug: "/products/docker-capsule/configure"
title: "How to Configure a Docker Container"
description: >-
  Update the capsule parameters and environment variables of a Docker Capsule on Code Capsules. When you finish, your saved values appear on the Config tab.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Docker Container

Update the capsule parameters and environment variables of a Docker Capsule on Code Capsules. When you finish, your saved values appear on the **Config** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/products/docker-capsule/git/deploy', label: '🛠️ Docker Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Configure your Docker container

1. **Open Config**

   In your Space, open the Docker Capsule and click the **Config** tab. In **Capsule Parameters**, you can edit **Build** and **Runtime** one at a time.

2. **Save the build parameters (Git only)**

   In **Capsule Parameters**, click **Edit** next to **Build**. Set **Docker File** to the path of your Dockerfile from the repository root (the default is `/Dockerfile`) and **Docker Build Context** to the directory used as the build context (the default is `/`). Click **Save**, then confirm. Saving rebuilds and deploys the capsule.

3. **Save the runtime parameters**

   In **Capsule Parameters**, click **Edit** next to **Runtime**. Set **Network port** to the port your application listens on (the default is `3000`). Set **Health Check** to **Automatic** or **Manual**, and enter the **Endpoint** your application responds to, such as `/health`. With **Manual**, also set **Timeout (seconds)** and **Time to First Check (seconds)**. Click **Save**, then confirm. Saving redeploys the capsule without a new build.

4. **Save the environment variables**

   In the environment variables section of **Config**, click **Key/Val Editor** or **Text Editor**. Enter the variable **Name** and **Value**, then click **Save**. The capsule restarts with the new values. **Capsule Parameters** and the environment variables now show the values you saved.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
