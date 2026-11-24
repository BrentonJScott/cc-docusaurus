# Format report: health-checks

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/capsules/health-checks.md
**Doc type:** Explanation (should be How-to for feature)
**Template:** explanation_format.md

**Feature:** Configure health checks

**Goal:** Expect to see the capsule report healthy

**Format check:** fail
**Walkthrough:** not run (format fail)

## Content list (Check 1)

1. [explain] (# Health Checks) What health checks do.
2. [fact] (## Health check settings) Off/Automatic/Manual table.
3. [instruction] (## Example endpoints) Code reader adds to apps.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content | fail | Wrong doc type for feature: explains concept but no dashboard steps to configure health check; instructions in code blocks. |
| Prerequisites | not applicable | If retyped Explanation, N/A; feature needs How-to. |
| Links | fail | Six /products/... links not in docs/. |
| Format and style | fail | Neither Explanation nor Reference template; missing doc_version, Related DocCardList. |

## Tickets

### health-checks-1: Add How-to for Configure health checks.

- **Type:** Wrong doc type
- **Title:** Add How-to for Configure health checks.
- **Problem:** Feature goal is dashboard configuration; page is deep reference.
- **Rule:** FORMAT.MD Step 1
- **Change:** New how-to: open Configure, set Automatic/Manual, endpoint, verify healthy; keep this page as Reference or Explanation linked from Related.
- **Done when:** Feature maps to how-to with steps to goal.

### health-checks-2: Move code samples to tutorial or reference.

- **Type:** Move to another doc
- **Title:** Move code samples to tutorial or reference.
- **Problem:** ## Example endpoints with framework code.
- **Rule:** explanation_format.md
- **Change:** Keep brief link to backend guides; move long samples to reference appendix.
- **Done when:** Explanation has no multi-step code instructions.

### health-checks-3: Fix product configure links.

- **Type:** Broken link
- **Title:** Fix product configure links.
- **Problem:** Links to /products/backend-capsule/configure/ etc. missing in repo.
- **Rule:** FORMAT.MD Check 3
- **Change:** Replace with in-repo paths or remove until product docs imported.
- **Done when:** All internal links resolve.


## Proposed outline

(New how-to) ## Prerequisites
## Configure health checks on your capsule
## Troubleshooting

(This page → Reference: settings tables + behavior)
