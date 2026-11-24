---
slug: "/database/mongodb"
description: >-
  MongoDB deployment and framework guides for managed MongoDB Capsules on Code
  Capsules.
title: "MongoDB Hosting Reference"
sidebar_label: "MongoDB"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# MongoDB hosting

MongoDB deployment and framework guides for managed MongoDB Capsules on Code Capsules.

## Overview

MongoDB Capsules are managed clusters on MongoDB Atlas. Connection details appear on the capsule **Details** tab as a public connection string in `mongodb+srv://` format.

## Guides

| Guide | Deploys | Demo repository |
| --- | --- | --- |
| [Django + MongoDB](/database/mongodb/django-+-mongodb/) | Django with MongoDB | `codecapsules-io/demo-django-mongodb` |
| [Express + MongoDB](/database/mongodb/express-+-mongodb/) | Express.js with MongoDB | `codecapsules-io/demo-express-mongodb` |
| [Flask + MongoDB](/database/mongodb/flask-+-mongodb/) | Flask with MongoDB | `codecapsules-io/demo-flask-mongo` |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/database-capsule/mongodb/deploy', label: '🛠️ Deploy MongoDB', description: 'Create a MongoDB Capsule in the dashboard.'},
    {type: 'link', href: '/database', label: '📋 Database hosting', description: 'Compare MySQL, PostgreSQL, and Redis options.'},
    {type: 'link', href: '/products/database-capsule/mongodb/configure', label: '📋 MongoDB configuration', description: 'Connection strings and environment variables.'},
  ]}
/>