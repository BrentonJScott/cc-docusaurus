# Format check — Create Angular frontend capsule

- **Run:** 2026-11-23T08:35:13Z
- **Guide:** `docs/guides/angular.md`
- **Feature goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Goal steps | fail | No `## Steps` section; deployment flow is narrative under `## Setup`, `## Create an Account`, `## Create a Space`, `## Create the Capsule`; targets production `codecapsules.io` not the test platform wizard. |
| Prerequisites | fail | Account signup and Space creation are step-by-step on the guide page; no `## Prerequisites` with shared links. |
| Format and style | fail | Missing `doc_version`; forbidden top-level `##` headings; images throughout; no `## Troubleshooting`; yellow `+` icon positional wording. |

## Tickets

### angular-1 — Format fix

- **Type:** Format fix
- **Title:** Replace legacy GitBook structure with `STYLE.MD` sections.
- **Problem:** Guide uses Setup / account / space / capsule sections instead of Prerequisites → Steps → Troubleshooting.
- **Rule:** `STYLE.MD` page structure.
- **Change:** Rewrite against test-platform Quick Start wizard; align with React guide pattern.
- **Done when:** Only allowed `##` headings remain and steps reach the manifest goal.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Add `docs/shared/create-a-space.md` for Space prerequisite.
- **Problem:** Space creation is fully described inside the Angular guide.
- **Rule:** Prerequisites must link to shared pages.
- **Change:** Extract Space creation to shared page; one-line prerequisite link.
- **Done when:** Angular Prerequisites link resolves and Check 2 passes.

## Proposed outline

- **Prerequisites:** Test-platform account, GitHub, forked `demo-angular`, Space (shared links).
- **Steps:** Log in → Quick Start **Deploy Now** (Angular) → wizard through **Create Capsule** → **Deploy → Builds** shows building.
- **Troubleshooting:** Repo access, build output path `dist/ng4-complete-guide`.