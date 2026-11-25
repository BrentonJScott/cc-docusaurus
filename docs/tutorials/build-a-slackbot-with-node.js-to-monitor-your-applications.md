---
slug: "/tutorials/build-a-slackbot-with-node.js-to-monitor-your-applications"
title: "Build a Monitoring Slackbot"
description: >-
  Deploy a Node.js Slackbot on Code Capsules that posts a message when it starts and reports app stats when you run the `/stats` command.
sidebar_label: "Build a Monitoring Slackbot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Build a Slackbot with Node.js to Monitor your Applications

Deploy a Node.js Slackbot on Code Capsules that posts a message when it starts and reports app stats when you run the `/stats` command.

## What you'll build

A Node.js Express app on Code Capsules that posts a message to a Slack channel when it starts and answers the `/stats` slash command with its current stats. You'll also verify Slack's request signature so that only your Slack workspace can read those stats.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
    {type: 'link', href: 'https://git-scm.com/downloads', label: '💻 Git installed', description: 'Commit and push your code.'},
    {type: 'link', href: 'https://nodejs.org/en/download/', label: '💻 Node.js installed', description: 'Run and install the project packages.'},
    {type: 'link', href: 'https://slack.com', label: '💬 Slack workspace', description: 'Use a workspace you can safely send many test messages to.'},
  ]}
/>

You also need basic knowledge of JavaScript.

## Part 1: Create the repository and base project

In this part, you'll create a GitHub repository and set up a Node.js project in it.

1. **Create the GitHub repository**

   Create a new repository on GitHub named _slackbot_, then clone it onto your computer and go into its directory.

2. **Initialise the project**

   In a terminal in the repository directory, run the command below and press **Enter** for each question to accept the defaults.

   ```bash
   npm init
   ```

3. **Install the packages**

   [Express](https://expressjs.com) is the web server, [body-parser](https://www.npmjs.com/package/body-parser) parses the data Slack sends, and [superagent](https://www.npmjs.com/package/superagent) sends messages to Slack.

   ```bash
   npm install express body-parser superagent 
   ```

4. **Add the project files**

   Create an empty `index.js` file in the project folder. Create a `.gitignore` file and add this line to it.

   `.gitignore`

   ```
   node_modules
   ```

5. **Push the project**

   Push the base project to GitHub.

   ```bash
   git add . 
   git commit -am 'added base files for project'
   git push origin
   ```

:::tip[Checkpoint]

Your GitHub repository contains `index.js`, `.gitignore`, and `package.json`.

:::

## Part 2: Create the capsule and Slack app

In this part, you'll create the Code Capsules capsule and register the Slack app with a `/stats` command.

6. **Create a Backend Capsule**

   In your Space, create a **Backend Capsule**. Choose your payment plan, give Code Capsules access to the _slackbot_ repository on GitHub, choose it, and press **Next**. Leave **Run Command** blank and click **Create Capsule**.

7. **Create the Slack app**

   Go to [Slack API](https://api.slack.com/apps), click **Create an app**, then **From Scratch**. Name the app (this tutorial uses _Serverbot_), choose your workspace, and click **Create App**.

8. **Allow the bot to post**

   Click **OAuth & Permissions** on the left panel. Under **Bot Token Scopes**, click **Add an OAuth Scope** and choose **chat:write**.

9. **Create the slash command**

   Under **Features**, click **Slash Commands**, then **Create a new Command**. Name it _/stats_, enter a description such as _Returns key stats from the app_, and set **Request URL** to the **Domain** from your capsule **Details** tab followed by `/slack/command/stats`. Click **Save**.

:::tip[Checkpoint]

Your capsule is listed in your Space, and your Slack app shows the **/stats** slash command with your capsule's **Request URL**.

:::

## Part 3: Send a startup message

In this part, you'll connect the bot to Slack and deploy code that posts a message to a channel when the app starts.

10. **Get the bot token**

    In your Slack app, click **OAuth & Permissions**, click **Install to Workspace**, then **Allow**. Copy the **Bot User OAuth Token**.

11. **Add the token to the capsule**

    On your capsule, open the **Config** tab and add an environment variable named `SLACK_BOT_TOKEN` with the token as its value.

12. **Get the channel ID**

    In Slack, right-click the channel the bot should post to and choose **Copy Link**. The last part of the link is the channel ID, such as `C01SZ6Z3TCY` in `https://<workspace-name>.slack.com/archives/C01SZ6Z3TCY`.

13. **Add the channel ID to the capsule**

    On the **Config** tab, add an environment variable named `SLACK_CHANNEL_ID` with the channel ID as its value. Click **Update & Start Build**.

14. **Invite the bot**

    In the channel, @ mention the name you gave the bot and click **Invite Them**.

15. **Add the startup code**

    This code starts an Express server and posts a message to your channel with the token as a bearer header.

    `index.js`

    ```javascript
    const express = require('express');
    const superagent = require('superagent');

    const app = express();

    let port = process.env.PORT || 3000;
    app.listen(port, ()=>{
      console.log(`App listening on port ${port}`);
      sendStartupMessageToSlack(); 
    });

    function sendStartupMessageToSlack(){
        superagent
          .post('https://slack.com/api/chat.postMessage')
          .send({
            channel:process.env.SLACK_CHANNEL_ID, 
            text:"I'm alive and running"
          })
          .set('accept', 'json')
          .set('Authorization', 'Bearer '+ process.env.SLACK_BOT_TOKEN)
          .end((err, result) => {
          });
    }
    ```

16. **Add a start script**

    Code Capsules runs `npm start`, so add the `start` line under `scripts` in `package.json`.

    `package.json`

    ```json
    {
      "name": "slackbot",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "body-parser": "^1.19.0",
        "express": "^4.17.1",
        "superagent": "^6.1.0"
      }
    }
    ```

17. **Push to deploy**

    Commit and push. Code Capsules deploys automatically when it sees the new commit.

    ```bash
    git add . 
    git commit -am 'added code to call Slack on startup'
    git push origin
    ```

:::tip[Checkpoint]

After a few minutes, your Slack channel shows the message _I'm alive and running_ from your bot.

:::

## Part 4: Add the /stats command with verification

In this part, you'll answer the `/stats` command and reject requests that don't come from Slack.

18. **Add the slash command handler**

    Add this `require` statement at the top of `index.js`.

    `index.js`

    ```javascript
    const bodyParser = require("body-parser");
    ```

    Then add the handler below it. It replies with the app's stats in the format Slack expects.

    `index.js`

    ```javascript
    app.use(bodyParser.urlencoded());

    app.post('/slack/command/stats', [function(req,res){
      const slackReqObj = req.body;
      const packageJson = require('./package.json');

      const current_time = new Date(); 
      const stats = {
        name: packageJson.name,
        version: packageJson.version,
        environment: process.env.NODE_ENV,
        platform: process.platform,
        architecture: process.arch,
        node_version: process.version,
        pid: process.pid,
        current_server_time: current_time.toString(),
        uptime: process.uptime(),
        memory_usage: process.memoryUsage()
      };

      const response = {
        response_type: 'in_channel',
        channel: slackReqObj.channel_id,
        text: JSON.stringify(stats, null, '\t')
      };

      return res.json(response); 
    }]);
    ```

19. **Push the handler**

    Commit and push, then wait for the startup message to appear again.

    ```bash
    git commit -am 'added handler for slash command'
    git push origin 
    ```

20. **Try the command**

    In the channel, type `/stats`. After a second or two, the app replies with its stats.

21. **Save the raw request body**

    Slack's signature is calculated from the raw body, so add this function to `index.js` to keep a copy before `body-parser` parses it.

    `index.js`

    ```javascript
    var rawBodySaver = function (req, res, buf, encoding) {
      if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
      }
    }
    ```

    Replace the `app.use(bodyParser.urlencoded());` line with this one.

    `index.js`

    ```javascript
    app.use(bodyParser.urlencoded({ verify: rawBodySaver}));
    ```

22. **Add the signature check**

    This middleware recomputes Slack's signature and returns a `401` when it doesn't match.

    `signing.js`

    ```javascript
    const crypto = require('crypto');

    function checkSlackMessageSignature(req, res, next){
        const timestamp = req.headers['x-slack-request-timestamp']; 
        const fiveMinutesAgo = Math.floor(Date.now() / 1000) - (60 * 5);

        if (timestamp < fiveMinutesAgo) {
            return res.sendFail(401, "mismatched timestamp");
        }

        const signing_secret = process.env.SLACK_SIGNING_SECRET; 

        const slack_signature = req.headers['x-slack-signature']; 
        const [version, slack_hash] = slack_signature.split('=');

        const sig_basestring = version + ':' + timestamp + ':' + req.rawBody;
        const hmac = crypto.createHmac('sha256', signing_secret); 
        hmac.update(sig_basestring); 
        const our_hash = hmac.digest('hex');    

        if (crypto.timingSafeEqual(Buffer.from(slack_hash), Buffer.from(our_hash))) {
            return next(); 
        }
        else {
            return res.send(401, "Invalid request signature");
        }
    }

    module.exports = checkSlackMessageSignature; 
    ```

23. **Add the signing secret**

    In your Slack app, click **Basic Information**, scroll to **App Credentials**, and click **Show** next to **Signing Secret**. On your capsule's **Config** tab, add an environment variable named `SLACK_SIGNING_SECRET` with that value and click **Update & Start Build**.

24. **Use the check in index.js**

    Import the middleware near the top of `index.js`.

    `index.js`

    ```javascript
    const checkSlackMessageSignature = require('./signing'); 
    ```

    Add it before the handler in the `/slack/command/stats` route.

    `index.js`

    ```javascript
    app.post('/slack/command/stats', [checkSlackMessageSignature, function(req,res){
    ```

25. **Push the final version**

    Commit and push to start the final deploy.

    ```bash
    git add . 
    git commit -am 'added message signature checking'
    git push origin
    ```

:::tip[Checkpoint]

Type `/stats` in your Slack channel and the app replies with its stats. A request to the same endpoint from a tool such as Postman without a valid `x-slack-signature` header is rejected with a `401`.

:::

## Summary

You built a Node.js Slackbot and deployed it on Code Capsules. It posts a startup message to your Slack channel and answers the `/stats` slash command with the app's name, version, environment, and process information. It checks Slack's request signature, so requests that don't come from your workspace are rejected.

## Next steps

<DocCardList
  items={[
    {type: 'link', href: '/docs/tutorials/build-a-mern-job-board', label: '🎓 Build a MERN Job Board', description: 'Build and deploy another full-stack app.'},
    {type: 'link', href: '/docs/full-stack', label: '📋 Full-stack guides', description: 'Deploy other full-stack applications.'},
    {type: 'link', href: '/docs/products/frontend-capsule/deploy', label: '📋 Frontend guides', description: 'Deploy a frontend for your app.'},
  ]}
/>

## Troubleshooting

<details>
<summary>The deploy fails after git push</summary>

Open the capsule **Deploy** tab and read **Build logs**. Confirm the branch matches the one Code Capsules builds from and that environment variables are set.

</details>
