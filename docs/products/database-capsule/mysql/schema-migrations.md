---
slug: "/products/database-capsule/mysql/schema-migrations"
title: "How to Run Database Migrations"
description: >-
  Run MySQL schema migrations with db-migrate and a MySQL Capsule connected to your backend app.
sidebar_label: Migrations
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Run Your Database Migrations

Run schema changes against a MySQL Capsule using `db-migrate` from an Express (or Node.js) backend.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/mysql/deploy', label: '🛠️ MySQL Capsule', description: 'Create the Capsule first.'},
    {type: 'link', href: '/database/mysql', label: '📋 MySQL guides', description: 'Bind MySQL to your app.'},
  ]}
/>

## Run your schema migrations

1. **Install db-migrate**

   In your repo, run `npm install db-migrate db-migrate-mysql`.

2. **Add database.json**

   Create `database.json` with `dev` and `prod` entries. Point `prod` at `DATABASE_URL` from your bound MySQL Capsule: `"prod": {"ENV":"DATABASE_URL"}`.

3. **Create migration SQL files**

   Run `db-migrate create <name> --sql-file` and edit the generated `up` and `down` SQL files.

4. **Add npm scripts**

   In `package.json`, add scripts such as `migrate-prod-up` and `migrate-prod-down` that call `db-migrate` with `-e prod`.

5. **Update the run command**

   On the Backend Capsule **Config** tab, set **Run Command** to run migrations before your app starts (for example `npm run migrate-prod-up && npm start`).

6. **Deploy**

   Push to GitHub. Watch **Logs** for `db-migrate` output on deploy.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Migrations cannot reach the database</summary>

Confirm the Backend Capsule is bound to MySQL and `DATABASE_URL` is present in **Environment Variables**.

</details>