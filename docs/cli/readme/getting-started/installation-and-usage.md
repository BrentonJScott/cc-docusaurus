---
slug: "/cli/readme/getting-started/installation-and-usage"
title: "Install and Use the CLI"
description: "The Code Capsules CLI is registered as an NPM package. To install the CLI globally, simply run:"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Installation and Usage

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Installation

The Code Capsules CLI is registered as an NPM package. To install the CLI globally, simply run:

```bash
npm i -g @codecapsules/cli
```

## Usage

Once installed, the Code Capsules CLI follows the same standard format as most CLI applications:

The CLI can be called by using `codecaps`. The first argument to the CLI should be the desired command you want to call (for example, `login`, `logout`, or `proxy`). Each command has a list of arguments and options that can be passed in, respective to the command. You can view the list of all commands and their requirements [here](/cli/readme/commands/).

### Command Layout

Here is a visualized layout for using the Code Capsules CLI

```bash
codecaps <command> <arguments> [options]
```

## Next Steps

Now that you're ready to use the CLI, head over to the [quick start](/cli/readme/getting-started/quick-start/) section.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

