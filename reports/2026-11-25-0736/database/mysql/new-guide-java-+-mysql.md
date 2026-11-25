# New guide report: Deploy Java with MySQL

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/database/mysql/java-+-mysql.md`
- **Doc type**: How-to guide
- **Slug**: `/database/mysql/java-+-mysql`
- **Feature**: Deploy Java with MySQL
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Guide status**: missing (no file at `docs/database/mysql/java-+-mysql.md`)
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

### java-mysql-ng-1

- **ID**: java-mysql-ng-1
- **Type**: New guide
- **Title**: Add `docs/database/mysql/java-+-mysql.md` for Deploy Java with MySQL.
- **Problem**: `docs/database/mysql/java-+-mysql.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the guide's described outcome on test-platform.codecapsules.io
- **Change**: Create `docs/database/mysql/java-+-mysql.md` as a how-to guide with slug `/database/mysql/java-+-mysql`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/database/mysql/java-+-mysql.md`
- **Proposed slug**: `/database/mysql/java-+-mysql`
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Outline**:

```
# Host Your Java MySQL Application
Deploy a Java app with a MySQL database on Code Capsules from GitHub. When you

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your Java MySQL app
1. **Create the MySQL capsule** — step detail from platform UI labels
2. **Create the Backend capsule** — step detail from platform UI labels
3. **Wait for the build** — step detail from platform UI labels
4. **Connect the capsules** — step detail from platform UI labels
5. **Open the application** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/database/mysql/java-+-mysql.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
