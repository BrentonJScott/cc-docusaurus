# Walkthrough: flask

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/backend/python/flask.md`
- **Feature:** Create Flask backend capsule
- **Goal:** Expect to see capsule building in **Builds** tab
- **Environment:** https://test-platform.codecapsules.io
- **Space:** Document Drift
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — logged-in session, space **Document Drift**, GitHub connected; `demo-python` fork not verified on GitHub during this run; **Personal Team → Repos** lists no `demo-python` entry (other demo forks such as `demo-django`, `demo-react` are present).
2. In **Document Drift**, open **+** → **New Capsule** (guide: click **+** in the Space).
3. On **Capsule Details**, select **Backend**, **Personal Team**, **Document Drift** → **Next** (guide: **Backend Capsule**).
4. On **Plan**, select **Basic** → **Next**.
5. On **Configure** / **Connect a Git Repository**, open **Git Repository**, search `demo-python` — no matching repository; UI shows **No items found** (guide: **Source Code**, `demo-python` fork, `master` branch). Screenshot: [failure-step-5.jpg](./failure-step-5.jpg).
6. **(blocked)** **Build and Deploy Settings** — leave **Run Command** blank (depends on repository selection).
7. **(blocked)** **Create Capsule** and open **Builds** for first build in progress (depends on prior steps). No Flask/`demo-python` backend capsule was created in **Document Drift**.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Account, fork `demo-python`, space, GitHub | Session + space; fork not in connected repos |
| 2 | pass | **+** to add capsule in Space | **New Capsule** wizard opened |
| 3 | pass | **Backend Capsule**, Team, Space | **Backend** selected; team/space prefilled |
| 4 | pass | **Basic** on **Plan** | **Basic** selected |
| 5 | fail | `demo-python` repo, `master` branch on **Source Code** | Search returns no repos; neither `codecapsules-io/demo-python` nor a user fork appears |
| 6 | blocked | Blank **Run Command** on **Build and Deploy Settings** | Not reached |
| 7 | blocked | **Create Capsule** → build in progress on **Builds** | Not reached |

## Mismatches / issues

1. **Repository:** Guide requires selecting a `demo-python` fork; connected GitHub repos for **Personal Team** do not include `demo-python`, so the dropdown search yields no results. See [failure-step-5.jpg](./failure-step-5.jpg).
2. **Capsule type label:** Guide says **Backend Capsule**; wizard option is **Backend**.
3. **Wizard step names:** Guide uses **Source Code** and **Build and Deploy Settings**; UI breadcrumb/steps use **Configure** (**Connect a Git Repository**) and later **Deploy**.
4. **Branch name:** Guide specifies `master`; default branch on connected repos is typically **main** (not verified for `demo-python` because the repo is unavailable).

## Suggested fixes

- After forking, tell readers to pick the fork path shown in **Git Repository** (e.g. `your-user/demo-python`), and to add that repo via the Code Capsules GitHub app if it does not appear (see guide **Troubleshooting** — align wording with **Configure** step).
- Align **Backend Capsule** wording with the wizard label **Backend**.
- Map guide headings to current wizard labels (**Configure** / **Git Repository**, **Deploy**).
- Note **`main`** as well as **`master`** where the fork’s default branch differs.