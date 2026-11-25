---
slug: "/full-stack"
description: >-
  Deploy full-stack applications on Code Capsules with guides for MEAN, MERN,
  Next.js, Flask, and more.
title: "Full-Stack Application Hosting"
sidebar_label: "Full Stack"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Full-Stack Application Hosting

Deploy full-stack applications on Code Capsules with guides for MEAN, MERN, Next.js, Flask, and more.

## Overview

Full-stack hosting on Code Capsules means running the parts of one application as two or more capsules in the same Space. A typical setup is a database or storage capsule plus a Backend Capsule deployed from GitHub. Some applications add a Frontend or Docker Capsule.

## Why it matters

Full-stack applications have more than one moving part: a data store, an API or server, and often a separate user interface. Hosting them in one Space keeps those parts together, so you can deploy, configure, and scale each one on its own. It is for developers who deploy stacks such as MEAN, MERN, Flask with HTMX, or Next.js.

## How it works

Each part of the application runs in its own capsule, and all of the capsules sit in one Space.

### Database or storage capsule

A database capsule, such as MongoDB, or a storage capsule holds your application's data. The Backend Capsule connects to it.

### Backend Capsule

A Backend Capsule builds and runs your server code from a GitHub repository.

### Frontend or Docker Capsule

Some stacks serve the user interface from a separate Frontend Capsule, or run the whole application from a Docker Capsule.

Code Capsules has demo repositories for these stacks: `codecapsules-io/mean-stack` (MongoDB, Express, Angular, Node), `codecapsules-io/mern-stack` (MongoDB, Express, React, Node), and `codecapsules-io/demo-flask-htmx` (Flask, HTMX, persistent storage).

## When to use it

Use a full-stack setup when your application needs a data store and server code that you want to deploy and scale separately. A MEAN or MERN stack suits applications with a MongoDB database and a JavaScript front end. Flask with HTMX suits server-rendered pages that keep state in persistent storage.

A single capsule is simpler when your application has no separate database or front end. The trade-off is that a full-stack setup has more capsules to create and configure, and each capsule has its own plan and cost.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/tutorials/build-a-mern-job-board', label: '🎓 Build a MERN job board', description: 'Build and deploy a MERN application.'},
    {type: 'link', href: '/docs/backend/node.js/express.js', label: '🛠️ Host Express.js', description: 'Deploy a Node.js Backend Capsule.'},
    {type: 'link', href: '/docs/database/mysql/django-+-mysql', label: '🛠️ Django with MySQL', description: 'Deploy an app with a database capsule.'},
    {type: 'link', href: '/docs/products/frontend-capsule/deploy', label: '🛠️ Frontend framework guides', description: 'Deploy a Frontend Capsule.'},
  ]}
/>
