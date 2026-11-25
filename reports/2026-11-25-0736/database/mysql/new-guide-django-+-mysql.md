# New guide report: Deploy Django with MySQL

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/database/mysql/django-+-mysql.md`
- **Doc type**: Tutorial
- **Slug**: `/database/mysql/django-+-mysql`
- **Feature**: Deploy Django with MySQL
- **Goal**: Expect to Deploy a Django app with a MySQL database on Code Capsules from GitHub. Connect Django to a managed MySQL Data Capsule, step by step
- **Guide status**: missing (no file at `docs/database/mysql/django-+-mysql.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Create the MySQL capsule
2. Create the Backend capsule
3. Wait for the build
4. Connect the capsules
5. Open the application

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### django-mysql-ng-1

- **ID**: django-mysql-ng-1
- **Type**: New guide
- **Title**: Add `docs/database/mysql/django-+-mysql.md` for Deploy Django with MySQL.
- **Problem**: `docs/database/mysql/django-+-mysql.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy a Django app with a MySQL database on Code Capsules from GitHub. Connect Django to a managed MySQL Data Capsule, step by step
- **Change**: Create `docs/database/mysql/django-+-mysql.md` as a tutorial with slug `/database/mysql/django-+-mysql`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/database/mysql/django-+-mysql.md`
- **Proposed slug**: `/database/mysql/django-+-mysql`
- **Goal**: Expect to Deploy a Django app with a MySQL database on Code Capsules from GitHub. Connect Django to a managed MySQL Data Capsule, step by step
- **Outline**:

```
# Host Your Django MySQL Application
Deploy a Django app with a MySQL database on Code Capsules from GitHub. When

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your Django MySQL app
1. **Create the MySQL capsule** — step detail from platform UI labels
2. **Create the Backend capsule** — step detail from platform UI labels
3. **Wait for the build** — step detail from platform UI labels
4. **Connect the capsules** — step detail from platform UI labels
5. **Open the application** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/database/mysql/django-+-mysql.md`, passes the format check for a tutorial, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
