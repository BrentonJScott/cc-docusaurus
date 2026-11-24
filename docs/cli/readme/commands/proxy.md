---
slug: "/cli/readme/commands/proxy"
description: "Proxy a Capsule to your local machine with the Code Capsules CLI. Set up a secure TCP tunnel to a MySQL or other Capsule and connect local tools."
title: "Proxy a Database Connection With the CLI"
sidebar_label: "proxy"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Reach Your Database From Localhost

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Description

Proxy a capsule to your local machine. For example, if you have a MySQL Capsule running on Code Capsules, this command will set up a secure TCP tunnel to give you access to the MySQL instance via a local port.

## Usage

```bash
codecaps proxy capsule -s <space slug> -c <capsule id> -P <local port>
```

## Example Usage

```bash
# proxy a mysql capsule to local port 50001
codecaps proxy capsule -s my-space-slug-123 -c 12345678 -P 50001

# connect to the MySQL instance via the proxy tunnel
mysql -u root -p'MyPass' -h 127.0.0.1 -P 50001 app
```

## Arguments

* `<target>` (Required) The target to create a proxy to. Currently, the only available value for this argument is  "`capsule`"

## Options

* `-s, --space` (Required) The slug of the Space in which the desired Capsule resides
* `-c, --capsule` (Required) The ID of the desired Capsule to proxy
* `-P, --port` (Optional) The local port to set up the tunnel on. If not provided, a random port will be used

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

