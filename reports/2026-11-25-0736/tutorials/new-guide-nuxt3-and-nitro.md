# New guide report: Deploy a Nuxt 3 App with Nitro

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/tutorials/nuxt3-and-nitro.md`
- **Doc type**: Tutorial
- **Slug**: `/tutorials/nuxt3-and-nitro`
- **Feature**: Deploy a Nuxt 3 App with Nitro
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Guide status**: missing (no file at `docs/tutorials/nuxt3-and-nitro.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Prepare prerequisites and repository
2. Follow the tutorial build steps
3. Deploy to Code Capsules
4. Verify the tutorial outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### nuxt3-and-nitro-ng-1

- **ID**: nuxt3-and-nitro-ng-1
- **Type**: New guide
- **Title**: Add `docs/tutorials/nuxt3-and-nitro.md` for Deploy a Nuxt 3 App with Nitro.
- **Problem**: `docs/tutorials/nuxt3-and-nitro.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the guide's described outcome on test-platform.codecapsules.io
- **Change**: Create `docs/tutorials/nuxt3-and-nitro.md` as a tutorial with slug `/tutorials/nuxt3-and-nitro`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/tutorials/nuxt3-and-nitro.md`
- **Proposed slug**: `/tutorials/nuxt3-and-nitro`
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Outline**:

```
# Nuxt3 and Nitro
Expect the guide's described outcome on test-platform.codecapsules.io

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

- **Done when**: The guide file exists at `docs/tutorials/nuxt3-and-nitro.md`, passes the format check for a tutorial, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
