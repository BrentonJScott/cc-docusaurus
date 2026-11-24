---
slug: "/products/agent-capsule/chat"
title: "Add a Chat Interface to an AI Agent"
description: >-
  Code Capsules provides an integrated chat window for Agent Capsules. In order for this to be fully functional, there are a few endpoints which the API...
sidebar_label: Chat
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Give Your AI Agent a Chat Interface

Code Capsules provides an integrated chat window for Agent Capsules. In order for this to be fully functional, there are a few endpoints which the API needs to expose.

## API Requirements

The deployed codebase needs to expose a few endpoints, each with their own pre-described payload. Data is always returned in the `ApiResponse` format. Errors are returned in the `Error` format.

[OpenAPI code-capsules-api](https://4401d86825a13bf607936cc3a9f3897a.r2.cloudflarestorage.com/gitbook-x-prod-openapi/raw/157e95dcd81da273043773a95905652dbf93006cff02555c2a4a5234bb652251.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=dce48141f43c0191a2ad043a6888781c%2F20260213%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260213T110851Z&X-Amz-Expires=172800&X-Amz-Signature=d167a230b7ddc95d4cedd6e56d834f066c0f410620b5f3e0b522406fa672adbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Endpoints

Below describes the endpoints required to use the integrated chat window:

\*Only one of these are required

### Request Headers from Code Capsules

All of the above endpoints will also be passed the following headers. This allows for some simple security when testing the agent using the integrated chat window:

