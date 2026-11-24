---
slug: "/products/docker-capsule/image/deploy"
title: "How to Deploy an Existing Docker Image"
description: >-
  Deploy a public container image to a Docker Capsule. When you finish, Pull & Deploy has started the first image import on the Deploy tab.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your Existing Container Image

Run a public image from Docker Hub, GitHub Container Registry, or another public registry. When you finish, **Pull & Deploy** has started on the **Deploy** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/docker-capsule/container-requirements', label: '📋 Container requirements', description: 'Port and listen address.'},
  ]}
/>

## Deploy your Docker image

1. **Open the capsule wizard**

   Open your Space. Click **+** and select **New Capsule**.

2. **Choose Docker Capsule**

   Select **Docker Capsule**, your Team, and Space. Click **Next**.

3. **Choose plan**

   On **Plan**, select a plan. Click **Next**.

4. **Select container image source**

   On **Source**, select **Container image**. Enter the image reference (for example `nginx:1.27` or `ghcr.io/org/app:v1`). Click **Next**.

5. **Name the capsule**

   On **Deploy**, confirm the image and enter **Capsule Name**. Click **Create Capsule**.

6. **Pull and deploy**

   Open **Deploy** and click **Pull & Deploy**, then confirm. Track progress on **Builds** as **Image import**.

7. **Verify and manage updates**

   Open the capsule URL on **Details**. Set [Network port](/products/docker-capsule/configure/#network-port) to match the image. Use [Image Updates](/products/docker-capsule/image/updates/) and [Deployments](/products/docker-capsule/deployments/) for later changes.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Image deploy fails</summary>

Confirm the registry is public and the tag exists. See [Image deploy fails](/products/docker-capsule/image/updates/#image-deploy-fails).

</details>