# New guide report: Managed WordPress Hosting

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/wordpress.md`
- **Doc type**: How-to guide
- **Slug**: `/wordpress`
- **Feature**: Managed WordPress Hosting
- **Goal**: Expect the reader to understand: Host WordPress on Code Capsules with a managed, git-free WordPress Capsule: built-in database, storage, and caching. Get started here
- **Guide status**: missing (no file at `docs/wordpress.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Space and start capsule wizard
2. Choose capsule type, Team, and Space
3. Complete wizard and create the Capsule
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### wordpress-ng-1

- **ID**: wordpress-ng-1
- **Type**: New guide
- **Title**: Add `docs/wordpress.md` for Managed WordPress Hosting.
- **Problem**: `docs/wordpress.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: Host WordPress on Code Capsules with a managed, git-free WordPress Capsule: built-in database, storage, and caching. Get started here
- **Change**: Create `docs/wordpress.md` as a how-to guide with slug `/wordpress`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/wordpress.md`
- **Proposed slug**: `/wordpress`
- **Goal**: Expect the reader to understand: Host WordPress on Code Capsules with a managed, git-free WordPress Capsule: built-in database, storage, and caching. Get started here
- **Outline**:

```
# WordPress, Fully Managed
Expect the reader to understand: Host WordPress on Code Capsules with a managed, git-free WordPress Capsule: built-in database, storage, and caching. Get started here

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the guide
1. **Open Space and start capsule wizard** — step detail from platform UI labels
2. **Choose capsule type, Team, and Space** — step detail from platform UI labels
3. **Complete wizard and create the Capsule** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/wordpress.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
