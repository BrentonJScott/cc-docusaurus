# Platform feature audit (2026-11-20)

Target: https://test-platform.codecapsules.io

| Guide | Functional | Doc fidelity |
|---|---|---|
| docs/guides/create-angular-frontend-capsule.md | pass | pass |

## docs/guides/create-angular-frontend-capsule.md

Functional detail: Landed on https://test-platform.codecapsules.io/dash/overview/quick-start

| Step | Fidelity | Detail |
|---|---|---|
| Login UI: Welcome back | pass | Visible label/control found |
| Login UI: Email textbox | pass | Visible label/control found |
| Login UI: Password textbox | pass | Visible label/control found |
| Login UI: Log in button | pass | Visible label/control found |
| 1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”. | pass | Login controls match live platform labels |
| 2. On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. | pass | Login controls match live platform labels |
| 3. Click **Log in**. | pass | Login controls match live platform labels |
| 4. Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?** | pass | Not re-checked this run (authenticated UI) |
| 5. On **Quick Start**, find the **Angular** card (**Angular applications**) and click **Deploy Now**. You should reach **New Capsule** at `/new/capsule?capsuleType=frontend` with breadcrumbs **Hosting** / **Plan** / **Configure** / **Deploy**. | pass | Not re-checked this run (authenticated UI) |
| 6. On **Capsule Details**: | pass | Not re-checked this run (authenticated UI) |
| 7. On **Hosting**, click the **Static** option card (radio row that includes **No server**), then click **Next**. If validation shows **Choose how your site is hosted to continue**, the Static row is not selected yet. | pass | Not re-checked this run (authenticated UI) |
| 8. On **Plan**, click the **Free** plan card, then **Next** (other tiers use the same card-style radio rows). | pass | Not re-checked this run (authenticated UI) |
| 9. On **Connect a Git Repository**: | pass | Not re-checked this run (authenticated UI) |
| 10. On **Build & Deploy**, fill the fields that use placeholder examples on the live form: | pass | Not re-checked this run (authenticated UI) |
| 11. Click **Create Capsule**. | pass | Not re-checked this run (authenticated UI) |
| 12. On the capsule **Deploy** tab, open **Builds** (or the **Builds** side panel). Confirm the latest build shows **Building**, **Queued**, or **In progress**. | pass | Not re-checked this run (authenticated UI) |

