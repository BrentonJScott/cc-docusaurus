---
slug: "/backend/go"
title: "Go Hosting Reference"
description: >-
  The Go deployment guides for Code Capsules and what each one deploys.
sidebar_label: "Go"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Go Hosting

The Go deployment guides for Code Capsules and what each one deploys.

## Overview

Go apps deploy to a Backend Capsule from a branch of a GitHub repository. Each push to that branch redeploys the capsule.

## Guides

| Guide | Deploys | Demo repository |
|---|---|---|
| [Go](/backend/go/go) | A Go web app | `codecapsules-io/go-demo` |
| [Go Telegram Bot](/backend/go/go-telegram-bot) | A Telegram echo bot | `codecapsules-io/go-telegram-echobot` |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/backend', label: '📋 Backend hosting', description: 'Compare the other backend languages.'},
    {type: 'link', href: '/products/backend-capsule/supported-runtimes', label: '📋 Supported runtimes', description: 'Check which Go versions you can deploy.'},
  ]}
/>
