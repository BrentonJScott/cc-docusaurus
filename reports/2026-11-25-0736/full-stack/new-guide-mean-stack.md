# New guide report: Deploy a MEAN Stack Application

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/full-stack/mean-stack.md`
- **Doc type**: How-to guide
- **Slug**: `/full-stack/mean-stack`
- **Feature**: Deploy a MEAN Stack Application
- **Goal**: Expect to Deploy a full-stack MEAN (MongoDB, Express, Angular, Node) app to Code Capsules from GitHub. Ship your JavaScript stack in production
- **Guide status**: missing (no file at `docs/full-stack/mean-stack.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Fork the demo repository
2. Deploy the backend Capsule
3. Provision and bind data services
4. Confirm the full-stack app loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### mean-stack-ng-1

- **ID**: mean-stack-ng-1
- **Type**: New guide
- **Title**: Add `docs/full-stack/mean-stack.md` for Deploy a MEAN Stack Application.
- **Problem**: `docs/full-stack/mean-stack.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy a full-stack MEAN (MongoDB, Express, Angular, Node) app to Code Capsules from GitHub. Ship your JavaScript stack in production
- **Change**: Create `docs/full-stack/mean-stack.md` as a how-to guide with slug `/full-stack/mean-stack`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/full-stack/mean-stack.md`
- **Proposed slug**: `/full-stack/mean-stack`
- **Goal**: Expect to Deploy a full-stack MEAN (MongoDB, Express, Angular, Node) app to Code Capsules from GitHub. Ship your JavaScript stack in production
- **Outline**:

```
# Host Your MEAN Stack Application
Expect to Deploy a full-stack MEAN (MongoDB, Express, Angular, Node) app to Code Capsules from GitHub. Ship your JavaScript stack in production

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the guide
1. **Fork the demo repository** — step detail from platform UI labels
2. **Deploy the backend Capsule** — step detail from platform UI labels
3. **Provision and bind data services** — step detail from platform UI labels
4. **Confirm the full-stack app loads** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/full-stack/mean-stack.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
