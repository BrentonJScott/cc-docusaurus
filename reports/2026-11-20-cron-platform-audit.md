# Cron platform audit (2026-11-20)

**Run completed:** 2026-11-20T07:08:36.989Z  
**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` — 1 feature  
**Target:** https://test-platform.codecapsules.io

| DOCUMENTED_FEATURES | Guide file | Action |
|---|---|---|
| Create Angular frontend capsule | `docs/guides/create-angular-frontend-capsule.md` | Update guide + screenshots (drift) |

**Removed / added guides:** None (manifest and `docs/guides/` both list only Angular).

## Summary

| Guide | Functional | Doc fidelity |
|---|---|---|
| `create-angular-frontend-capsule.md` | pass | drift → fixed in PR |

**Manifest goal:** Expect to see capsule building in builds tab — **reached** (Deploy tab shows **Building**).

## Mismatches (doc vs live UI)

- **Step 5:** Angular entry is the **Angular applications** quick-start **card**, not a table row; breadcrumbs include **Hosting** before **Plan** / **Configure** / **Deploy**.
- **Steps 7–8:** **Static** and **Free** are card-style radio rows; you must click the option card before **Next** (otherwise **Choose how your site is hosted to continue** appears).
- **Step 9:** After choosing a repository, select a **Branch** from **Search/Select a Branch** before **Next**.
- **Step 10:** **Build & Deploy** inputs are identified by placeholders **`example... npm run build`** and **`example... dist`**, not separate visible **Build Command** labels in the accessibility tree.
- **Step 12:** After **Create Capsule**, the **Building** status appears in the **Builds** panel on the capsule **Deploy** tab (may also show a gear icon while the build runs).

## Step screenshots (this run)

| Step | File |
|---|---|
| 1 | `static/img/guides/shared/step-0-open-site.png` |
| 2 | `static/img/guides/shared/step-1-login-page.png` |
| 4 | `static/img/guides/shared/step-2-quick-start.png` |
| 5 | `static/img/guides/create-angular-frontend-capsule/step-5-new-capsule-wizard.png` |
| 6 | `static/img/guides/create-angular-frontend-capsule/step-6-capsule-details-filled.png` |
| 7 | `static/img/guides/create-angular-frontend-capsule/step-6-hosting-static.png` |
| 8 | `static/img/guides/create-angular-frontend-capsule/step-7-plan-free.png` |
| 9 | `static/img/guides/create-angular-frontend-capsule/step-8-git-repository.png` |
| 10 | `static/img/guides/create-angular-frontend-capsule/step-10-build-deploy.png` |
| 12 | `static/img/guides/create-angular-frontend-capsule/step-12-deploy-builds.png` |

See also `reports/2026-11-20-create-angular-frontend-capsule.md`.