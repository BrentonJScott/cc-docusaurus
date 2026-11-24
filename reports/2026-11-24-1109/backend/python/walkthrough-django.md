# Walkthrough: django

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/backend/python/django.md`
- **Feature:** Create Django backend capsule
- **Goal:** Deploy with bound Persistent Storage and see the Django app load at the capsule URL
- **Environment:** https://test-platform.codecapsules.io
- **Space:** Document Drift
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — logged-in session, space **Document Drift**, GitHub connected; `demo-django` fork present under **Personal Team → Repos** (page mentions `demo-django`; wizard shows **BrentonJScott/demo-django**).
2. In **Document Drift**, open **+** / **New Capsule** (guide: click **+** in the Space).
3. On **Capsule Details**, choose **Persistent Storage**, **Personal Team**, and **Document Drift** in **Search/Select a Space**, then **Next** (guide: Persistent Storage, Team, Space).
4. On **Plan**, choose **Basic** → **Create Capsule** (guide: **Plan**, **Basic**, **Create Capsule**).
5. In the same Space, start **New Capsule** again for **Backend** (guide: click **+**).
6. On **Capsule Details**, choose **Backend**, **Personal Team**, **Document Drift** → **Next** (guide: **Backend Capsule**, Team, Space). Skipping **Choose a Space** leaves validation text **Please select a Capsule, Team and Space.** on **Next**.
7. On **Plan**, **Basic** → **Next** (guide: **Plan**, **Basic**, **Next**).
8. On **Connect a Git Repository**, search `demo-django`, select **BrentonJScott/demo-django**, branch **master** → **Next** (guide: **Source Code**, `demo-django` fork, `master`).
9. On **Deploy**, leave **Run Command** blank → **Create Capsule** (guide: **Build and Deploy Settings**, blank **Run Command**, **Create Capsule**). An existing **demo-django** backend capsule was also inspected.
10. Open the backend **Config** tab and locate storage binding (guide: **Bind Data Capsule**, **Bind**).
11. On **Details**, use the public **URL** after restart (guide: toggle off/on, **URL**, Django app loads).

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Account, fork `demo-django`, space, GitHub | Session + **Document Drift**; fork visible in team repos and wizard |
| 2 | pass | **+** in Space | **New Capsule** opened for **Document Drift** |
| 3 | pass | Persistent Storage, Team, Space on **Capsule Details** | Three wizard fields including **Choose a Space** (**Document Drift**); type labeled **Persistent Storage** |
| 4 | pass | **Basic**, **Create Capsule** on **Plan** | **Basic** selected; **Create Capsule** created storage in space |
| 5 | pass | **+** for second capsule | Second **New Capsule** wizard opened |
| 6 | pass | **Backend Capsule**, Team, Space | **Backend** selected (not **Backend Capsule**); team/space set via comboboxes |
| 7 | pass | **Basic** on **Plan** | **Configure Plan** step with **Basic** |
| 8 | pass | `demo-django` fork, `master` on **Source Code** | **Git Repository** shows **BrentonJScott/demo-django**; **master** listed |
| 9 | pass | Blank **Run Command**, **Create Capsule** | **Deploy** step exposes **Run Command**; creation path matches |
| 10 | fail | **Bind Data Capsule** heading, **Bind** | **Config** uses **Data capsules** with **Bind**; guide heading **Bind Data Capsule** not on screen |
| 11 | fail | Restart, open **URL**, Django app loads | Public URL `https://demo-django-iplj.ccpve.co.za` returns **404 page not found**; **Details** shows capsule status **Failed** and **Builds** empty | [failure-step-10.jpg](./failure-step-10.jpg) |

## Mismatches / issues

1. **Capsule type label:** Guide **Backend Capsule**; wizard **Backend**.
2. **Wizard steps:** Guide **Source Code** / **Build and Deploy Settings**; UI **Connect a Git Repository** / **Deploy** (breadcrumbs **Plan → Configure → Deploy**).
3. **Repository display:** Guide names `demo-django`; dropdown shows **BrentonJScott/demo-django**.
4. **Space field:** **Capsule Details** includes an explicit **Choose a Space** control; the guide lists Team and Space in prose but does not call out the third combobox.
5. **Bind UI copy:** Guide **Bind Data Capsule**; **Config** tab section title is **Data capsules** ( **Bind** still present next to storage).
6. **Goal check:** After following deploy/bind flow, opening the capsule URL does not load the Django demo (HTTP 404). See [failure-step-10.jpg](./failure-step-10.jpg).

## Suggested fixes

- Map wizard labels: **Backend**, **Connect a Git Repository**, **Deploy**, and **Data capsules** (+ **Bind**).
- Tell readers to pick **Document Drift** (or their space) in **Search/Select a Space**, not only Team.
- Note the connected fork appears as `your-user/demo-django` in **Git Repository**.
- Replace **Bind Data Capsule** with **Data capsules** on the **Config** tab, or mention both names.
- Troubleshooting: if the public URL returns 404, check **Builds** and that Persistent Storage is bound and the capsule was restarted after bind.