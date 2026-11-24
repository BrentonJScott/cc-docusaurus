---
slug: "/products/docker-capsule/image/updates"
title: "How to Update a Deployed Docker Image"
description: >-
  Keep an image-based Docker Capsule up to date on Code Capsules: pull and deploy a newer tag, pin versions, change the image, and fix failed image deploys.
sidebar_label: "Image Updates"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Keep Your Container Image Up to Date

When your Docker Capsule is [deployed from an existing image](/products/docker-capsule/image/deploy/), Code Capsules pulls your image and runs it. There is no Dockerfile build on Code Capsules. This page covers how image deploys work and how to deploy a new version.

For deploy history, logs, and rollback, see [Deployments](/products/docker-capsule/deployments/).

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/docker-capsule/git/deploy', label: '🛠️ Docker Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Update your Docker image

1. **Pull a new version**

   On **Deploy**, click **Pull & Deploy** to pull the configured tag again and deploy.

2. **Change the image reference**

   Edit **Capsule Source** when you need a different repository or tag.

3. **Read the deployed digest**

   On **Deploy**, compare **Deployed digest** with the registry to confirm which revision is live.

4. **Roll back if needed**

   Use [Deployments](/products/docker-capsule/deployments/) history to redeploy a previous import.

## How image deploys work

Each deploy pulls the image, records **Deployed digest**, and runs the capsule on success.

Each pull appears in the **Builds** tab as an **Image import**, with its own log.

## Image source

The **Capsule Source** section on the **Deploy** tab shows the **Image** and the **Deployed digest**, which identifies the exact version of the image that is running. Before the first deploy, it shows **Not deployed yet**.

## Deploy a newer version

Each deploy runs the exact version of the image that was pulled. Publishing a new image to the same tag does not update your capsule automatically, and auto-deploy is not available for image deploys.

To deploy the latest version of your tag:

1. Open the **Deploy** tab.
2. Click **Pull & Deploy**, then confirm.

If the tag now points to a newer version of the image, that version is deployed.


## Change the image

1. Click **Edit** in the **Capsule Source** section of the **Deploy** tab.
2. Enter a new **Image reference**.
3. Click **Save**, then confirm.

Saving a different image starts a new deploy. To build from a Git repository instead, create a new Docker Capsule with **Git repository** as the source. You can't change the source of an existing capsule.

## Troubleshooting

<details>
<summary>Image deploy fails</summary>

Check that the **Image reference** is spelled correctly and that the tag exists. Confirm the image is public. Private images are not supported. Confirm the image is hosted on a supported public registry, such as Docker Hub or GitHub Container Registry.

</details>

<details>
<summary>Newer image not deployed</summary>

Publishing a new image does not update your capsule. Click **Pull & Deploy** to pull the tag again. If you reference an image by digest, change the image reference to deploy a different version.

</details>

<details>
<summary>The image deploys but the app does not respond</summary>

See [Logs](/products/docker-capsule/logs/) and [Container requirements](/products/docker-capsule/container-requirements/).

</details>
