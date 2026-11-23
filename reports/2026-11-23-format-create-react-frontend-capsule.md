# Format check — Create React frontend capsule

- **Run:** 2026-11-23T08:35:13Z
- **Guide:** `docs/guides/react.md`
- **Feature goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Goal steps | fail | Extra `## Goal` section; steps use `### Step N` without titles; images embedded inside steps; screenshots not grouped under `### Screenshots`. |
| Prerequisites | fail | Prerequisites explain GitHub inline instead of linking shared pages (`/shared/...`); linked pages not verified on `main`. |
| Format and style | fail | Frontmatter missing `doc_version: drift`; step headings do not match `### Step N: Title`; UI naming otherwise acceptable. |

## Tickets

### react-1 — Format fix

- **Type:** Format fix
- **Title:** Restructure React guide to match `STYLE.MD`.
- **Problem:** Guide contains `## Goal`, step images inline, and `### Step 1` headings without titles.
- **Rule:** `STYLE.MD` page structure and Screenshots sections.
- **Change:** Move goal outcome into last step; move images to `### Screenshots`; rename steps to `### Step N: Title`; add `doc_version: drift`.
- **Done when:** All three format checks pass.

### react-2 — Prerequisites shared pages

- **Type:** Shared page
- **Title:** Link prerequisites to shared doc pages.
- **Problem:** "Configure Git for Code Capsules" and account setup are described in-guide.
- **Rule:** `STYLE.MD` Prerequisites.
- **Change:** Add or link `docs/shared/` pages for account creation and Git configuration.
- **Done when:** Every prerequisite is one bullet with an internal shared link.

## Proposed outline

- **Prerequisites:** Account, GitHub, forked React demo repo, Space (shared links).
- **Steps:** Log in on test platform → Quick Start **Deploy Now** (React) → Capsule details → Hosting → Plan → Git repo/branch → Build settings → **Create Capsule** → confirm build on **Deploy → Builds**.
- **Screenshots:** Grouped after steps per template.
- **Troubleshooting:** Empty repository list, branch not found, plan validation.