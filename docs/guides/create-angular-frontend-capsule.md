# Create Angular frontend capsule

Walk through creating an **Angular** app as a **Frontend Capsule** on the Code Capsules test platform. Steps below reflect visible labels on [test-platform.codecapsules.io](https://test-platform.codecapsules.io) captured on **2026-11-19**.

## Prerequisites

- A Code Capsules account on the test platform
- An Angular project in a connected Git repository (example build: `npm run build`, output folder e.g. `dist/your-project`)

## Steps

1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”.
2. On **Welcome back**, enter your email in the **Email** textbox (placeholder “Enter your email”).
3. Enter your password in the **Password** textbox (placeholder “Enter your password”).
4. Click the **Log in** button.
5. After login, open **Quick Start** in the sidebar if you are not already there. Confirm the heading **What type of capsule would you like to deploy?**
6. In the **Angular** row, click **Deploy Now**.
7. On **New Capsule** (breadcrumb **Plan** / **Configure** / **Deploy**), complete **Capsule Details** and use **Next** to continue the wizard. Use **Cancel** to exit without creating a capsule.

![Registration / log in entry](/img/guides/shared/step-0-open-site.png)

![Welcome back login form](/img/guides/shared/step-1-login-page.png)

![Quick Start capsule chooser](/img/guides/shared/step-2-quick-start.png)

![New Capsule — Capsule Details](/img/guides/create-angular-frontend-capsule/step-5-new-capsule-wizard.png)

Typical Angular build settings on **Configure**:

- **Build Command:** `npm run build`
- **Path to static content:** your Angular `dist/...` folder (must contain `index.html`)