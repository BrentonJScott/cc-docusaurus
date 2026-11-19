# Create React frontend capsule

Walk through creating a **React** app as a **Frontend Capsule** on the Code Capsules test platform.

## Prerequisites

- A Code Capsules account on the test platform
- A React project in a connected Git repository (Create React App: `npm run build`, output `build/`; Vite: output `dist/`)

## Steps

1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”.
2. On **Welcome back**, enter your email in the **Email** textbox.
3. Enter your password in the **Password** textbox.
4. Click the **Log in** button.

![Registration / log in entry](/img/guides/shared/step-0-open-site.png)

![Welcome back login form](/img/guides/shared/step-1-login-page.png)

:::caution
Post-login capsule wizard steps and screenshots will be added on a later drift run when team `EMAIL` / `PASSWORD` secrets are configured for this automation.
:::

Typical React build settings:

- **Build Command:** `npm run build`
- **Path to static content:** `build` or `dist` (folder containing `index.html`)