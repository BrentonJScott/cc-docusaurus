# New guide report: Deploy Django with MongoDB

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/database/mongodb/django-+-mongodb.md`
- **Doc type**: Tutorial
- **Slug**: `/database/mongodb/django-+-mongodb`
- **Feature**: Deploy Django with MongoDB
- **Goal**: Expect to Deploy a Django app with a MongoDB database on Code Capsules from GitHub. Connect Django to a managed Mongo Data Capsule, step by step
- **Guide status**: missing (no file at `docs/database/mongodb/django-+-mongodb.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Create the MongoDB capsule
2. Create the Backend capsule
3. Wait for the build
4. Connect the capsules
5. Open the application

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### django-mongodb-ng-1

- **ID**: django-mongodb-ng-1
- **Type**: New guide
- **Title**: Add `docs/database/mongodb/django-+-mongodb.md` for Deploy Django with MongoDB.
- **Problem**: `docs/database/mongodb/django-+-mongodb.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy a Django app with a MongoDB database on Code Capsules from GitHub. Connect Django to a managed Mongo Data Capsule, step by step
- **Change**: Create `docs/database/mongodb/django-+-mongodb.md` as a tutorial with slug `/database/mongodb/django-+-mongodb`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/database/mongodb/django-+-mongodb.md`
- **Proposed slug**: `/database/mongodb/django-+-mongodb`
- **Goal**: Expect to Deploy a Django app with a MongoDB database on Code Capsules from GitHub. Connect Django to a managed Mongo Data Capsule, step by step
- **Outline**:

```
# Host Your Django MongoDB Application
Deploy a Django app with a MongoDB database on Code Capsules from GitHub. When

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your Django MongoDB app
1. **Create the MongoDB capsule** — step detail from platform UI labels
2. **Create the Backend capsule** — step detail from platform UI labels
3. **Wait for the build** — step detail from platform UI labels
4. **Connect the capsules** — step detail from platform UI labels
5. **Open the application** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/database/mongodb/django-+-mongodb.md`, passes the format check for a tutorial, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
