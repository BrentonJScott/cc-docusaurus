# New guide report: PHP Book Recommendations App

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md`
- **Doc type**: Tutorial
- **Slug**: `/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker`
- **Feature**: PHP Book Recommendations App
- **Goal**: Expect the reader to understand: Build a book recommendations web app with PHP, SQLite and Docker, then deploy it to Code Capsules. A step-by-step containerized tutorial
- **Guide status**: missing (no file at `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Prepare prerequisites and repository
2. Follow the tutorial build steps
3. Deploy to Code Capsules
4. Verify the tutorial outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### building-a-book-recommendations-app-with-php-sqlite-and-docker-ng-1

- **ID**: building-a-book-recommendations-app-with-php-sqlite-and-docker-ng-1
- **Type**: New guide
- **Title**: Add `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md` for PHP Book Recommendations App.
- **Problem**: `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: Build a book recommendations web app with PHP, SQLite and Docker, then deploy it to Code Capsules. A step-by-step containerized tutorial
- **Change**: Create `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md` as a tutorial with slug `/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md`
- **Proposed slug**: `/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker`
- **Goal**: Expect the reader to understand: Build a book recommendations web app with PHP, SQLite and Docker, then deploy it to Code Capsules. A step-by-step containerized tutorial
- **Outline**:

```
# Building a Book Recommendations App With PHP, SQLite, and Docker
Expect the reader to understand: Build a book recommendations web app with PHP, SQLite and Docker, then deploy it to Code Capsules. A step-by-step containerized tutorial

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Build and deploy
1. **Prepare prerequisites and repository** — step detail from platform UI labels
2. **Follow the tutorial build steps** — step detail from platform UI labels
3. **Deploy to Code Capsules** — step detail from platform UI labels
4. **Verify the tutorial outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md`, passes the format check for a tutorial, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
