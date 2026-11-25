# New guide report: Secure a WordPress Site

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/wordpress-capsule/security.md`
- **Doc type**: How-to guide
- **Slug**: `/products/wordpress-capsule/security`
- **Feature**: Secure a WordPress Site
- **Goal**: Expect the reader to understand: Built-in security features of the WordPress Capsule and how to configure them
- **Guide status**: missing (no file at `docs/products/wordpress-capsule/security.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open WordPress security settings
2. Review built-in protections
3. Apply recommended settings

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### security-ng-1

- **ID**: security-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/wordpress-capsule/security.md` for Secure a WordPress Site.
- **Problem**: `docs/products/wordpress-capsule/security.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: Built-in security features of the WordPress Capsule and how to configure them
- **Change**: Create `docs/products/wordpress-capsule/security.md` as a how-to guide with slug `/products/wordpress-capsule/security`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/wordpress-capsule/security.md`
- **Proposed slug**: `/products/wordpress-capsule/security`
- **Goal**: Expect the reader to understand: Built-in security features of the WordPress Capsule and how to configure them
- **Outline**:

```
# Lock Down Your WordPress Site
Expect the reader to understand: Built-in security features of the WordPress Capsule and how to configure them

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the guide
1. **Open WordPress security settings** — step detail from platform UI labels
2. **Review built-in protections** — step detail from platform UI labels
3. **Apply recommended settings** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/wordpress-capsule/security.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
