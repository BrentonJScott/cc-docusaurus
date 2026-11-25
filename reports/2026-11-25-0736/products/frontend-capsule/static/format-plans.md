# Format report: Static Frontend plans

- **Run**: 2026-11-25-0736
- **Doc**: `docs/products/frontend-capsule/static/plans.md`
- **Doc type**: Reference
- **Template**: `reference_format.md`
- **Feature**: Static Frontend Free and Paid Plans
- **Goal**: Expect to see each plan's limits and upgrade a free capsule to paid
- **Format check**: fail

## Content list

| # | Label | Heading | Statement |
|---|---|---|---|
| 1 | fact | (title) | Compare Free and Paid static Frontend Capsules |
| 2 | fact | `## Overview` | Free and Paid plans; chosen on Plan step |
| 3 | fact | `## Compare plans` | Plan comparison table (price, limits, features) |
| 4 | fact | `## Free plan limits` | Capsule count, build size, traffic, rate, builds |
| 5 | instruction | `## Free plan limits` | Reduce build output or upgrade to Paid |
| 6 | instruction | `## Upgrade to Paid` | Open Scale tab; click Upgrade to Paid |
| 7 | fact | `## Upgrade to Paid` | Effects of upgrade (limits removed, billing) |
| 8 | fact | `## Related` | DocCardList to Frontend Capsule, framework guides, Products |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Numbered upgrade steps and imperative fixes under limits are instructions on a Reference page |
| Check 2: Prerequisites | not applicable | Reference page |
| Check 3: Links | pass | Internal links and `## Related` targets exist |
| Check 4: Format and style | fail | `reference_format.md` subject sections and Overview must not include steps |

## Tickets

### plans-1

- **ID**: plans-1
- **Type**: Move to another doc
- **Title**: Move upgrade steps to a How-to guide
- **Problem**: `## Upgrade to Paid` contains a numbered list: open **Scale** tab, click **Upgrade to Paid**.
- **Rule**: `FORMAT.MD`, Check 1 (Reference: facts only); `reference_format.md`, Subject sections — never include steps
- **Change**: Replace the numbered list with factual outcomes only (what changes after upgrade: limits, billing, address). Add a How-to such as `docs/products/frontend-capsule/static/upgrade-to-paid.md` (or equivalent) with the steps, and link it from `## Related`.
- **Done when**: The plans page has no numbered steps; the How-to exists and is linked from **Related**.

### plans-2

- **ID**: plans-2
- **Type**: Move to another doc
- **Title**: Remove imperative troubleshooting from build size limit
- **Problem**: Under **Build output size**, the doc says: "To fix this, reduce the size of your build output (for example, compress images or remove source maps) or upgrade to Paid."
- **Rule**: `FORMAT.MD`, Check 1 (Reference: instructions belong in a How-to guide)
- **Change**: State only the limit and failure behavior (build fails above 30 MB; current deploy keeps serving). Move remediation steps to the upgrade How-to or a troubleshooting How-to; link from **Related**.
- **Done when**: Free plan limit sections state facts only, with no reader imperatives.

### plans-3

- **ID**: plans-3
- **Type**: Format fix
- **Title**: Align feature goal with Reference scope or reclassify
- **Problem**: `DOCUMENTED_FEATURES` goal includes upgrading a free capsule to paid, but Reference pages must not contain the upgrade procedure.
- **Rule**: `FORMAT.MD`, Step 1 — page type must match reader intent; upgrade task is How-to
- **Change**: Keep limits and comparison on this Reference page; document the upgrade path in the new How-to and cross-link. Update the feature mapping in planning docs if the upgrade goal is owned by the How-to slug.
- **Done when**: Limits remain reference-only; upgrade goal is reachable via the linked How-to without steps on `plans.md`.

## Proposed outline

```md
# Free and Paid Plans for Static Hosting
<Compare plans and limits.>

## Overview
<Free vs Paid; chosen on Plan step.>

## Compare plans
| … table … |

## Free plan limits
### Number of capsules
<facts only>
### Build output size
<30 MB limit; build failure behavior — no “reduce output” steps>
…

## Paid plan
<facts: billing model, limits removed — no numbered steps>

## Related
<DocCardList — Frontend Capsule, framework guides, Upgrade to Paid How-to>
```