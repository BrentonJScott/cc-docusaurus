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
| [Caddy Docker Site](/backend/docker/caddy-docker-site) | Caddy | `codecapsules-io/hello-caddy` |
| [Docker Laravel App](/backend/docker/docker-laravel-app) | Laravel | `codecapsules-io/laravel-docker-api` |
| [Docker PHP App](/backend/docker/docker-php-app) | PHP | `codecapsules-io/demo-php-docker` |
| [Flask Docker App](/backend/docker/flask-docker-app) | Flask | `codecapsules-io/docker-flask` |

## Product pages

| Page | Covers |
|---|---|
| [Docker Capsule overview](/products/docker-capsule) | What a Docker Capsule is |
| [Container requirements](/products/docker-capsule/container-requirements) | What a container needs to run |
| [Deploy from Git](/products/docker-capsule/git/deploy) | Building from a `Dockerfile` |
| [Builds and auto-deploy](/products/docker-capsule/git/builds) | Builds triggered by Git pushes |
| [Deploy from an image](/products/docker-capsule/image/deploy) | Deploying a public container image |
| [Image updates](/products/docker-capsule/image/updates) | Updating a deployed image |
| [Deployments](/products/docker-capsule/deployments) | Deployment history |
| [Configure](/products/docker-capsule/configure) | Capsule settings |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/docker-capsule', label: '📋 Docker Capsule', description: 'Look up how Docker Capsules work.'},
    {type: 'link', href: '/backend', label: '📋 Backend hosting', description: 'Find guides for other backend stacks.'},
  ]}
/>
