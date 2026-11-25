# New guide report: Host a Flask Application

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/python/flask.md`
- **Doc type**: How-to guide
- **Slug**: `/backend/python/flask`
- **Feature**: Host a Flask Application
- **Goal**: Expect to Deploy the Flask demo app to a Backend Capsule and see it building in the Builds tab
- **Guide status**: missing (no file at `docs/backend/python/flask.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Start a Backend Capsule
2. Choose the capsule type, Team, and Space
3. Choose the plan
4. Connect the repository
5. Set the run command
6. Create the capsule

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### flask-ng-1

- **ID**: flask-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/python/flask.md` for Host a Flask Application.
- **Problem**: `docs/backend/python/flask.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy the Flask demo app to a Backend Capsule and see it building in the Builds tab
- **Change**: Create `docs/backend/python/flask.md` as a how-to guide with slug `/backend/python/flask`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/python/flask.md`
- **Proposed slug**: `/backend/python/flask`
- **Goal**: Expect to Deploy the Flask demo app to a Backend Capsule and see it building in the Builds tab
- **Outline**:

```
# Host Your Flask Application
Deploy the Flask demo app to a Backend Capsule and see it building in the Builds tab.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your Flask app
1. **Start a Backend Capsule** — step detail from platform UI labels
2. **Choose the capsule type, Team, and Space** — step detail from platform UI labels
3. **Choose the plan** — step detail from platform UI labels
4. **Connect the repository** — step detail from platform UI labels
5. **Set the run command** — step detail from platform UI labels
6. **Create the capsule** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/backend/python/flask.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
