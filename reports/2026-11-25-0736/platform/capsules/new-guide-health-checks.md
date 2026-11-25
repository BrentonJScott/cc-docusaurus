# New guide report: Configure Health Checks

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/capsules/health-checks.md`
- **Doc type**: How-to guide
- **Slug**: `/platform/capsules/health-checks`
- **Feature**: Configure Health Checks
- **Goal**: Expect to see the capsule report healthy
- **Guide status**: missing (no file at `docs/platform/capsules/health-checks.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### health-checks-ng-1

- **ID**: health-checks-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/capsules/health-checks.md` for Configure Health Checks.
- **Problem**: `docs/platform/capsules/health-checks.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the capsule report healthy
- **Change**: Create `docs/platform/capsules/health-checks.md` as a how-to guide with slug `/platform/capsules/health-checks`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/capsules/health-checks.md`
- **Proposed slug**: `/platform/capsules/health-checks`
- **Goal**: Expect to see the capsule report healthy
- **Outline**:

```
# Configure Health Checks
Expect to see the capsule report healthy

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Configure Health Checks
1. **Sign in to the test platform** — step detail from platform UI labels
2. **Open the account or Space area described in the guide** — step detail from platform UI labels
3. **Follow each step using UI labels from the platform** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/platform/capsules/health-checks.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
