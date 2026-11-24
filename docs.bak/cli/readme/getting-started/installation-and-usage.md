---
slug: "/cli/readme/getting-started/installation-and-usage"
title: "Install and Use the CLI"
description: >-
  Install the Code Capsules CLI from npm and confirm the `codecaps` command runs in your terminal.
sidebar_label: "Installation"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Installation and Usage

Install the Code Capsules CLI from npm and confirm the `codecaps` command runs in your terminal.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
  ]}
/>

## Install the CLI

1. **Install the npm package**

   The CLI is published as `@codecapsules/cli`. Install it globally:

   ```bash
   npm i -g @codecapsules/cli
   ```

2. **Confirm the binary**

   Run `codecaps` with no arguments. Help output lists available commands.

3. **Learn the command layout**

   Commands follow `codecaps <command> <arguments> [options]`. Global options sit before the command name. See the [commands reference](/cli/readme/commands/) for each subcommand.

## Troubleshooting

<details>
<summary>The codecaps command is not found</summary>

Confirm Node.js and npm are on your PATH, then reinstall with `npm i -g @codecapsules/cli`.

</details>