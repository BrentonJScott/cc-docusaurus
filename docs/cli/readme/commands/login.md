---
slug: "/cli/readme/commands/login"
description: "Authenticate the CLI with your Code Capsules account. Required before other CLI commands."
title: "Log In With the CLI (login command)"
sidebar_label: "login"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Log In From Your Terminal

Authenticate the CLI with your Code Capsules account. Required before other CLI commands.

## Overview

The `login` command stores a local session after you prove ownership of a Code Capsules account.

## Syntax

```bash
codecaps login -e <email> [-p <password>]
```

## Options

| Option | Required | Description |
| --- | --- | --- |
| `-e`, `--email` | Yes | Email for your Code Capsules account |
| `-p`, `--password` | No | Password inline; omit to get an interactive prompt |

## Examples

```bash
codecaps login -e my.cc.email@gmail.com
```

```bash
codecaps login -e my.cc.email@gmail.com -p MySecurePassword1234
```

## Related

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/commands/whoami', label: '🔎 whoami', description: 'Confirm which account is logged in.'},
    {type: 'link', href: '/cli/readme/commands/logout', label: '🚪 logout', description: 'Clear the local session.'},
    {type: 'link', href: '/cli/readme/getting-started/quick-start', label: '🛠️ Quick start', description: 'Install the CLI and run your first command.'},
  ]}
/>