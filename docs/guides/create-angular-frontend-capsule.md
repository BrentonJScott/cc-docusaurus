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

![Registration / log in entry](/img/guides/shared/step-0-open-site.png)

![Welcome back login form](/img/guides/shared/step-1-login-page.png)

:::caution
Capsule-creation steps after login are not yet documented in this guide. The next automation run will capture screenshots for **New Capsule → Frontend Capsule → Static hosting** once `EMAIL` / `PASSWORD` secrets are available on the runner.
:::

After you are logged in, finish the frontend wizard with:

- **Build Command:** `npm run build`
- **Path to static content:** your Angular `dist/...` folder (must contain `index.html`)