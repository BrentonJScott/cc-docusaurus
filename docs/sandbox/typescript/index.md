---
slug: "/sandbox/typescript"
title: "Sandbox SDK for TypeScript & Node.js"
description: "The @codecapsules/sandbox TypeScript SDK for creating and managing Firecracker microVM sandboxes."
sidebar_label: "TypeScript SDK"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# TypeScript SDK

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

`@codecapsules/sandbox` is the official TypeScript client for the Sandbox API.

The API is in private beta. [Join the waitlist](/docs/shared/create-an-account) to get an API key.

```bash
npm install @codecapsules/sandbox
```

Requires Node.js 18+.

## Basic usage

```typescript
import { Sandbox } from '@codecapsules/sandbox';

// Create, use, and auto-delete
await Sandbox.using(async (sb) => {
  const r = await sb.exec('python --version');
  console.log(r.stdout); // "Python 3.12.3\n"
});
```

## Lifecycle patterns

### `Sandbox.using()` (recommended for most cases)

Creates a sandbox, runs your function, and deletes the sandbox when done, even if the function throws.

```typescript
const output = await Sandbox.using(async (sb) => {
  const r = await sb.exec('python -c "print(1+1)"');
  return r.stdout.trim(); // "2"
}, { flavor: 'python-3.12' });
```

### Manual lifecycle

```typescript
const sb = await Sandbox.create({ flavor: 'node-20' });
try {
  const r = await sb.exec('node --version');
  console.log(r.stdout);
} finally {
  await sb.delete();
}
```

### TypeScript 5.2+ `await using`

```typescript
await using sb = await Sandbox.create();
const r = await sb.exec('echo hello');
// sb.delete() called automatically when the block exits
```

## Configuration

Set `CODECAPSULES_API_KEY` in your environment, or pass it explicitly:

```typescript
const sb = await Sandbox.create(
  { flavor: 'python-3.12' },
  { apiKey: 'your_api_key', timeout: 60_000, maxRetries: 3 }
);
```

## SDK reference

- [API Reference](/sandbox/typescript/api-reference/): `Sandbox` class, all methods, types, and error classes

## Links

- [npm · @codecapsules/sandbox](https://www.npmjs.com/package/@codecapsules/sandbox)
- [GitHub · codecapsules-io/sandbox](https://github.com/codecapsules-io/sandbox)

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

