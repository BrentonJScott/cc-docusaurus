---
slug: "/products/docker-capsule/configure"
title: "How to Configure a Docker Container"
description: >-
  Configure a Docker Capsule on Code Capsules: set the network port, Dockerfile path, and build context, add environment variables, and bind data capsules.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Docker Container

Configure a Docker Capsule in the **Config** tab. Settings here control how your capsule is built, how traffic reaches your application, and how the capsule connects to other services in your Space. Most settings apply to every Docker Capsule. Settings marked **Git deployments only** apply only to capsules [deployed from Git](/products/docker-capsule/git/deploy/).

The capsule source and deployment strategy are managed in the **Deploy** tab — see [Deployments](/products/docker-capsule/deployments/).

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/docker-capsule/git/deploy', label: '🛠️ Docker Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Capsule parameters

The **Capsule Parameters** section is split into **Build** and **Runtime**, each with its own **Edit** link:

| Section     | Settings                            | When you save                             |
| ----------- | ----------------------------------- | ----------------------------------------- |
| **Build**   | Docker File, Docker Build Context   | Rebuilds and deploys the capsule          |
| **Runtime** | Network port, Health check          | Redeploys the capsule, without a new build |

To change a setting:

1. Click **Edit** next to **Build** or **Runtime**.
2. Update the settings.
3. Click **Save**, then confirm.

You can edit one section at a time.

### Build settings


Build settings are only shown for capsules [deployed from Git](/products/docker-capsule/git/deploy/). Capsules [deployed from an existing image](/products/docker-capsule/image/deploy/) are not built by Code Capsules.

#### Docker File

The **Docker File** field is the path to your Dockerfile from the repository root. The default is `/Dockerfile`.

Examples:

| Repository layout         | Docker File                | Docker Build Context   |
| ------------------------- | -------------------------- | ---------------------- |
| `Dockerfile` at root      | `/Dockerfile`              | `/` _(or leave empty)_ |
| `api/Dockerfile`          | `/api/Dockerfile`          | `/api`                 |
| `services/web/Dockerfile` | `/services/web/Dockerfile` | `/services/web`        |

#### Docker Build Context

The **Docker Build Context** is the directory passed to `docker build` as the build context. The default is the repository root (`/`).

Set a subdirectory when your Dockerfile and application code live in a nested folder. The build context can also be a URL to a **public** Git repository — in that case, the repository is downloaded and used as the build context.


### Runtime settings


#### Network port

The **Network Port** is the port your application listens on. Code Capsules routes HTTPS traffic to this port and configures ingress accordingly. The default is `3000`.

Your application must listen on this port when the capsule runs. If you deploy an image that always listens on a fixed port, set the network port to match — see [Images that use a fixed port](/products/docker-capsule/container-requirements/#images-that-use-a-fixed-port). Code Capsules also injects a `PORT` environment variable set to this value, so your app can read the port at runtime. See [Container requirements](/products/docker-capsule/container-requirements/#use-the-port-environment-variable) for how to use `PORT` in your application.

#### Health check

A health check tells Code Capsules when your application is ready for traffic, and restarts replicas that stop responding. To set one:

1. In the **Capsule Parameters** section, click **Edit** next to **Runtime**.
2. Set **Health Check** to **Automatic** or **Manual**.
3. Enter the **Endpoint** your application responds to, for example `/health`. With **Manual**, also set **Timeout (seconds)** and **Time to First Check (seconds)**.
4. Click **Save**, then confirm.

See [Health checks](/platform/capsules/health-checks/) for each setting, how failing replicas are handled, and how to write a good endpoint.

## Environment variables

Each Docker Capsule receives platform-injected variables automatically:

| Variable  | Description                                |
| --------- | ------------------------------------------ |
| `PORT`    | The network port your app should listen on |
| `APP_URL` | The public URL of your capsule             |

To add custom environment variables:

1. Open the **Config** tab.
2. Click **Key/Val Editor** or **Text Editor** in the environment variables section.
3. Enter the variable **Name** and **Value**.
4. Click **Save**.

Saving environment variables restarts the capsule with the new values. A new build is not required.

To view sensitive values, click **show** in the top-right corner of the variables table.

## Connect data capsules

### Database Capsule

See the [Database Capsule](/products/database-capsule/) documentation for creating and managing database instances.

In the **Data capsules** section of the **Config** tab, click **View** next to a Database Capsule to see its connection details.

Click **+** next to the connection string to create a `DATABASE_URL` environment variable in your Docker Capsule. Your application can use this variable to connect to the database.

### Storage Capsule

A [Storage Capsule](/products/storage-capsule/deploy/) provides persistent file storage that survives capsule restarts and redeploys.

In the **Data capsules** section, click **Bind** next to your Storage Capsule. Both capsules must be running to bind.

During the bind process, Code Capsules creates a `PERSISTENT_STORAGE_DIR` environment variable and restarts your Docker Capsule. Reference this path in your application to read and write files that persist across capsule restarts and redeploys.
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
