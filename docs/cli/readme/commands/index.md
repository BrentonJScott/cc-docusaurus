---
slug: "/cli/readme/commands"
description: Commands available via the Code Capsules CLI
title: "CLI Commands Reference"
sidebar_label: "Commands"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Every CLI Command at a Glance

Commands you can run after installing the Code Capsules CLI and logging in.

## Overview

Each command is a subcommand of `codecaps`. Pass global options before the command name. Only `proxy` has its own page.

## Commands

| Command | Short description |
| --- | --- |
| `login` | Log in to the Code Capsules CLI |
| `logout` | Log out of the Code Capsules CLI |
| [`proxy`](/docs/cli/readme/commands/proxy) | Proxy a capsule to your local machine |
| `whoami` | Print the logged-in user |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/cli/readme/getting-started/installation-and-usage', label: '🛠️ Install and use', description: 'Install the CLI before running commands.'},
    {type: 'link', href: '/docs/cli/readme/commands/proxy', label: '📋 Proxy command', description: 'Syntax and options for proxy.'},
    {type: 'link', href: '/docs/cli', label: '📋 CLI overview', description: 'Return to the CLI hub.'},
  ]}
/>
