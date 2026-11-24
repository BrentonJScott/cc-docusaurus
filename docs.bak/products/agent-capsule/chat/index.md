---
slug: "/products/agent-capsule/chat"
title: "Add a Chat Interface to an AI Agent"
description: >-
  HTTP endpoints and headers your Agent Capsule API must expose for the integrated Code Capsules chat window.
sidebar_label: Chat
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Agent Chat API Reference

HTTP endpoints and headers your Agent Capsule API must expose for the integrated Code Capsules chat window.

## Overview

The deployed agent must implement a small REST API. Responses use the `ApiResponse` format; errors use the `Error` format. Only one chat-style endpoint implementation is required for the integrated UI.

## API contract

The full OpenAPI document lists paths, payloads, and schemas:

[OpenAPI code-capsules-api](https://4401d86825a13bf607936cc3a9f3897a.r2.cloudflarestorage.com/gitbook-x-prod-openapi/raw/157e95dcd81da273043773a95905652dbf93006cff02555c2a4a5234bb652251.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=dce48141f43c0191a2ad043a6888781c%2F20260213%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260213T110851Z&X-Amz-Expires=172800&X-Amz-Signature=d167a230b7ddc95d4cedd6e56d834f066c0f410620b5f3e0b522406fa672adbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Endpoints

Implement the endpoints described in the OpenAPI document for the integrated chat window. At least one of the documented chat routes must be present.

### Request headers

Code Capsules forwards additional headers on each request. Use them to authenticate chat traffic when testing the agent from the dashboard.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/agent-capsule/deploy', label: '🛠️ Deploy Agent Capsule', description: 'Create and ship an agent.'},
    {type: 'link', href: '/products/agent-capsule/configure', label: '⚙️ Configure agent', description: 'Model and runtime settings.'},
    {type: 'link', href: '/products/agent-capsule/templates', label: '📋 Agent templates', description: 'Prebuilt agent starting points.'},
  ]}
/>