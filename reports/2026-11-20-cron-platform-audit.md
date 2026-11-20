# Cron platform audit (2026-11-20)

**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` — 1 feature  
**Target:** https://test-platform.codecapsules.io

| DOCUMENTED_FEATURES | Guide file | Action |
|---|---|---|
| Create Angular frontend capsule | `docs/guides/create-angular-frontend-capsule.md` | Update guide + screenshots (drift) |

**Removed / added guides:** None (manifest and `docs/guides/` both list only Angular).

## Summary

| Guide | Functional | Doc fidelity |
|---|---|---|
| `create-angular-frontend-capsule.md` | fail (goal blocked) | drift → fixed in PR |

**Manifest goal:** Expect to see capsule building in builds tab — **not reached** on the audit account (no Git repositories connected).

## Mismatches (doc vs live UI)

- **Step 5 → 6:** Angular **Deploy Now** opens **Capsule Details** with **Backend** pre-selected; guide now tells readers to switch **Choose a Capsule** to **Frontend** (verified screenshot `step-5-new-capsule-wizard.png`).
- **Step 6:** Team/space fields are ng-select **combobox** inputs; clicking the placeholder text alone may not open the list. Guide updated to click the combobox under each label.
- **Step 9 title:** Live heading is **Connect a Git Repository** with **Search/Select a Repository** (not only “Git Repository”). **Select a Branch** shows **No items found** until a repository is selected.
- **Outcome gap (platform):** Audit account repository list empty after **Configure Git** not completed — steps 10–12 blocked; documented under **Platform note**, not treated as a product code fix.

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
| 9 (fail) | `static/img/guides/create-angular-frontend-capsule/failure-git-empty.png` |

See also `reports/2026-11-20-create-angular-frontend-capsule.md` and `reports/2026-11-20-platform-feature-audit.md`.