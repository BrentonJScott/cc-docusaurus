---
slug: "/sandbox"
title: "AI Agent Sandboxes: Firecracker microVMs"
description: "Ephemeral isolated Linux environments for AI agents. Create a Firecracker microVM, run any command, and delete it via REST API."
sidebar_label: "Overview"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Sandbox SDK

Ephemeral isolated Linux environments for AI agents backed by Firecracker microVMs.

## Overview

Each sandbox is a hardware-isolated Linux microVM. Create it over the API or SDK, execute commands, upload files, and delete it when finished. Boot time is about 125ms. Nothing persists after deletion.

| Topic | Page |
| --- | --- |
| Quick start | [/sandbox/quickstart](/sandbox/quickstart) |
| Environments | [/sandbox/environments](/sandbox/environments) |
| TypeScript SDK | [/sandbox/typescript](/sandbox/typescript) |
| Python SDK | [/sandbox/python](/sandbox/python) |

## Examples

```typescript
import { Sandbox } from '@codecapsules/sandbox';

await Sandbox.using(async (sb) => {
  const r = await sb.exec('python -c "print(2 ** 32)"');
  console.log(r.stdout); // "4294967296\n"
});
```

```python
from codecapsules_sandbox import Sandbox

with Sandbox.create() as sb:
    result = sb.exec('python -c "print(2 ** 32)"')
    print(result.stdout)  # "4294967296\n"
```

The API is in private beta. [Join the waitlist](/docs/shared/create-an-account) for an API key.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/sandbox/quickstart', label: '🚀 Quick start', description: 'Install an SDK and run your first command.'},
    {type: 'link', href: '/sandbox/environments', label: '📋 Environments', description: 'Flavors, limits, and preinstalled tools.'},
    {type: 'link', href: '/sandbox/typescript/api-reference', label: '📋 TypeScript API', description: 'Methods, types, and errors.'},
    {type: 'link', href: '/sandbox/python/api-reference', label: '📋 Python API', description: 'Sync and async client reference.'},
  ]}
/>