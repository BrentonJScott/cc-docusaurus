---
slug: "/cli/readme/commands/logout"
description: "Remove local authentication credentials. You will need to log in again before running any CLI commands."
title: "Log Out With the CLI (logout command)"
sidebar_label: "logout"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Log Out From Your Terminal

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Description

Remove local authentication credentials. You will need to log in again before running any CLI commands.

## Usage

```bash
codecaps logout
```

## Example Usage

```bash
codecaps logout
```

## Options

`No options`

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

