# New guide report: Host a Django Application

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/python/django.md`
- **Doc type**: How-to guide
- **Slug**: `/backend/python/django`
- **Feature**: Host a Django Application
- **Goal**: Expect to Deploy the Django demo app to a Backend Capsule, bind it to a Persistent Storage capsule, and see the app load
- **Guide status**: missing (no file at `docs/backend/python/django.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Start a Persistent Storage capsule
2. Choose the capsule type, Team, and Space
3. Create the storage capsule
4. Start a Backend Capsule
5. Choose the capsule type, Team, and Space
6. Choose the plan
7. Connect the repository
8. Create the Backend Capsule
9. Bind the storage capsule
10. Restart and open the app

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### django-ng-1

- **ID**: django-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/python/django.md` for Host a Django Application.
- **Problem**: `docs/backend/python/django.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy the Django demo app to a Backend Capsule, bind it to a Persistent Storage capsule, and see the app load
- **Change**: Create `docs/backend/python/django.md` as a how-to guide with slug `/backend/python/django`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/python/django.md`
- **Proposed slug**: `/backend/python/django`
- **Goal**: Expect to Deploy the Django demo app to a Backend Capsule, bind it to a Persistent Storage capsule, and see the app load
- **Outline**:

```
# Host Your Django Application
Deploy the Django demo app to a Backend Capsule, bind it to a Persistent Storage capsule, and see the app load.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your Django app
1. **Start a Persistent Storage capsule** — step detail from platform UI labels
2. **Choose the capsule type, Team, and Space** — step detail from platform UI labels
3. **Create the storage capsule** — step detail from platform UI labels
4. **Start a Backend Capsule** — step detail from platform UI labels
5. **Choose the capsule type, Team, and Space** — step detail from platform UI labels
6. **Choose the plan** — step detail from platform UI labels
7. **Connect the repository** — step detail from platform UI labels
8. **Create the Backend Capsule** — step detail from platform UI labels
9. **Bind the storage capsule** — step detail from platform UI labels
10. **Restart and open the app** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/backend/python/django.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
