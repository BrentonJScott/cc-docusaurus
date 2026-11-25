---
slug: "/products/docker-capsule/container-requirements"
title: "Docker Container Runtime Requirements"
description: >-
  Make sure your container runs on a Code Capsules Docker Capsule: listen on the network port, bind to 0.0.0.0, start your app, and read the PORT variable.
sidebar_label: "Container Requirements"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Make Your Container Ready for Code Capsules

Every Docker Capsule must meet these runtime requirements whether built from Git or deployed from an image.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Meet your container requirements

1. **Listen on the network port**

   Your application must listen on the capsule **Network port** (default `3000`).

2. **Bind to all interfaces**

   Listen on `0.0.0.0`, not `127.0.0.1` or `localhost`, so the platform can route traffic into the container.

3. **Start on launch**

   The image must define `CMD` or `ENTRYPOINT` that starts your application when the capsule runs.

4. **Read PORT**

   Read the `PORT` environment variable so you can change the network port in **Config** without rebuilding. Bind with `$PORT`, `process.env.PORT`, or `os.environ["PORT"]`. Published images that ignore `PORT` (for example `nginx` on port `80`) need the capsule **Network port** set to match the image. When the container starts, your application is listening on the capsule's network port.

## Troubleshooting

<details>
<summary>The capsule URL does not respond</summary>

Confirm the app binds to `0.0.0.0` and the **Network port** matches the port the process listens on. Check the capsule's logs.

</details>