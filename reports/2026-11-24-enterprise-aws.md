# Read audit — Enterprise AWS

- **Run:** 2026-11-24T07:22:37Z
- **Doc file:** `docs/a/enterprise-aws.md`
- **Format report:** [2026-11-24-format-enterprise-aws.md](./2026-11-24-format-enterprise-aws.md) (fail)
- **Manifest goal:** Read and understand document for coherence and logic
- **Manifest goals reached:** **no**

## Actions taken

1. Read the page for logical flow from **Overview** through **Related**.
2. Treated format failure (placeholder sections) as both a format and a coherence finding.
3. Checked whether a reader could choose hosted vs enterprise AWS without product input.

## Guide alignment

| # | Status | Expected | What happened |
|---|--------|----------|---------------|
| 1 | pass | **Overview** names the option and availability | States dedicated AWS clusters and “coming soon” |
| 2 | fail | **Why it matters** explains customer problems and audience | Body defers to `Content needed` note |
| 3 | fail | **How it works** explains split of responsibility | Subsections are placeholder notes only |
| 4 | partial | **When to use it** compares options with trade-offs | Table compares hosted vs enterprise; trade-offs note is placeholder |
| 5 | pass | **Related** links to hosted onboarding and pricing | Two valid internal links |

## Mismatches / issues

- The page cannot be understood end-to-end: critical sections ask the reader to “confirm with the product team” instead of explaining the offering.
- **Coming soon** in **Overview** conflicts with the reader expectation set by **When to use it** (enterprise appears as a peer to hosted without clarifying what is available today vs planned).

## Suggested fixes

- Resolve format tickets `enterprise-aws-1` through `enterprise-aws-3` with product copy.
- In **Overview**, separate “available now” (hosted) from “planned” (enterprise AWS) so **When to use it** does not imply immediate availability.