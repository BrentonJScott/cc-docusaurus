---
slug: "/cli/readme/commands/proxy"
description: "Proxy a Capsule to your local machine with the Code Capsules CLI. Open a secure TCP tunnel to a database or other Capsule."
title: "Proxy a Database Connection With the CLI"
sidebar_label: "proxy"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Reach Your Database From Localhost

Proxy a Capsule to your local machine over a secure TCP tunnel.

## Overview

The `proxy` command forwards traffic from a local port to a Capsule that is not reachable on a public URL, such as Redis or MySQL.

## Syntax

```bash
codecaps proxy capsule -s <space slug> -c <capsule id> [-P <local port>]
```

## Arguments

| Argument | Required | Description |
| --- | --- | --- |
| `capsule` | Yes | Target to proxy; currently the only value is `capsule` |

## Options

| Option | Required | Description |
| --- | --- | --- |
| `-s`, `--space` | Yes | Space slug that contains the Capsule |
| `-c`, `--capsule` | Yes | Capsule ID to proxy |
| `-P`, `--port` | No | Local port for the tunnel; a random port is chosen when omitted |

## Examples

```bash
codecaps proxy capsule -s my-space-slug-123 -c 12345678 -P 50001
```

```bash
mysql -u root -p'MyPass' -h 127.0.0.1 -P 50001 app
```

## Related

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/getting-started/quick-start', label: '🛠️ Quick start', description: 'Copy a proxy command from the Capsule details page.'},
    {type: 'link', href: '/products/database-capsule/mysql/connect-locally', label: '📋 MySQL locally', description: 'Connect to a MySQL Capsule after proxying.'},
    {type: 'link', href: '/cli/readme/commands', label: '📋 Commands', description: 'Full command list.'},
  ]}
/>