---
slug: "/platform/spaces/what-is-a-space"
title: "What Is a Space?"
description: >-
  A Space groups related Capsules in one region for a single project on Code Capsules.
sidebar_label: "What is a Space?"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Spaces on Code Capsules

A Space groups related Capsules in one region for a single project on Code Capsules.

## Overview

A **Space** belongs to one Team. It holds the Capsules for one product or environment, such as `customer-api` or `staging-shop`.

## Why it matters

Spaces keep frontend, backend, and database Capsules for one app in one place. The region you pick when creating a Space applies to every Capsule inside it.

## How it works

Capsules in a Space share the same deployment region. You open a Space to view its Capsules, logs, and billing in context. Teams can own many Spaces.

## When to use it

| Situation | Spaces |
| --- | --- |
| One web app with API and database | One Space, multiple Capsules |
| Production and staging | Two Spaces in the same Team |
| Unrelated products | Separate Spaces or separate Teams |

Create a new Space when a project needs its own region or clear separation from other Capsules.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-a-space', label: '🛠️ Create a Space', description: 'Step-by-step Space setup.'},
    {type: 'link', href: '/platform/spaces/how-do-i-add-remove-a-space', label: '🛠️ Add or remove Spaces', description: 'Create and delete Spaces.'},
    {type: 'link', href: '/platform/regions/what-regions-does-code-capsules-support', label: '📋 Supported regions', description: 'Pick a deployment region.'},
    {type: 'link', href: '/platform/teams/what-is-a-team', label: '💡 What is a Team', description: 'How Teams own Spaces.'},
  ]}
/>