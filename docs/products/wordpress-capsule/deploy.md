---
slug: "/products/wordpress-capsule/deploy"
title: "How to Deploy a WordPress Site"
description: >-
  Deploy a WordPress site on Code Capsules with the managed WordPress Capsule. Set up hosting, database, and storage in minutes.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your WordPress Site

Deploy a WordPress application and learn how to host a content management system on Code Capsules.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/wordpress-capsule/deploy', label: '🛠️ WordPress Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Set Up

To follow this guide, you'll need a [Code Capsules](/docs/shared/create-an-account) account. WordPress can be downloaded and deployed automatically, or you can connect your Capsule to WordPress hosted on a GitHub repository.

Before creating your WordPress Capsule, you'll need a Team and a Space. You can follow these guides to learn how to create [Teams](/platform/teams/what-is-a-team/) and [Spaces](/platform/spaces/what-is-a-space/).

If you already have a Team and Space set up, log in to your Code Capsules account. On the dashboard, click the yellow **+** icon on the bottom left of the screen, then click **New Capsule**.

## Create the Capsule

A [Capsule](/platform/capsules/what-is-a-capsule/) provides the server for hosting an application on Code Capsules.

To create a WordPress Capsule, first choose **WordPress** as the Capsule type, as well as your Team and Space.

Next, choose your payment plan, or create a custom plan.

A WordPress Capsule requires a connection to a MySQL Database Capsule as well as to a Persistent Storage Capsule. Either select a previously created instance of each from the dropdowns, or click the yellow **+** next to each and follow the prompts for creating each Capsule. Click **Create Capsule**.

## Choose How To Deploy

### Default Deployment

To automatically download and deploy a WordPress version on Code Capsules:

1. Select the **Default** deployment type from the dropdown.
2. Choose your WordPress version.
3. Click **Next**.

### Git Managed

To deploy WordPress from your version control repository:

1. Select the **Git Managed** deployment type.
2. Select a repository.
3. Select the branch to deploy from.
4. Click **Next**.

You can read more about connecting your account to a version control provider in [this guide](/platform/account/connect-version-control/).

## Monitor Deployment

Code Capsules will automatically build and deploy your WordPress application. You can view the build log by selecting the **Logs** tab to monitor the deployment progress.

Once the build is complete, click the URL link in the **Details** tab to access your WordPress site.

## Set Up WordPress

When you first visit your WordPress site, you'll see the installation screen:

1. Enter your site title.
2. Create an admin username.
3. Set a strong password.
4. Provide your email address.
5. Click **Install WordPress**.

After installation, you'll see the WordPress Admin dashboard and can begin customizing your site.


## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
