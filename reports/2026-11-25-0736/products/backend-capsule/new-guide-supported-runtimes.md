# New guide report: Supported Backend Runtimes and Versions

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/backend-capsule/supported-runtimes.md`
- **Doc type**: How-to guide
- **Slug**: `/products/backend-capsule/supported-runtimes`
- **Feature**: Supported Backend Runtimes and Versions
- **Goal**: Expect to see supported runtimes and pin a runtime version
- **Guide status**: missing (no file at `docs/products/backend-capsule/supported-runtimes.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Let detection run
2. Pin a version line
3. Redeploy

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### supported-runtimes-ng-1

- **ID**: supported-runtimes-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/backend-capsule/supported-runtimes.md` for Supported Backend Runtimes and Versions.
- **Problem**: `docs/products/backend-capsule/supported-runtimes.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see supported runtimes and pin a runtime version
- **Change**: Create `docs/products/backend-capsule/supported-runtimes.md` as a how-to guide with slug `/products/backend-capsule/supported-runtimes`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/backend-capsule/supported-runtimes.md`
- **Proposed slug**: `/products/backend-capsule/supported-runtimes`
- **Goal**: Expect to see supported runtimes and pin a runtime version
- **Outline**:

```
# Backend Runtimes and Versions You Can Use
See which language runtimes and versions Code Capsules Backend Capsules support, including Node.js, Python, Go, Java, Ruby, PHP, and .NET, and how to pin one.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Pin your backend runtime
1. **Let detection run** — step detail from platform UI labels
2. **Pin a version line** — step detail from platform UI labels
3. **Redeploy** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/backend-capsule/supported-runtimes.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
