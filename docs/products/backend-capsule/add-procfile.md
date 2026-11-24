---
slug: "/products/backend-capsule/add-procfile"
title: "Add a Procfile to a Backend Capsule"
description: >-
  How to add a Procfile to a Backend Capsule on Code Capsules to define which processes run and how they start. Optional, but useful for custom commands.
sidebar_label: Procfile
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Add a Procfile to a Backend Application

A Procfile tells the Backend Capsule which processes to run and how to start them. You can also set run commands in the **Config** tab instead.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/backend-capsule/deploy', label: '🛠️ Backend Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Add your Procfile

1. **Create the Procfile**

   Add a file named `Procfile` (uppercase **P**, no extension) at the repository root. Each line uses `<process type>: <command>`, for example `web: python3 -m flask run --host=0.0.0.0 --port=$PORT`.

2. **Define process types**

   Common types are `web`, `worker`, and `clock`. Pair each type with the command that starts it, including port and host where required.

3. **Commit and deploy**

   Push the `Procfile` to the branch your Backend Capsule deploys. Python apps often require a Procfile; Express and Java apps are usually detected without one.

4. **Confirm in the dashboard**

   Open **Deploy** and confirm the new revision built. If the process fails, compare your Procfile command with the **Run Command** field on **Config**.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The capsule ignores the Procfile</summary>

Confirm the file is named `Procfile` at the repository root, not in a subfolder. Set **Run Command** on **Config** if you need to override detection.

</details>