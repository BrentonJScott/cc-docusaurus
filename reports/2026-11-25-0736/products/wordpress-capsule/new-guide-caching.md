# New guide report: Enable WordPress Caching

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/wordpress-capsule/caching.md`
- **Doc type**: How-to guide
- **Slug**: `/products/wordpress-capsule/caching`
- **Feature**: Enable WordPress Caching
- **Goal**: Expect the reader to understand: Understand and configure the built-in WordPress page cache to improve performance and handle traffic spikes
- **Guide status**: missing (no file at `docs/products/wordpress-capsule/caching.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open WordPress Capsule settings
2. Configure page cache
3. Verify cache behavior

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### caching-ng-1

- **ID**: caching-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/wordpress-capsule/caching.md` for Enable WordPress Caching.
- **Problem**: `docs/products/wordpress-capsule/caching.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: Understand and configure the built-in WordPress page cache to improve performance and handle traffic spikes
- **Change**: Create `docs/products/wordpress-capsule/caching.md` as a how-to guide with slug `/products/wordpress-capsule/caching`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/wordpress-capsule/caching.md`
- **Proposed slug**: `/products/wordpress-capsule/caching`
- **Goal**: Expect the reader to understand: Understand and configure the built-in WordPress page cache to improve performance and handle traffic spikes
- **Outline**:

```
# Speed Up WordPress With Caching
Expect the reader to understand: Understand and configure the built-in WordPress page cache to improve performance and handle traffic spikes

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the guide
1. **Open WordPress Capsule settings** — step detail from platform UI labels
2. **Configure page cache** — step detail from platform UI labels
3. **Verify cache behavior** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/wordpress-capsule/caching.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
