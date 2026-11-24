# Format check — Code Capsules on Your AWS

- **Run:** 2026-11-24T07:22:37Z
- **Doc file:** `docs/a/enterprise-aws.md`
- **Doc type:** Explanation
- **Template:** `explanation_format.md`
- **Feature:** Enterprise AWS
- **Goal (manifest):** Read and understand document for coherence and logic
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Statement |
|---|--------|---------|-----------|
| 1 | explain | intro | AWS enterprise positioning sentence |
| 2 | explain | ## Overview | Dedicated clusters vs hosted; coming soon |
| 3 | explain | ## Why it matters | One paragraph on ownership/control |
| 4 | remove | Why it matters (note) | `:::note[Content needed]` placeholder only |
| 5 | explain | ## How it works | One paragraph on dedicated cluster |
| 6 | remove | ### Your AWS account | Placeholder note only |
| 7 | remove | ### What Code Capsules manages | Placeholder note only |
| 8 | explain | ## When to use it | Hosted vs enterprise choice; comparison table |
| 9 | remove | When to use it (note) | Trade-offs placeholder |
| 10 | explain | ## Related | Pricing and Create a Space links |

## Check results

| Check | Status | Reason |
|--------|--------|--------|
| Step 1: Doc type | pass | Explanation structure; no procedural steps. |
| Check 1: Content (understanding only) | fail | **Why it matters**, **How it works** subsections, and **When to use it** trade-offs rely on `Content needed` placeholders instead of reader-facing explanation. |
| Check 2: Prerequisites | not applicable | Explanation type. |
| Check 3: Links | pass | **Related** links resolve to pricing reference and shared create-a-space (`docs/e/create-a-space.md`). |
| Check 4: Format and style | fail | Required sections lack substantive content per `explanation_format.md` (Why / How / When must not be placeholder-only). |

## Tickets

### enterprise-aws-1

- **Type:** Format fix
- **Title:** Replace Content needed placeholders in Why it matters and How it works.
- **Problem:** `:::note[Content needed]` blocks under **Why it matters**, **Your AWS account**, and **What Code Capsules manages** are the only detail in those areas.
- **Rule:** `explanation_format.md` — **Why it matters** and **How it works** must describe the topic for readers; `FORMAT.MD` Check 1 fails on placeholder-only sections.
- **Change:** Replace notes with product-confirmed copy: customer problems (residency, compliance, spend), who the option is for, which components run in the customer AWS account, and what Code Capsules operates.
- **Done when:** Each of those headings has at least one paragraph of real explanation and no `Content needed` notes remain.

### enterprise-aws-2

- **Type:** Format fix
- **Title:** Complete When to use it trade-offs.
- **Problem:** Comparison table is present, but the following `Content needed` note is the only trade-off detail.
- **Rule:** `explanation_format.md` — **When to use it** must include cost, setup effort, and customer responsibility.
- **Change:** Add prose or table rows for pricing model, setup effort, operational responsibility, and when to pick AWS over other enterprise clouds.
- **Done when:** **When to use it** stands alone without placeholder notes.

### enterprise-aws-3

- **Type:** Format fix
- **Title:** Reconcile coming soon with full explanation sections.
- **Problem:** Page says enterprise on AWS is coming soon while other sections must still explain the intended model (`explanation_format.md` Overview rule).
- **Rule:** `explanation_format.md` Overview.
- **Change:** Keep one clear “coming soon” sentence in **Overview**; ensure remaining sections describe the planned offering (not “TBD” notes).
- **Done when:** Format check re-run passes Checks 1 and 4.

## Proposed outline

```md
## Overview
- Dedicated enterprise cluster in customer AWS; coming soon; four enterprise options listed

## Why it matters
- Problem statement and audience (no placeholder)

## How it works
- Control plane vs customer account split (subheadings with real copy)

## When to use it
- Hosted vs enterprise table plus trade-offs paragraph

## Related
- Pricing, Create a Space
```