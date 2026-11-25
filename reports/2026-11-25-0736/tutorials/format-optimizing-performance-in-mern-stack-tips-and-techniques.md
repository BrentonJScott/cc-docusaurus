# Format report

- **Doc file:** `docs/tutorials/optimizing-performance-in-mern-stack-tips-and-techniques.md`
- **Doc type:** Tutorial (legacy layout)
- **Template:** `tutorial_format.md`
- **Feature:** MERN Stack Performance Tips
- **Goal:** Expect to apply each listed optimisation
- **Format check:** fail

## Content list

(Abbreviated.) Legacy tutorial: nested `###`/`####` under Parts, prerequisites repeated inside Part 1, long prose, and/or missing continuous numbered build steps with checkpoints per part.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Build steps not one numbered list per Part; extra prerequisite/setup sections inside parts |
| Check 2: Prerequisites | fail | Prerequisites not consolidated; links to `/platform/account/connect-version-control` or missing shared pages |
| Check 3: Links | fail | Broken `/full-stack/index`; not a build tutorial—tips article in Tutorial shell. |
| Check 4: Format and style | fail | Section order, checkpoints, Summary/Next steps, or title/description rules broken |

## Tickets

### optimizing-performance-in-mern-stack-tips-and-techniques-1

- **ID:** optimizing-performance-in-mern-stack-tips-and-techniques-1
- **Type:** Format fix
- **Title:** Rewrite to tutorial_format.md
- **Problem:** Part structure uses nested headings instead of numbered `build` steps; checkpoints missing or not at end of every part.
- **Rule:** `tutorial_format.md` Parts; `FORMAT.MD` Check 1 Tutorial
- **Change:** Consolidate Prerequisites to DocCardList only; split into 2–5 `## Part N` sections with continuous numbering, `:::tip[Checkpoint]` at each part end, deploy on Code Capsules in last part; fix broken internal links to `/docs/...`.
- **Done when:** Template section table matches and walkthrough goal is reachable from steps alone.

## Proposed outline

See `formats/tutorial_format.md` template with What you'll build, Prerequisites, Part 1–N with checkpoints, Summary, Next steps, optional Troubleshooting.
