# Relaxed drift PR — 2026-11-19 (12:55 UTC follow-up)

**Motivation:** Prior cron scored all guides `pass` and skipped a PR under the strict template rule (PR only when `doc_fidelity` drift/fail or `doc_completeness` incomplete). Observational drift and outcome gaps still warranted this docs-only PR; the automation **prompt** was updated to allow that (not a separate repo policy file).

**Platform:** https://test-platform.codecapsules.io  
**Evidence:** Playwright headless run (same day); step tables in `/tmp/platform-guide-audit-2026-11-19.json` (runner artifact).

## Summary

| Guide | Headline scores (cron) | Drift PR? | Reason |
|---|---|---|---|
| create-angular-frontend-capsule | pass / pass / pass | yes | Outcome gap (title **Create** vs steps 1–7 only); post-**Next** URL quirk noted |
| create-react-frontend-capsule | pass / pass / pass | yes | Same scope gap as Angular |
| create-java-backend-capsule | pass / pass / pass | yes | Ambiguous **+** control; scope gap |

## Mismatch bullets (PR fixes)

- **Outcome gap:** Manifest features are named **Create … capsule**, but numbered steps stop at **Capsule Details** / **Next** toward **Plan**—no **Configure**, repo, or final create submit. Guides now state scope explicitly; future PRs may extend numbered steps when test env allows submit.
- **Java step 6:** Doc said “click the **+** control.” Live UI has two **+** links (sidebar vs capsules list header). Only the header **+** opens **New Capsule**. Guide step 6 updated to disambiguate.
- **Angular/React step 7 (operational):** After **Next**, query string sometimes shows `capsuleType=backend` while **Frontend** remains selected on **Capsule Details**. Not a doc label mismatch; logged for product/docs awareness only.
- **Capsule creation:** Cron did not submit final create (runner policy). Functional pass = numbered steps only, not an existing capsule resource.

## doc_completeness

Treat title/outcome gap as **incomplete** even when step-level `doc_fidelity` is **pass**. This PR addresses that gap in prose; extending steps through deploy remains follow-up work.