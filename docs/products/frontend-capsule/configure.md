---
slug: "/products/frontend-capsule/configure"
title: "How to Configure a Frontend App"
description: >-
  To configure your Frontend Capsule, navigate to the \"Config\" tab.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Frontend App

To configure your Frontend Capsule, navigate to the "Config" tab. These settings work the same way for [Static](/products/frontend-capsule/static/deploy/) and [Container](/products/frontend-capsule/container/deploy/) hosting.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/frontend-capsule/static/deploy', label: '🛠️ Frontend Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Set Capsule Parameters

Frontend settings are in the **Build** part of the **Capsule Parameters** section. To change them:

1. Click **Edit** next to **Build**.
2. Update the settings.
3. Click **Save**, then confirm.

Frontend Capsules have no **Runtime** settings.


### Project Path

The **Project Path** is where your HTML files are located. The default is `/`, which works for most projects.

### Build Command

The **Build command** runs your build. The default is `Auto`, which automatically detects and runs your build process.

### Build Output Directory

The **Build Output Directory** is where your built files end up. Leave it as `/` if you're not using a build process.

## Environment Variables

Frontend Capsules automatically get these environment variables:
- `APP_URL` - Your capsule's public URL

To view variable values, click "show" in the "Environment Variables" section.

To add custom variables:

1. Click "Key/Val Editor" or "Text Editor" in the "Environment Variables" section
2. Edit the variable "Name" and "Value"
3. Click "Save"

Environment variables are available to your build command, so frameworks can include them in your site when it's built (for example, Vite's `VITE_` variables or Create React App's `REACT_APP_` variables). They aren't read again after the build. On static capsules, saving a change to your environment variables starts a new build.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
