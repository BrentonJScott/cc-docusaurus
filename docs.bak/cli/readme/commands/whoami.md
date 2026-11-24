---
slug: "/cli/readme/commands/whoami"
description: "Print the user currently logged into the CLI."
title: "Check Your CLI Session (whoami command)"
sidebar_label: "whoami"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# See Who You Are Logged In As

Print the user currently logged into the CLI.

## Overview

The `whoami` command reads the local session created by `login` and prints the associated account.

## Syntax

```bash
codecaps whoami
```

## Options

| Option | Required | Description |
| --- | --- | --- |
| — | — | This command has no flags |

## Examples

```bash
codecaps whoami
```

## Related

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/commands/login', label: '🔐 login', description: 'Create a CLI session.'},
    {type: 'link', href: '/cli/readme/commands/logout', label: '🚪 logout', description: 'Clear the current session.'},
    {type: 'link', href: '/cli/readme/getting-started/quick-start', label: '🛠️ Quick start', description: 'Typical first commands after install.'},
  ]}
/>