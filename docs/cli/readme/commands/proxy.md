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
    {type: 'link', href: '/docs/cli/readme/getting-started/installation-and-usage', label: '🛠️ Install and use', description: 'Install the CLI before proxying.'},
    {type: 'link', href: '/docs/cli/readme/commands', label: '📋 Commands', description: 'Full command list.'},
  ]}
/>
