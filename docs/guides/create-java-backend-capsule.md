# Create Java backend capsule

Walk through creating a **Java** backend as a **Backend Capsule** on the Code Capsules test platform. The Quick Start page does not list a Java tile; use **Capsules** and the **New Capsule** wizard instead. Captured on **2026-11-19** on [test-platform.codecapsules.io](https://test-platform.codecapsules.io).

**Scope of numbered steps:** Steps 1–8 end after **Choose a Team** and **Next** on **Capsule Details** toward **Plan**. Java is selected via capsule type **Backend** (not a **Java**-labeled tile). Further wizard steps create the running capsule.

## Prerequisites

- A Code Capsules account on the test platform
- A Java application in a connected Git repository (Maven/Gradle project with a supported Java runtime)

## Steps

1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”.
2. On **Welcome back**, enter your email in the **Email** textbox (placeholder “Enter your email”).
3. Enter your password in the **Password** textbox (placeholder “Enter your password”).
4. Click the **Log in** button.
5. Click **Capsules** in the sidebar.
6. On the **Capsules** list, click the **+** link in the table header (upper right of the capsule list). Do not use the separate **+** in the far-left sidebar—that control is unrelated to creating a capsule. The wizard opens at **New Capsule** (`/new/capsule`).
7. Under **Capsule Details**, open **Choose a Capsule** (placeholder “Search/Select a Capsule Type”) and select **Backend** (description includes “Node, Java, Go or Python deployments”).
8. Under **Choose a Team** (placeholder “Search/Select a team”), pick your team, then click **Next** to continue **Plan** / **Configure** / **Deploy**.

![Registration / log in entry](/img/guides/shared/step-0-open-site.png)

![Welcome back login form](/img/guides/shared/step-1-login-page.png)

![Capsules list and create entry](/img/guides/create-java-backend-capsule/step-4-capsules-plus.png)

![New Capsule — Capsule Details](/img/guides/create-java-backend-capsule/step-5-backend-wizard.png)

For many Java samples you can leave **Run Command** blank on **Configure** and let the platform detect the build.