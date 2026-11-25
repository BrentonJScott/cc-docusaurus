# New guide report: Add a Custom Domain to a Capsule

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/capsules/how-to-add-a-custom-domain.md`
- **Doc type**: How-to guide
- **Slug**: `/platform/capsules/how-to-add-a-custom-domain`
- **Feature**: Add a Custom Domain to a Capsule
- **Goal**: Expect to see the custom domain and subdomain listed on the capsule
- **Guide status**: missing (no file at `docs/platform/capsules/how-to-add-a-custom-domain.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### how-to-add-a-custom-domain-ng-1

- **ID**: how-to-add-a-custom-domain-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/capsules/how-to-add-a-custom-domain.md` for Add a Custom Domain to a Capsule.
- **Problem**: `docs/platform/capsules/how-to-add-a-custom-domain.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the custom domain and subdomain listed on the capsule
- **Change**: Create `docs/platform/capsules/how-to-add-a-custom-domain.md` as a how-to guide with slug `/platform/capsules/how-to-add-a-custom-domain`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/capsules/how-to-add-a-custom-domain.md`
- **Proposed slug**: `/platform/capsules/how-to-add-a-custom-domain`
- **Goal**: Expect to see the custom domain and subdomain listed on the capsule
- **Outline**:

```
# Add a Custom Domain to a Capsule
Expect to see the custom domain and subdomain listed on the capsule

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Add a Custom Domain to a Capsule
1. **Sign in to the test platform** — step detail from platform UI labels
2. **Open the account or Space area described in the guide** — step detail from platform UI labels
3. **Follow each step using UI labels from the platform** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/platform/capsules/how-to-add-a-custom-domain.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
