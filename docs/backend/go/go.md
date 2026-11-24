---
slug: "/backend/go/go"
title: "How to Host a Go Application"
description: >-
  Deploy the Go demo app to a Backend Capsule and see it building in the Builds tab.
sidebar_label: "Go"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Go Application

Deploy the Go demo app to a Backend Capsule and see it building in the Builds tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork go-demo', description: 'Fork codecapsules-io/go-demo to your GitHub account.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/connect-github', label: '🔌 GitHub connected', description: 'Give Code Capsules access to your go-demo fork.'},
  ]}
/>

## Deploy your Go app

1. **Start a Backend Capsule**

   In your Space, click **+** to add a new capsule.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

4. **Connect the repository**

   On **Source Code**, select your `go-demo` fork as the **Repository** and `main` as the **Branch**. Click **Next**.

5. **Set the run command**

   On **Build and Deploy Settings**, leave **Run Command** blank.

6. **Create the capsule**

   Click **Create Capsule**. Open the **Builds** tab and you see the first build in progress.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The Repository dropdown doesn't list `go-demo`</summary>

Code Capsules doesn't have access to your fork. Add the repository to the Code Capsules GitHub app, then reopen the capsule wizard.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The app doesn't respond after the build finishes</summary>

The capsule may still be starting. Wait for the build to finish, then restart the capsule from its toggle and open the **URL** on the **Details** tab.

</details>
