---
slug: "/frontend/react"
title: "How to Host a React Application"
description: >-
  Deploy a React application on Code Capsules and see the first build start on
  the capsule's Builds tab.
sidebar_label: "React"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your React Application

Deploy a React application on Code Capsules and see the first build start on the capsule's **Builds** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and reach your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-react', description: 'Fork demo-react to your GitHub account.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Let Code Capsules list your repositories.'},
  ]}
/>

## Deploy your React app

1. **Start the React capsule**

   On **Quick Start**, click **Deploy Now** on the **React** card.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Frontend** under **Choose a Capsule**, then choose your Team and your Space. Click **Next**.

3. **Choose hosting**

   On **Hosting**, select **Static** and click **Next**.

4. **Choose a plan**

   On **Plan**, select **Free** and click **Next**.

5. **Connect the repository**

   On **Connect a Git Repository**, choose your fork of `demo-react` under **Git Repository**. Under **Branch**, choose `main`. Click **Next**.

6. **Set the build settings**

   On **Build & Deploy**, enter:

   - **Build Command:** `npm run build`
   - **Path to static content:** `build`

   Leave **Capsule Name** as it is and click **Create Capsule**.

7. **Check the build**

   Open the capsule's **Builds** tab. The first build is in progress.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The Git Repository dropdown is empty</summary>

GitHub isn't connected to your Team. Click **Configure Git for Code Capsules**, give access to your fork, and reopen the dropdown.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The Branch dropdown shows "No items found"</summary>

No repository is selected yet. Choose your fork under **Git Repository** first, then open **Branch**.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The wizard shows "Choose how your site is hosted to continue"</summary>

**Static** isn't selected on **Hosting**. Select it and click **Next**.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Capsule Details shows Backend instead of Frontend</summary>

**Choose a Capsule** is set to **Backend**. Switch it to **Frontend** before choosing your Team.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The Free plan can't be selected</summary>

You're already using all of your free capsules. Delete a free capsule you no longer need, or select **Paid**.

</details>
