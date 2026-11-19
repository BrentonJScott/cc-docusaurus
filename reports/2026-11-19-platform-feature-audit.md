# Platform feature audit (2026-11-19)

Target: https://test-platform.codecapsules.io

| Guide | Functional | Doc fidelity |
|---|---|---|
| docs/guides/create-angular-frontend-capsule.md | fail | fail |
| docs/guides/create-react-frontend-capsule.md | fail | fail |
| docs/guides/create-java-backend-capsule.md | fail | fail |

## docs/guides/create-angular-frontend-capsule.md

Functional detail: EMAIL/PASSWORD env vars not set on runner

| Step | Fidelity | Detail |
|---|---|---|
| Login UI: Welcome back | pass | Visible label/control found |
| Login UI: Email textbox | pass | Visible label/control found |
| Login UI: Password textbox | pass | Visible label/control found |
| Login UI: Log in button | pass | Visible label/control found |
| 1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”. | pass | Login controls match live platform labels |
| 2. On **Welcome back**, enter your email in the **Email** textbox (placeholder “Enter your email”). | pass | Login controls match live platform labels |
| 3. Enter your password in the **Password** textbox (placeholder “Enter your password”). | fail | Blocked: not logged in |
| 4. Click the **Log in** button. | pass | Login controls match live platform labels |

## docs/guides/create-react-frontend-capsule.md

Functional detail: EMAIL/PASSWORD env vars not set on runner

| Step | Fidelity | Detail |
|---|---|---|
| Login UI: Welcome back | pass | Visible label/control found |
| Login UI: Email textbox | pass | Visible label/control found |
| Login UI: Password textbox | pass | Visible label/control found |
| Login UI: Log in button | pass | Visible label/control found |
| 1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”. | pass | Login controls match live platform labels |
| 2. On **Welcome back**, enter your email in the **Email** textbox. | pass | Login controls match live platform labels |
| 3. Enter your password in the **Password** textbox. | fail | Blocked: not logged in |
| 4. Click the **Log in** button. | pass | Login controls match live platform labels |

## docs/guides/create-java-backend-capsule.md

Functional detail: EMAIL/PASSWORD env vars not set on runner

| Step | Fidelity | Detail |
|---|---|---|
| Login UI: Welcome back | pass | Visible label/control found |
| Login UI: Email textbox | pass | Visible label/control found |
| Login UI: Password textbox | pass | Visible label/control found |
| Login UI: Log in button | pass | Visible label/control found |
| 1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”. | pass | Login controls match live platform labels |
| 2. On **Welcome back**, enter your email in the **Email** textbox. | pass | Login controls match live platform labels |
| 3. Enter your password in the **Password** textbox. | fail | Blocked: not logged in |
| 4. Click the **Log in** button. | pass | Login controls match live platform labels |

