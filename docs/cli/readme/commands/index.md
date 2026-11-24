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

Each command is a subcommand of `codecaps`. Pass global options before the command name. See each page for syntax, flags, and examples.

| Command | Short description |
| --- | --- |
| `login` | Log in to the Code Capsules CLI |
| `logout` | Log out of the Code Capsules CLI |
| `proxy` | Proxy a capsule to your local machine |
| `whoami` | Print the logged-in user |

| Command | Page |
| --- | --- |
| `login` | [/cli/readme/commands/login](/cli/readme/commands/login) |
| `logout` | [/cli/readme/commands/logout](/cli/readme/commands/logout) |
| `proxy` | [/cli/readme/commands/proxy](/cli/readme/commands/proxy) |
| `whoami` | [/cli/readme/commands/whoami](/cli/readme/commands/whoami) |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/getting-started/quick-start', label: '🛠️ Quick start', description: 'Install the CLI and log in.'},
    {type: 'link', href: '/cli/readme/global-options', label: '⚙️ Global options', description: 'Flags shared by every command.'},
    {type: 'link', href: '/cli', label: '📋 CLI overview', description: 'Return to the CLI hub.'},
  ]}
/>