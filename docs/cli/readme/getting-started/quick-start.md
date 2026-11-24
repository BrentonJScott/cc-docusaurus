---
slug: "/cli/readme/getting-started/quick-start"
description: "To use the CLI, log in to your Code Capsules account."
title: "CLI Quick Start Guide"
sidebar_label: "Quick Start"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Your First Deploy From the Terminal

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Quick Start

### 1. Log in to the CLI

To use the CLI, log in to your Code Capsules account.

```bash
codecaps login -e <your email>
```

You will be prompted for your password. For security reasons, it is not recommended to provide your password inline, but is supported via the `-p` or `--password` flag:

```bash
codecaps login -e <your email> -p <your password>
```

Once logged in, you can ensure you are logged into the correct account using the `whoami` command:

```bash
codecaps whoami
```



### 2. Proxy a Capsule to Your Local Machine

Using the CLI, you can access any Capsule through a secure connection without exposing it publicly. For example, Redis Capsules cannot be accessed through a public domain. The `proxy` command allows you to access your Capsule by creating a safe tunnel between your local machine and the Capsule.

The proxy command is used as follows:

```bash
codecaps proxy capsule -s <space slug> -c <capsule id> -P <local port>
```

You won't need to memorize your Space slug or Capsule id to run the command. Instead, just head over to your Capsule _details_ page on Code Capsules and copy the provided proxy command.

For example, for a Redis Capsule with id `abc-123` in a Space with slug `space-123`, the command to proxy this capsule would be:

```bash
codecaps proxy capsule -s space-123 -c abc-123 -P 6379
```

The Redis capsule then becomes available locally on port 6379, which can be accessed using:

```bash
redis-cli -u "redis://localhost:6379"
```

The above example is extensible to any of our available Capsule types.

_Note: any local port can be supplied using the `-P <port>` flag. If the flag is not provided, a random port will be used._



You can view the full list of available commands [here](/cli/readme/commands/).

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

