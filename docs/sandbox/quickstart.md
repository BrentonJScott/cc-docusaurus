---
slug: "/sandbox/quickstart"
title: "Sandbox SDK Quick Start"
description: "Install the Sandbox SDK, set your API key, and run your first command in a Firecracker microVM."
sidebar_label: "Quick start"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Quick Start

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

Get a sandbox running in under five minutes.

## 1. Get your API key

[Join the waitlist](/docs/shared/create-an-account). We'll email you an API key when your spot is ready.

## 2. Install the SDK

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ts" label="TypeScript">

```bash
npm install @codecapsules/sandbox
```

Requires Node.js 18 or later.

</TabItem>
<TabItem value="py" label="Python">

```bash
pip install codecapsules-sandbox
```

Requires Python 3.9 or later.

</TabItem>
</Tabs>

## 3. Set your API key

```bash
export CODECAPSULES_API_KEY=your_api_key_here
```

Both SDKs read `CODECAPSULES_API_KEY` automatically. You can also pass it explicitly; see the API reference for each SDK.

## 4. Run your first command

<Tabs>
<TabItem value="ts" label="TypeScript">

```typescript
import { Sandbox } from '@codecapsules/sandbox';

await Sandbox.using(async (sb) => {
  const r = await sb.exec('python --version');
  console.log(r.stdout);   // "Python 3.12.3\n"
  console.log(r.exitCode); // 0
});
// sandbox deleted automatically
```

</TabItem>
<TabItem value="py" label="Python">

```python
from codecapsules_sandbox import Sandbox

with Sandbox.create() as sb:
    result = sb.exec("python --version")
    print(result.stdout)    # "Python 3.12.3\n"
    print(result.exit_code) # 0
```

</TabItem>
</Tabs>

## 5. Install packages and run a script

<Tabs>
<TabItem value="ts" label="TypeScript">

```typescript
import { Sandbox } from '@codecapsules/sandbox';
import { readFileSync } from 'fs';

await Sandbox.using(async (sb) => {
  // Install a dependency
  await sb.exec('pip install httpx');

  // Upload a script
  await sb.upload('/workspace/fetch.py', readFileSync('./fetch.py'));

  // Run it
  const r = await sb.exec('python /workspace/fetch.py');
  console.log(r.stdout);

  // Download the output
  const output = await sb.download('/workspace/result.json');
  console.log(JSON.parse(Buffer.from(output).toString()));
});
```

</TabItem>
<TabItem value="py" label="Python">

```python
from codecapsules_sandbox import Sandbox
import json

with Sandbox.create() as sb:
    # Install a dependency
    sb.exec("pip install httpx")

    # Upload a script
    sb.upload("/workspace/fetch.py", open("fetch.py", "rb").read())

    # Run it
    sb.exec("python /workspace/fetch.py")

    # Download the output
    raw = sb.download("/workspace/result.json")
    result = json.loads(raw)
    print(result)
```

</TabItem>
</Tabs>

## Next steps

- [Environments](/sandbox/environments/): choose the right flavor for your workload
- [TypeScript SDK reference](/sandbox/typescript/api-reference/)
- [Python SDK reference](/sandbox/python/api-reference/)

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

