---
slug: "/full-stack/next.js/next.js-+-mongodb"
title: "Deploy Next.js with MongoDB"
description: "Deploy a full-stack Next.js app with MongoDB on Code Capsules from GitHub. Connect Next.js to a managed Mongo Data Capsule, step by step."
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Next.js + MongoDB

Deploy a Next.js and Mongo application and learn how to host backend code on Code Capsules.

## Prerequisites
Code Capsules connects to GitHub repositories to deploy applications. To follow this guide, you'll need a [Code Capsules](/docs/shared/create-an-account) account and a [GitHub](https://github.com/) account.

To demonstrate how to deploy a Next.js MongoDB application with Code Capsules, we've provided an example application, which you can find on the [Code Capsules GitHub repository](https://github.com/codecapsules-io/demo-next-mongodb-api).

Sign in to GitHub, and fork the example application by clicking **Fork** at the top-right of your screen and selecting your GitHub account as the destination.

Log in to your Code Capsules account and navigate to the Spaces tab. Once there, click the yellow `+` icon on the bottom left of the screen to add a new Space.

Follow the prompts, choosing your region and giving your Space a name, then click **Create Space**.




1. Choose a Team — you can use a default **personal** Team if you're the only person working on this project, or a named Team if you're collaborating with others
2. This should remind you of the project, for example, **customer-api** or **notetaking-app**
3. Choose a country close to where most of your users will be

## Create the Capsule

A [Capsule](/platform/capsules/what-is-a-capsule/) provides the server for hosting an application on Code Capsules.

Navigate to the **Capsules** tab. Once there, click the yellow `+` icon on the bottom left of the screen to add a new Capsule.

To create a new MongoDB Capsule for your Space, follow the instructions below:

1. Choose **MongoDB**, your Team, and Space.
2. On **Plan & Deploy**, choose a cluster type, version, and plan.
3. Click **Create Capsule**.

Navigate to the Space containing your recently created Data Capsule and click the yellow `+` icon on the bottom left of the screen. Follow the instructions below to create a Backend Capsule:

1. Choose **Backend Capsule**, your Team, and Space.
2. Choose your payment plan.
3. Click the GitHub button and give access to the repository you forked at the start of the tutorial.
4. Choose the GitHub repository you forked.
5. Press **Next**.
6. Leave **Run Command** blank.
7. Click **Create Capsule**.

Code Capsules will automatically build your application when you've finished creating the Capsule. While the build is in progress, you can view the log by clicking **View Build Progress** next to the **Building Capsule** message.

Once your application is live, you can view the build log by selecting the **Deploy** tab and clicking the **View build log** link in the **Builds** section.



## Connect the Capsules

After the two capsules have been successfully built, the next step is to connect them. Copy the **Public Connection String** from the **Details** tab of your MongoDB Capsule, then navigate to the **Config** tab of your Backend Capsule. Scroll down to the **Data capsules** section, click **View** next to your MongoDB Capsule, and add the connection string as a `DATABASE_URL` environment variable.



## View Application

Once the build is complete, click the **URL** link in the **Config** tab, and you should see your deployed application.



If you’d like to deploy another application in a different language or framework, take a look at our other [deployment guides](/full-stack/).

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

