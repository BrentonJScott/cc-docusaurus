---
slug: "/sandbox/python"
title: "Sandbox SDK for Python"
description: "The codecapsules-sandbox Python SDK for creating and managing Firecracker microVM sandboxes."
sidebar_label: "Python SDK"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Python SDK

The `codecapsules-sandbox` package is the official Python client for the Sandbox API.

## Overview

Install `codecapsules-sandbox` on Python 3.9+, set `CODECAPSULES_API_KEY`, and use `Sandbox` or `AsyncSandbox` to create microVMs, run commands, and upload or download files.

## Why it matters

Python agents and notebooks can run untrusted code in isolation without managing Firecracker directly.

## How it works

```bash
pip install codecapsules-sandbox
```

```python
from codecapsules_sandbox import Sandbox

with Sandbox.create() as sb:
    result = sb.exec("python --version")
    print(result.stdout)  # "Python 3.12.3\n"
```

Use a context manager so the sandbox deletes on exit, or call `Sandbox.create()` and `delete()` manually. `AsyncSandbox` exposes the same API with `async`/`await`. Pass `api_key`, `timeout`, and `max_retries` to `create()` when you do not rely on environment variables alone.

The API is in private beta. [Join the waitlist](/docs/shared/create-an-account) for an API key.

## When to use it

Choose the Python SDK when your agent or automation already runs on Python. Use the TypeScript SDK for Node-based tools.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/sandbox/python/api-reference', label: '📋 API reference', description: 'Sandbox, AsyncSandbox, and exceptions.'},
    {type: 'link', href: '/sandbox/quickstart', label: '🚀 Quick start', description: 'First command in a sandbox.'},
    {type: 'link', href: '/sandbox/typescript', label: '📋 TypeScript SDK', description: 'Node client for the same API.'},
  ]}
/>