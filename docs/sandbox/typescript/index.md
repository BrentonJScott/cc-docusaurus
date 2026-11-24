---
slug: "/sandbox/typescript"
title: "Sandbox SDK for TypeScript & Node.js"
description: "The @codecapsules/sandbox TypeScript SDK for creating and managing Firecracker microVM sandboxes."
sidebar_label: "TypeScript SDK"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# TypeScript SDK

The `@codecapsules/sandbox` package is the official TypeScript client for the Sandbox API on Node.js 18+.

## Overview

Install from npm, set `CODECAPSULES_API_KEY`, and use `Sandbox.using()` for automatic cleanup or `Sandbox.create()` for manual lifecycle control.

## Installation

| Item | Value |
| --- | --- |
| Package | `@codecapsules/sandbox` |
| Node.js | 18+ |
| Install | `npm install @codecapsules/sandbox` |

## Lifecycle patterns

| Pattern | When to use |
| --- | --- |
| `Sandbox.using()` | Recommended: auto-delete when the callback finishes |
| `Sandbox.create()` + `delete()` | Manual control |
| `await using` (TS 5.2+) | Explicit async disposal |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/sandbox/typescript/api-reference', label: '📋 API reference', description: 'Methods, types, and errors.'},
    {type: 'link', href: '/sandbox/quickstart', label: '🚀 Quick start', description: 'Run your first sandbox command.'},
    {type: 'link', href: '/sandbox/python', label: '📋 Python SDK', description: 'Python client for the same API.'},
  ]}
/>