# New guide report: Deploy a MongoDB Database

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/mongodb/deploy.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/mongodb/deploy`
- **Feature**: Deploy a MongoDB Database
- **Goal**: Expect to Deploy a managed MongoDB Atlas cluster on Code Capsules with a MongoDB Capsule, then connect it to your backend app using a framework guide
- **Guide status**: missing (no file at `docs/products/database-capsule/mongodb/deploy.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Start the capsule wizard
2. Choose MongoDB
3. Choose cluster options
4. Create the capsule
5. Connect your application

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/mongodb/deploy.md` for Deploy a MongoDB Database.
- **Problem**: `docs/products/database-capsule/mongodb/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy a managed MongoDB Atlas cluster on Code Capsules with a MongoDB Capsule, then connect it to your backend app using a framework guide
- **Change**: Create `docs/products/database-capsule/mongodb/deploy.md` as a how-to guide with slug `/products/database-capsule/mongodb/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/mongodb/deploy.md`
- **Proposed slug**: `/products/database-capsule/mongodb/deploy`
- **Goal**: Expect to Deploy a managed MongoDB Atlas cluster on Code Capsules with a MongoDB Capsule, then connect it to your backend app using a framework guide
- **Outline**:

```
# Deploy Your MongoDB Database
Deploy a managed MongoDB Atlas cluster on Code Capsules with a MongoDB Capsule.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your MongoDB database
1. **Start the capsule wizard** — step detail from platform UI labels
2. **Choose MongoDB** — step detail from platform UI labels
3. **Choose cluster options** — step detail from platform UI labels
4. **Create the capsule** — step detail from platform UI labels
5. **Connect your application** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/mongodb/deploy.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
