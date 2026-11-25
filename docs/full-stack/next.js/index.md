---
slug: "/full-stack/next.js"
description: >-
  Full-stack Next.js deployment guides on Code Capsules with Express.js,
  MongoDB, or Flask and Caddy.
title: "Next.js Full-Stack Hosting"
sidebar_label: "Next.js"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Next.js full-stack hosting

Full-stack Next.js deployment guides on Code Capsules with Express.js, MongoDB, or Flask and Caddy.

## Overview

These guides combine a Next.js or Node backend capsule with a database capsule or extra Docker capsule in the same Space.

## Guides

| Guide | Deploys | Demo repository |
| --- | --- | --- |
| [Next.js + Express.js](/docs/full-stack/next.js/next.js-+-express.js) | Next.js with Express API | `codecapsules-io/nextjs-expressjs-demo` |
| Next.js + MongoDB | Next.js with MongoDB | `codecapsules-io/demo-next-mongodb-api` |
| [Flask and Caddy file share](/docs/full-stack/next.js/static-file-share-with-flask-and-caddy) | Flask uploads and Caddy file server | `codecapsules-io/flask-file-uploads`, `codecapsules-io/caddy-file-server` |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/full-stack/next.js/next.js-+-express.js', label: '💡 Next.js + Express.js', description: 'How the combined app runs in one Backend Capsule.'},
    {type: 'link', href: '/docs/full-stack/next.js/static-file-share-with-flask-and-caddy', label: '📋 Flask and Caddy share', description: 'Flask uploads with a Caddy file server.'},
    {type: 'link', href: '/docs/database/mongodb', label: '📋 MongoDB hosting', description: 'MongoDB capsule and framework guides.'},
    {type: 'link', href: '/docs/frontend', label: '📋 Frontend hosting', description: 'Static framework deployment guides.'},
  ]}
/>
