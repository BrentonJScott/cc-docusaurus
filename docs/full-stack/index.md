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

# Full-stack hosting

Deploy full-stack applications on Code Capsules with guides for MEAN, MERN, Next.js, Flask, and more.

## Overview

Full-stack guides deploy two or more capsules in one Space: a database or storage capsule plus a Backend Capsule from GitHub. Some guides add a Frontend or Docker Capsule.

## Guides

| Guide | Stack | Demo repository |
| --- | --- | --- |
| [MEAN stack](/full-stack/mean-stack/) | MongoDB, Express, Angular, Node | `codecapsules-io/mean-stack` |
| [MERN stack](/full-stack/mern-stack/) | MongoDB, Express, React, Node | `codecapsules-io/mern-stack` |
| [Flask + HTMX](/full-stack/flask-+-htmx/) | Flask, HTMX, persistent storage | `codecapsules-io/demo-flask-htmx` |
| [Next.js](/full-stack/next.js/) | Next.js full-stack options | See [Next.js guides](/full-stack/next.js/) |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/database', label: '📋 Database hosting', description: 'Managed databases for full-stack apps.'},
    {type: 'link', href: '/backend', label: '📋 Backend hosting', description: 'Language-specific Backend Capsule guides.'},
    {type: 'link', href: '/frontend', label: '📋 Frontend hosting', description: 'Static and SPA Frontend Capsule guides.'},
  ]}
/>