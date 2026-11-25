# Walkthrough report: View backend capsule logs

- **Run**: 2026-11-25-0736
- **Guide**: `docs/products/backend-capsule/logs.md`
- **Feature**: View backend capsule logs
- **Goal**: Expect to see capsule logs in the logs tab and request logs in the access logs tab
- **Target**: https://test-platform.codecapsules.io
- **Format check**: pass
- **Manifest goals reached**: no

## Setup (not testable)

- Signed in headless with the EMAIL / PASSWORD env vars (values not recorded).
- The guide's prerequisite (a Backend Capsule) already existed. The guide names no capsule, so I used `demo-django` (`demo-django-iplj`), a **Backend Capsule** in the `Document Drift` Space. Its toggle shows **Capsule Running**, but its last build (Nov 24) failed.

## Actions taken

1. Opened the Space `Document Drift` and selected the Backend Capsule `demo-django`.
2. Clicked the **Logs** tab.
3. Looked for **Capsule logs**, **Build logs** and **Access logs** to switch between, then scrolled to the latest entries. As the site has no such switch, I checked the tabs the logs live on: **Access** and **Builds**.

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|---|---|---|---|
| 1 | pass | Open the Space and select the Backend Capsule | Capsule page opened with tabs Details, Deploy, Config, Scale, Logs, Access, Domains, Builds, Usage, Metrics | — |
| 2 | pass | Click the **Logs** tab | **Logs** tab opened (`/logs`) | — |
| 3 | fail | Open **Capsule logs**, **Build logs**, or **Access logs** as listed; scroll to latest entries; see capsule logs, build logs and access logs | The **Logs** tab has no **Capsule logs**, **Build logs** or **Access logs** options. It shows one application log stream (header "Application logs expire after 1 month", search, filter, download). For this capsule it stayed on "Loading Application Logs" and then "We noticed you've been waiting a while" (no logs to show). Access logs are on the separate **Access** tab (`/access-logs`, "Access logs expire after 1 month", entries such as `GET /`). Build logs are on the separate **Builds** tab (build "Failed", with log lines under "Previous Build for demo-django-iplj"). | [step-3.jpg](step-3.jpg) |

## Mismatches / issues

- Action 3: the guide says "Open **Capsule logs**, **Build logs**, or **Access logs** as listed." The site has no such list on **Logs**. Capsule (application) logs are on **Logs**, access logs are on the **Access** tab, and build logs are on the **Builds** tab.
- Action 3: the guide's final sentence "You now see the capsule logs, build logs, and access logs" does not match the goal "capsule logs in the logs tab and request logs in the access logs tab". Build logs are not part of that goal.
- Goal check: access logs were visible on the **Access** tab, but only by leaving the guide's flow. Capsule logs did not load for the test capsule, so I could not confirm entries in the **Logs** tab.
- Troubleshooting: "Trigger a new build from the **Deploy** tab ... then refresh **Build logs**." There is no **Build logs** control; build output is on **Builds**. Not walked, since the guide's steps already failed.

## Tickets

### logs-wt-1
- **ID**: logs-wt-1
- **Type**: Guide fix
- **Title**: Replace the "switch log streams" step with the real tabs: **Logs** and **Access**.
- **Problem**: Step 3 says "Open **Capsule logs**, **Build logs**, or **Access logs** as listed... You now see the capsule logs, build logs, and access logs for your Backend Capsule." The **Logs** tab shows one application log stream and has no such options. Access logs are on the **Access** tab. Action 3, screenshot `step-3.jpg`.
- **Change**: Rewrite steps 2 and 3. Step 2: "Click the **Logs** tab. You see the capsule logs; scroll to the latest entries." Step 3: "Click the **Access** tab. You see the request logs for your capsule." Remove "Build logs" from the end state so it matches the goal. Update `description` and the intro line to say capsule logs and access logs.
- **Done when**: Re-running the steps finds each named tab, and the last step ends with capsule logs visible in **Logs** and request logs in **Access**.

### logs-wt-2
- **ID**: logs-wt-2
- **Type**: Guide fix
- **Title**: Point the empty-logs troubleshooting entry at the **Builds** tab.
- **Problem**: The troubleshooting entry "Build logs are empty" says to "refresh **Build logs**". The site has no **Build logs** control; build output appears on the **Builds** tab. Related to action 3.
- **Change**: Either remove the entry (if build logs are out of scope) or change it to a symptom on the **Logs** tab, such as "Logs stay on Loading Application Logs", with the cause "the capsule has not started or has produced no logs" and the fix "start the capsule and generate a request, then reopen **Logs**".
- **Done when**: Every control named in Troubleshooting exists on the site.
