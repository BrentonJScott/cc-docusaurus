# Format check — Create Angular frontend capsule

- **Run:** 2026-11-24T07:06:55Z
- **Doc file:** `docs/b/angular.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Create Angular frontend capsule
- **Feature goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|-------|---------|-------------|
| 1 | prerequisite | `## Prerequisites` | Code Capsules account (linked shared page) |
| 2 | prerequisite | `## Prerequisites` | GitHub account |
| 3 | prerequisite | `## Prerequisites` | Fork of `demo-angular` (linked shared page) |
| 4 | prerequisite | `## Prerequisites` | Space (linked shared page) |
| 5 | prerequisite | `## Prerequisites` | GitHub connected (linked shared page) |
| 6 | goal | `## Steps` / Step 1 | Open test platform and log in; land on **Quick Start** |
| 7 | goal | Step 2 | **Deploy Now** on **Angular** card |
| 8 | goal | Step 3 | **Frontend**, Team, Space, **Next** |
| 9 | goal | Step 4 | **Static** hosting and plan, **Next** |
| 10 | goal | Step 5 | Select `demo-angular` repo and branch, **Next** |
| 11 | goal | Step 6 | Build command and output directory, **Create Capsule** |
| 12 | goal | Step 7 | **Deploy** → **Builds** shows building state |
| 13 | remove | `## Screenshots` | Embedded images (section content, not steps) |
| 14 | remove | `## Troubleshooting` | Symptom/fix entries (reference only for deployment) |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content | pass | Goal steps live under `## Steps`; prerequisites outside steps; `## Goal` matches manifest; last step confirms build status. |
| Check 2: Prerequisites | pass | Every prerequisite is one bullet with a shared-doc link; shared targets exist under `docs/e/` with matching slugs. |
| Check 3: Links | fail | Screenshot paths `/img/guides/create-angular-frontend-capsule/step-4.jpg`, `step-9.jpg`, and `step-12.jpg` are missing from `static/`. |
| Check 4: Format and style | pass | Frontmatter complete; section order matches template; `### Step N: Title` form; no images inside steps; troubleshooting present. |

## Tickets

### angular-1

- **ID:** angular-1
- **Type:** Broken link
- **Title:** Add missing Angular guide screenshot assets.
- **Problem:** `## Screenshots` references `/img/guides/create-angular-frontend-capsule/step-4.jpg`, `step-9.jpg`, and `step-12.jpg`, but no files exist under `static/img/guides/create-angular-frontend-capsule/`.
- **Rule:** `FORMAT.MD` Check 3; `how_to_format.md` Screenshots.
- **Change:** Add the three JPEG files under `static/img/guides/create-angular-frontend-capsule/` or update paths to assets that exist.
- **Done when:** Every image in `## Screenshots` resolves under `static/`.

## Proposed outline

None (format fixes are asset additions only).