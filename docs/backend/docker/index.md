---
slug: "/backend/docker"
title: "Docker Deployment Guides Reference"
description: >-
  Lists the Docker Capsule deployment guides and the Docker Capsule product pages.
sidebar_label: "Docker"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Docker Deployment Guides

Lists the Docker Capsule deployment guides and the Docker Capsule product pages.

## Overview

Docker Capsules build from a `Dockerfile` in a Git repository, or deploy an existing public container image.

## Deployment guides

| Guide | Stack | Demo repository |
|---|---|---|
| [Caddy Docker Site](/docs/backend/docker/caddy-docker-site) | Caddy | `codecapsules-io/hello-caddy` |
| [Docker Laravel App](/docs/backend/docker/docker-laravel-app) | Laravel | `codecapsules-io/laravel-docker-api` |
| [Docker PHP App](/docs/backend/docker/docker-php-app) | PHP | `codecapsules-io/demo-php-docker` |
| [Flask Docker App](/docs/backend/docker/flask-docker-app) | Flask | `codecapsules-io/docker-flask` |

## Product pages

| Page | Covers |
|---|---|
| [Docker Capsule overview](/docs/products/docker-capsule) | What a Docker Capsule is |
| [Container requirements](/docs/products/docker-capsule/container-requirements) | What a container needs to run |
| [Deploy from Git](/docs/products/docker-capsule/git/deploy) | Building from a `Dockerfile` |
| [Builds and auto-deploy](/docs/products/docker-capsule/git/builds) | Builds triggered by Git pushes |
| [Deploy from an image](/docs/products/docker-capsule/image/deploy) | Deploying a public container image |
| [Image updates](/docs/products/docker-capsule/image/updates) | Updating a deployed image |
| [Deployments](/docs/products/docker-capsule/deployments) | Deployment history |
| [Configure](/docs/products/docker-capsule/configure) | Capsule settings |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/products/docker-capsule', label: '📋 Docker Capsule', description: 'Look up how Docker Capsules work.'},
    {type: 'link', href: '/docs/backend', label: '📋 Backend hosting', description: 'Find guides for other backend stacks.'},
  ]}
/>
