---
slug: "/cli/readme/commands/login"
description: "Authenticate the CLI with your Code Capsules account. This is required before running commands with the Code Capsules CLI."
title: "Log In With the CLI (login command)"
sidebar_label: "login"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Log In From Your Terminal

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Description

Authenticate the CLI with your Code Capsules account. This is required before running commands with the Code Capsules CLI.

## Usage

```bash
codecaps login -e <email> -p <password>
```

## Example usage

```bash
# without password
codecaps login -e my.cc.email@gmail.com

# or you can provide your password inline as an option (not recommended)
codecaps login -e my.cc.email@gmail.com -p MySecurePassword1234
```

## Options

* `-e, --email` (Required) The email of your Code Capsules account
* `-p, --password` (Optional) The password for your Code Capsules account. If not given, you will be prompted for your password.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

