---
slug: "/products/frontend-capsule/container/deploy"
title: "How to Deploy a Container Frontend"
description: >-
  Deploy a static site or SPA on Code Capsules with Container hosting. When you finish, the container is running and the first build appears on the Deploy tab.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Frontend With Container Hosting

Deploy with Container hosting when you want an always-on web server, runtime logs, metrics, and scaling. When you finish, the container is running and the first build appears on the **Deploy** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
    {type: 'link', href: '/products/frontend-capsule/supported-runtimes', label: '📋 Build settings', description: 'Build command and output folder.'},
  ]}
/>

## Deploy your container frontend site

1. **Open the capsule wizard**

   Open your Space. Click the yellow **+** and select **New Capsule**.

2. **Choose capsule details**

   Choose **Frontend Capsule**, your Team, and Space. Click **Next**.

3. **Choose container hosting**

   On **Hosting**, select **Container**. Click **Next**.

4. **Choose a plan**

   On **Plan**, select a plan or **Custom** CPU, memory, and replicas. Click **Next**.

5. **Connect the repository**

   On **Configure**, select **Git Repository**, **Branch**, and **Repo subpath** if needed. Click **Next**.

6. **Set build settings**

   On **Deploy**, set **Build Command**, **Path to static content** (folder with `index.html`), and **Capsule Name**. Click **Build & Deploy**.

7. **Confirm the site**

   When the build finishes, open **Details** and load the capsule URL. The container serves HTTPS, SPA routing, and compression. See [Scale](/products/frontend-capsule/scale/), [Monitor](/products/frontend-capsule/monitor/), [Logs](/products/frontend-capsule/logs/), [Configure](/products/frontend-capsule/configure/), and [Framework Guides](/products/frontend-capsule/deploy/).

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The page is blank after a successful build</summary>

Confirm **Path to static content** matches the build output folder. See [Configure](/products/frontend-capsule/configure/) and runtime [Logs](/products/frontend-capsule/logs/).

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>