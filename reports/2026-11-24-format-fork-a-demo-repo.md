# Format check — Fork a Demo Repo

- **Run:** 2026-11-24T07:58:00Z
- **Doc file:** `docs/e/fork-a-demo-repo.md`
- **Doc type:** How-to guide
- **Template:** `HOW_TO_FORMAT.MD`
- **Feature:** Fork a demo repo
- **Goal (manifest):** Expect to see the fork under your GitHub account
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | intro | Explains why Code Capsules needs a fork |
| 2 | prerequisite | ## Steps (item 1) | Sign in to GitHub |
| 3 | goal | ## Steps (item 2) | Open demo repo named in your guide |
| 4 | goal | ## Steps (item 3–4) | **Fork** to your account |

## Check results

| Check | Status | Reason |
|--------|--------|--------|
| Step 1: Doc type | pass | Single fork task. |
| Check 1: Content (goal steps) | fail | GitHub sign-in is a `prerequisite` inside **Steps**; steps do not state fork visible under your account. |
| Check 2: Prerequisites | fail | GitHub sign-in not listed in **## Prerequisites**; section missing. |
| Check 3: Links | pass | External GitHub link only. |
| Check 4: Format and style | fail | No `### Step N`; missing **Troubleshooting**. |

## Tickets

### fork-a-demo-repo-1

- **Type:** Move to prerequisites
- **Title:** Move GitHub sign-in out of **Steps**.
- **Problem:** Step 1 is “Sign in to GitHub” inside **Steps**.
- **Rule:** `FORMAT.MD` Check 1.
- **Change:** Add **## Prerequisites** with GitHub account (external link allowed). Start **Steps** at opening the named demo repo.
- **Done when:** **Steps** contain only fork actions.

### fork-a-demo-repo-2

- **Type:** Format fix
- **Title:** Add template sections and step headings.
- **Problem:** Plain numbered list under **Steps**; no **Troubleshooting**.
- **Rule:** `HOW_TO_FORMAT.MD`.
- **Change:** Use `### Step N` headings; add **Troubleshooting**.
- **Done when:** Template section table satisfied.

### fork-a-demo-repo-3

- **Type:** Missing goal step
- **Title:** Confirm fork under your account.
- **Problem:** Steps end after confirming fork without describing the expected GitHub UI state.
- **Rule:** `FORMAT.MD` Check 1.
- **Change:** Final step: reader sees the fork under their GitHub account (for example on their profile or the repo **Settings** owner).
- **Done when:** Matches manifest goal wording.

## Proposed outline

```md
## Prerequisites
- GitHub account (link)

## Steps
### Step 1: Open the demo repository
### Step 2: Fork to your account
### Step 3: Confirm the fork is yours

## Troubleshooting
### Fork button missing
```