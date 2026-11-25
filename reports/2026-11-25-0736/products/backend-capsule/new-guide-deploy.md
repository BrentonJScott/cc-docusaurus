# New guide report: Deploy a Backend Application

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/backend-capsule/deploy.md`
- **Doc type**: How-to guide
- **Slug**: `/products/backend-capsule/deploy`
- **Feature**: Deploy a Backend Application
- **Goal**: Expect to Deploy server-side applications and APIs on Code Capsules with support for Python, Node.js, Go, Java, and Docker
- **Guide status**: missing (no file at `docs/products/backend-capsule/deploy.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the capsule wizard
2. Choose Backend Capsule
3. Connect the repository
4. Set plan and create
5. Pick a framework guide

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/backend-capsule/deploy.md` for Deploy a Backend Application.
- **Problem**: `docs/products/backend-capsule/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy server-side applications and APIs on Code Capsules with support for Python, Node.js, Go, Java, and Docker
- **Change**: Create `docs/products/backend-capsule/deploy.md` as a how-to guide with slug `/products/backend-capsule/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/backend-capsule/deploy.md`
- **Proposed slug**: `/products/backend-capsule/deploy`
- **Goal**: Expect to Deploy server-side applications and APIs on Code Capsules with support for Python, Node.js, Go, Java, and Docker
- **Outline**:

```
# Deploy Your Backend Application
Deploy server-side applications and APIs on Code Capsules with support for Python, Node.js, Go, Java, and Docker.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your backend app
1. **Open the capsule wizard** — step detail from platform UI labels
2. **Choose Backend Capsule** — step detail from platform UI labels
3. **Connect the repository** — step detail from platform UI labels
4. **Set plan and create** — step detail from platform UI labels
5. **Pick a framework guide** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/backend-capsule/deploy.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
