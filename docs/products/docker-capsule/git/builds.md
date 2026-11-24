---
slug: "/products/docker-capsule/git/builds"
title: "How to Build Docker Images From Git"
description: >-
  Build a Docker Capsule from Git on Code Capsules: manual builds, auto-deploy on push, Dockerfile path and build context, and fixing failed builds.
sidebar_label: "Builds & Auto-deploy"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Build and Auto-Deploy Your Dockerfile From Git

When your Docker Capsule is [deployed from Git](/products/docker-capsule/git/deploy/), Code Capsules builds a new image from your repository each time a build starts, then deploys it. This page covers how builds are triggered and configured.

For build history, logs, and rollback, see [Deployments](/products/docker-capsule/deployments/).

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/docker-capsule/git/deploy', label: '🛠️ Docker Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Manage your Docker builds

1. **Understand the pipeline**

   Each build clones your branch, runs `docker build` with your Dockerfile path and context, stores the image, and deploys on success.

2. **Trigger a manual build**

   Open **Deploy** and start a build from the dashboard when you need a rebuild without a Git push.

3. **Enable auto-deploy**

   Turn on auto-deploy so pushes to the linked branch start a new build.

4. **Fix Dockerfile paths**

   Set **Docker File** and **Docker Build Context** on **Config** when the Dockerfile is not at the repository root.

A Git repository must be linked before you can build. Private repositories are supported when your version control account has been connected to Code Capsules.

## Trigger a build

### Initial build on creation

When a Docker Capsule is created with a linked repository, Code Capsules automatically starts a fresh first build. No manual action is required.

### Manual build

1. Open the **Deploy** tab on your Docker Capsule.
2. Click **Build & Deploy**, then confirm.
3. Open the **Builds** tab to follow the build log.

Manual builds work regardless of the **auto-deploy** setting.

### Auto-deploy

**Auto-deploy** controls whether Code Capsules automatically rebuilds your capsule when you push commits to the linked Git branch. It is **enabled by default**.

| Setting          | Behavior                                                                |
| ---------------- | ----------------------------------------------------------------------- |
| **On** (default) | Each push to the linked branch triggers a new build                     |
| **Off**          | Git pushes are ignored; trigger builds manually with **Build & Deploy** |

Toggle auto-deploy with the switch in the **Auto Build & Deploy** section of the **Deploy** tab.

## Repository and branch

The **Capsule Source** section on the **Deploy** tab shows the linked **Repo** and **Branch**. Click **Edit** to change the repository or branch. Saving a new repository or branch starts a new build.

To deploy an existing image instead, create a new Docker Capsule with **Container image** as the source. You can't change the source of an existing capsule.

## Dockerfile path and build context

Set the **Docker File** path and **Docker Build Context** in the **Build** part of the **Capsule Parameters** section in the **Config** tab. Changing either one starts a new build. See [Docker File](/products/docker-capsule/configure/#docker-file) and [Docker Build Context](/products/docker-capsule/configure/#docker-build-context) for examples, including monorepo layouts.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Build fails immediately</summary>

Confirm a repository is linked to the capsule. Check that the linked branch exists and contains your Dockerfile.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Docker build errors</summary>

Read the full build log in the **Builds** tab. Verify the [Docker File](/products/docker-capsule/configure/#docker-file) path and [Docker Build Context](/products/docker-capsule/configure/#docker-build-context) in the **Config** tab. Test locally: `docker build -f <dockerfile-path> <context-path>`.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Missing files in build context</summary>

If your Dockerfile references files outside the configured build context, the build fails. Check the [Docker Build Context](/products/docker-capsule/configure/#docker-build-context) in the **Config** tab, or move the files inside the context.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Auto-deploy not triggering</summary>

Verify [auto-deploy](#auto-deploy) has not been turned off. Confirm you pushed to the branch linked to the capsule, not a different branch. Check that no other build is already running.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The build succeeds but the app fails at runtime</summary>

See [Logs](/products/docker-capsule/logs/) and [Container requirements](/products/docker-capsule/container-requirements/).

</details>
