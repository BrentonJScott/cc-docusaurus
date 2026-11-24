---
slug: "/sandbox"
title: "AI Agent Sandboxes: Firecracker microVMs"
description: "Ephemeral isolated Linux environments for AI agents. Create a Firecracker microVM, run any command, and delete it via REST API."
sidebar_label: "Overview"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Sandbox SDK

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

Run untrusted code safely. The Sandbox API gives your AI agent a real Linux environment: create it, run anything, delete it.

Each sandbox is a Firecracker microVM: hardware-isolated, not a container. Boot time is ~125ms. Everything is deleted when you're done.

## What's in this section

- [Quick start](/sandbox/quickstart/): install, set your API key, run your first command
- [Environments](/sandbox/environments/): available flavors and what's preinstalled
- [TypeScript SDK](/sandbox/typescript/): `@codecapsules/sandbox` on npm
- [Python SDK](/sandbox/python/): `codecapsules-sandbox` on PyPI

## The three-line version

```typescript
import { Sandbox } from '@codecapsules/sandbox';

await Sandbox.using(async (sb) => {
  const r = await sb.exec('python -c "print(2 ** 32)"');
  console.log(r.stdout); // "4294967296\n"
});
// sandbox deleted automatically
```

```python
from codecapsules_sandbox import Sandbox

with Sandbox.create() as sb:
    result = sb.exec('python -c "print(2 ** 32)"')
    print(result.stdout)  # "4294967296\n"
```

## Access

The API is in private beta. [Join the waitlist](/docs/shared/create-an-account) and you'll get an API key when your spot is ready.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

