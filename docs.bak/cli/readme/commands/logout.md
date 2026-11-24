---
slug: "/cli/readme/commands/logout"
description: "Remove local authentication credentials. You must log in again before running CLI commands."
title: "Log Out With the CLI (logout command)"
sidebar_label: "logout"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Log Out From Your Terminal

Remove local authentication credentials. You must log in again before running CLI commands.

## Overview

The `logout` command deletes stored credentials on this machine. It does not change your Code Capsules account password.

## Syntax

```bash
codecaps logout
```

## Options

| Option | Required | Description |
| --- | --- | --- |
| — | — | This command has no flags |

## Examples

```bash
codecaps logout
```

## Related

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/commands/login', label: '🔐 login', description: 'Authenticate again after logout.'},
    {type: 'link', href: '/cli/readme/commands/whoami', label: '🔎 whoami', description: 'Verify whether a session is active.'},
    {type: 'link', href: '/cli/readme/commands', label: '📋 Commands', description: 'Full command list.'},
  ]}
/>