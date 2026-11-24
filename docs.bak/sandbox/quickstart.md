---
slug: "/sandbox/quickstart"
title: "Sandbox SDK Quick Start"
description: "Install the Sandbox SDK, set your API key, and run your first command in a Firecracker microVM."
sidebar_label: "Quick start"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Quick Start

Install a Sandbox SDK, authenticate with your API key, and run a command inside an ephemeral microVM.

## Overview

The Sandbox API provisions an isolated Linux microVM, runs your command, and deletes the VM when you finish. TypeScript and Python clients wrap the same REST API.

## Why it matters

Agents need a safe place to execute untrusted or generated code. Sandboxes provide real Linux environments without exposing your production Capsules.

## How it works

Join the waitlist for an API key, install `@codecapsules/sandbox` or `codecapsules-sandbox`, export `CODECAPSULES_API_KEY`, then call `Sandbox.using()` or `Sandbox.create()` and `exec()`. Upload files, stream output, and delete the sandbox when the context exits. See [Environments](/sandbox/environments/) for flavors and limits.

## When to use it

Use sandboxes for agent tool calls, CI-style test runs, or browser automation (`browser` flavor). Use a long-lived Backend Capsule when you need always-on services instead of ephemeral VMs.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/sandbox/typescript/api-reference', label: '📋 TypeScript API', description: 'Full SDK method reference.'},
    {type: 'link', href: '/sandbox/python/api-reference', label: '📋 Python API', description: 'Sync and async client reference.'},
    {type: 'link', href: '/sandbox/environments', label: '📋 Environments', description: 'Flavors and resource limits.'},
  ]}
/>