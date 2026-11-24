---
slug: "/platform/teams/what-is-a-team"
title: "What Is a Team?"
description: >-
  A Team groups people, Spaces, billing, and shared repositories on Code Capsules.
sidebar_label: "What is a Team?"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Teams on Code Capsules

A Team groups people, Spaces, billing, and shared repositories on Code Capsules.

## Overview

A **Team** is the top level of organization. Every account has a **Personal Team**. You can create more Teams for clients or separate projects.

## Why it matters

Teams control who can manage Spaces and Capsules and which payment method pays for usage. Without Teams, collaborators could not share the same Spaces or billing cleanly.

## How it works

A Team contains **Spaces**. Members you invite can open those Spaces and work on Capsules inside them. Each Team has its own payment method; charges for Capsules in that Team's Spaces bill that card.

You share GitHub repositories to a Team so members see the same repos in the capsule wizard.

## When to use it

| Situation | Use |
| --- | --- |
| Solo work | **Personal Team** only |
| Client or company project | A named Team with its own card and members |
| Same repo, multiple products | One Team, several Spaces |

Use separate Teams when billing or access must stay isolated. Use one Team with many Spaces when one group owns all the work.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/platform/teams/how-do-i-add-remove-teams', label: '🛠️ Add or remove Teams', description: 'Create and delete Teams.'},
    {type: 'link', href: '/platform/teams/how-do-i-add-team-members', label: '🛠️ Add team members', description: 'Invite collaborators.'},
    {type: 'link', href: '/platform/spaces/what-is-a-space', label: '💡 What is a Space', description: 'How Spaces fit under Teams.'},
    {type: 'link', href: '/platform/account/how-do-i-add-a-payment-method', label: '🛠️ Add payment method', description: 'Attach a card to a Team.'},
  ]}
/>