---
slug: "/products/docker-capsule/deployments"
title: "How to Manage Docker Container Deployments"
description: >-
  Manage Docker Capsule deployments on Code Capsules: change the source, choose a deployment strategy, read build logs, and roll back to a previous build.
sidebar_label: Deployments
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Manage, Roll Back, and Track Your Deployments

Every Docker Capsule deploy creates a build, whether Code Capsules [builds your Dockerfile from Git](/products/docker-capsule/git/builds/) or [pulls an existing image](/products/docker-capsule/image/updates/). This page covers the deployment settings and build history that work the same way for both.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/docker-capsule/git/deploy', label: '🛠️ Docker Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Manage your Docker deployments

1. **Open Deploy**

   Select the **Deploy** tab for source settings and deployment history.

2. **Change source**

   Click **Edit** in **Capsule Source** to change Git repository, branch, or image reference. Saving starts a new build.

3. **Pick a strategy**

   Set the deployment strategy for how new builds replace the running revision.

4. **Roll back**

   From build history, redeploy a previous successful build when you need to undo a release.

## Deploy tab

Open the **Deploy** tab to manage your capsule's source and deployment settings.

### Change the source

Click **Edit** in the **Capsule Source** section to:

- Change the repository or branch, for a capsule deployed from Git
- Change the image reference, for a capsule deployed from a container image

Saving a new source starts a new build and deploy.


### Deployment strategy

The **Deployment strategy** controls how Code Capsules updates the capsule when a new build completes.

| Strategy                     | Behavior                                         | Best for                                         |
| ---------------------------- | ------------------------------------------------ | ------------------------------------------------ |
| **Rolling update** (default) | New replicas start before old ones are removed   | Web applications with zero-downtime requirements |
| **Recreate**                 | All existing replicas stop before new ones start | Apps that cannot run two versions simultaneously |

Click **Edit** next to **Deployment Strategy** to change this setting. Saving does not restart or redeploy the capsule. The new strategy takes effect on the next deploy.

### Recent builds

The **Builds** panel on the **Deploy** tab lists recent builds. Click **View Logs** to open build output in the **Builds** tab, or click **Deploy** on a previous successful build to roll back.

Code Capsules retains a limited number of successful builds per capsule. The **Deploy** tab shows how many successful builds are stored (for example, `3 / 5 successful builds`).


## Build lifecycle

| Status        | Description                                       |
| ------------- | ------------------------------------------------- |
| **Starting**  | Build queued and initializing                     |
| **Building**  | Capsule is being built                            |
| **Succeeded** | Build completed and capsule running automatically |
| **Failed**    | Build encountered an error — check the build log  |
| **Cancelled** | Build was stopped before completion               |
| **Timed out** | Build exceeded the allowed duration               |

## View build logs

Open the **Builds** tab to view build history and logs:

- Select a build from the list on the left
- Read the full build log on the right

From the **Deploy** tab, click **View Logs** on a recent build to jump to the same view.

## Roll back to a previous build

To roll back:

1. Open the **Deploy** tab.
2. Find a successful build that is not currently deployed.
3. Click **Deploy**.

Rolling back uses an existing build — it does not trigger a new build or pull. Successful deployments use your configured [deployment strategy](#deployment-strategy).

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Cannot start a new build</summary>

Wait for the current build to finish or cancel it.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Build or deploy fails</summary>

For a capsule deployed from Git, see [Troubleshooting builds](/products/docker-capsule/git/builds/). For a capsule deployed from an existing image, see [Image deploy fails](/products/docker-capsule/image/updates/). If the deploy succeeds but your application does not work at runtime, see [Logs](/products/docker-capsule/logs/) and [Container requirements](/products/docker-capsule/container-requirements/).

</details>
