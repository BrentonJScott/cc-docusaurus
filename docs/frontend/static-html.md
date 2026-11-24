---
slug: "/frontend/static-html"
description: >-
  Deploy a static HTML site on Code Capsules. When you finish, the first build is
  in progress on the Deploy tab Builds section.
title: "How to Host a Static HTML Website"
sidebar_label: "Static HTML"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Static HTML Website

Deploy a static HTML site on Code Capsules. When you finish, the first build is in progress on the **Deploy** tab **Builds** section.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-html', description: 'Fork codecapsules-io/demo-html on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
  ]}
/>

## Deploy your static HTML site

1. **Open the capsule wizard**

   Open the Space for this app. Click the yellow **+** and select **New Capsule**.

2. **Choose capsule details**

   On **Capsule Details**, choose **Frontend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose static hosting**

   On **Hosting**, select **Static**. Click **Next**.

4. **Choose a plan**

   On **Plan**, select **Free**. Click **Next**.

5. **Connect the repository**

   On **Configure**, select the **Git Repository** `codecapsules-io/demo-html` and the branch `main`. Click **Next**.

6. **Set build settings**

   On **Deploy**, leave **Build Command** empty and set **Path to static content** to `/`. Click **Build & Deploy**.

7. **Check the build**

   On the capsule **Deploy** tab, open **Builds**. The first build is in progress or queued.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The Git Repository dropdown is empty</summary>

You have not connected GitHub, or the fork is missing from the granted repositories. Follow [Configure Git for Code Capsules](/docs/shared/configure-git-for-code-capsules) and confirm `codecapsules-io/demo-html` is listed.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The site loads but index.html is not found</summary>

`codecapsules-io/demo-html` serves files from the repository root. Set **Path to static content** to `/` and leave **Build Command** empty.

</details>