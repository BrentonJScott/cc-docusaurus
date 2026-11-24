---
slug: "/cli/readme/getting-started/quick-start"
description: >-
  Log in with the Code Capsules CLI and proxy a Capsule to your local machine.
title: "CLI Quick Start Guide"
sidebar_label: "Quick Start"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Your First Deploy From the Terminal

Log in with the Code Capsules CLI and proxy a Capsule to your local machine.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/cli/readme/getting-started/installation-and-usage', label: '🛠️ CLI installed', description: 'Install the CLI globally from npm.'},
  ]}
/>

## Run your first CLI workflow

1. **Log in to the CLI**

   ```bash
   codecaps login -e <your email>
   ```

   Enter your password when prompted. You can pass `-p` for a non-interactive login, but storing passwords in shell history is risky.

2. **Confirm the session**

   ```bash
   codecaps whoami
   ```

   The command prints the email for the active session.

3. **Proxy a Capsule**

   On the Capsule **Details** page, copy the provided proxy command. It has the form:

   ```bash
   codecaps proxy capsule -s <space slug> -c <capsule id> -P <local port>
   ```

   For a Redis Capsule proxied on port `6379`, connect with:

   ```bash
   redis-cli -u "redis://localhost:6379"
   ```

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Login fails with invalid credentials</summary>

Reset your password from the Code Capsules account settings, then run `codecaps login` again.

</details>