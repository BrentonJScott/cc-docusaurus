# New guide report: Host a Production WordPress Blog

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md`
- **Doc type**: Tutorial
- **Slug**: `/tutorials/how-to-simply-host-a-production-wordpress-blog`
- **Feature**: Host a Production WordPress Blog
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Prepare prerequisites and repository
2. Follow the tutorial build steps
3. Deploy to Code Capsules
4. Verify the tutorial outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### how-to-simply-host-a-production-wordpress-blog-ng-1

- **ID**: how-to-simply-host-a-production-wordpress-blog-ng-1
- **Type**: New guide
- **Title**: Add `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md` for Host a Production WordPress Blog.
- **Problem**: `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md` as a tutorial with slug `/tutorials/how-to-simply-host-a-production-wordpress-blog`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md`
- **Proposed slug**: `/tutorials/how-to-simply-host-a-production-wordpress-blog`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# How to Host a Production WordPress Blog
Expect to see capsule building in builds tab

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

- **Done when**: The guide file exists at `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md`, passes the format check for a tutorial, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
