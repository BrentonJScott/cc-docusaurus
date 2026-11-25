# New guide report: Connect to DocumentDB Locally

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/documentdb/connect-locally.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/documentdb/connect-locally`
- **Feature**: Connect to DocumentDB Locally
- **Goal**: Expect mongosh to connect through the proxy tunnel
- **Guide status**: missing (no file at `docs/products/database-capsule/documentdb/connect-locally.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Install mongosh
2. Open a proxy tunnel
3. Copy credentials
4. Connect with mongosh

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### connect-locally-ng-1

- **ID**: connect-locally-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/documentdb/connect-locally.md` for Connect to DocumentDB Locally.
- **Problem**: `docs/products/database-capsule/documentdb/connect-locally.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect mongosh to connect through the proxy tunnel
- **Change**: Create `docs/products/database-capsule/documentdb/connect-locally.md` as a how-to guide with slug `/products/database-capsule/documentdb/connect-locally`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/documentdb/connect-locally.md`
- **Proposed slug**: `/products/database-capsule/documentdb/connect-locally`
- **Goal**: Expect mongosh to connect through the proxy tunnel
- **Outline**:

```
# Connect to Your DocumentDB From Your Machine
Connect to a DocumentDB Capsule from your local machine with the Code Capsules CLI proxy and mongosh.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Connect to your DocumentDB locally
1. **Install mongosh** — step detail from platform UI labels
2. **Open a proxy tunnel** — step detail from platform UI labels
3. **Copy credentials** — step detail from platform UI labels
4. **Connect with mongosh** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/documentdb/connect-locally.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
