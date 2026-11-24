---
slug: "/products/database-capsule/mysql/versions"
title: "Supported MySQL Versions"
description: >-
  See which MySQL versions Code Capsules supports, check the version your MySQL Capsule runs, and plan a major version upgrade safely.
sidebar_label: Versions
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Choose and Upgrade Your MySQL Version

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

Code Capsules MySQL Capsules run one of two supported major versions. This guide covers which versions are available, how to check your current version, and how to plan a major version upgrade.


## Supported Versions

| Version | Status    |
| ------- | --------- |
| **5.7** | Supported |
| **8.0** | Supported |

New MySQL Capsules are provisioned on the latest supported version unless you choose otherwise during setup.

Patch releases within a major version (for example, `8.0.34` to `8.0.36`) are applied automatically and do not require any action on your part.

## Check Your Version

Connect to your MySQL Capsule and run:

```sql
SELECT VERSION();
```

If you connect from your local machine, see [Connect Locally](/products/database-capsule/mysql/connect-locally/) to open a secure tunnel and connect with the `mysql` client.

## Upgrade Paths

Major version upgrades must follow a single step at a time. You cannot downgrade.

| From | To  | Allowed                           | Guide                                                                        |
| ---- | --- | --------------------------------- | ---------------------------------------------------------------------------- |
| 5.7  | 8.0 | Yes                               | [5.7 to 8.0](/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0/) |
| 8.0  | 5.7 | No — downgrades are not supported | —                                                                            |

## Upgrade Guides

- [5.7 to 8.0](/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0/)

See [MySQL Versions](/products/database-capsule/mysql/versions/) for supported versions and general upgrade requirements.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

