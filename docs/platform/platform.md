---
slug: "/platform/platform"
title: "Platform Overview"
description: >-
  How Teams, Spaces, and Capsules fit together on Code Capsules.
sidebar_label: "Platform overview"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Teams, Spaces, and Capsules

How Teams, Spaces, and Capsules fit together on Code Capsules.

## Overview

Code Capsules organizes your work in three layers: **Teams** for people and billing, **Spaces** for projects and regions, and **Capsules** for running services.

## Why it matters

Clear structure keeps billing, access, and deployments predictable. A solo developer still uses the same model: Personal Team → Space → Capsule.

## How it works

A Team owns Spaces. A Space owns Capsules in one region. Capsules connect to Git or images, build, and expose URLs.

A simple app is one Team, one Space, one Capsule. A full-stack app often uses one Space with a Frontend Capsule, a Backend Capsule, and a database Capsule.

## When to use it

| Pattern | Structure |
| --- | --- |
| Single React site | 1 Team · 1 Space · 1 Frontend Capsule |
| React + API + database | 1 Team · 1 Space · 3 Capsules |
| Separate clients | Multiple Teams or Spaces for billing isolation |

Add Teams when billing or people must split. Add Spaces when regions or projects must split. Add Capsules when a new service needs its own lifecycle.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/platform/teams/what-is-a-team', label: '💡 Teams', description: 'People, billing, and repos.'},
    {type: 'link', href: '/platform/spaces/what-is-a-space', label: '💡 Spaces', description: 'Projects and regions.'},
    {type: 'link', href: '/platform/capsules/what-is-a-capsule', label: '💡 Capsules', description: 'Where apps run.'},
    {type: 'link', href: '/platform/index', label: '📋 Platform guides index', description: 'All platform how-to pages.'},
  ]}
/>