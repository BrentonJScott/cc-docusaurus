---
slug: "/tutorials/build-a-mern-job-board"
title: "Build a MERN Job Board"
description: >-
  Extend the MERN boilerplate into a job board where users view and submit jobs, then deploy it on Code Capsules.
sidebar_label: "Build a MERN Job Board"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Build a MERN Job Board

Extend the MERN boilerplate into a job board where users view and submit jobs, then deploy it on Code Capsules.

## What you'll build

A job board where users can submit jobs and browse the available listings. You'll add a React frontend with a submit form and a job list, and an Express API that stores jobs in MongoDB. One capsule hosts both the frontend and the backend.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/connect-github', label: '🔌 GitHub connected', description: 'Link GitHub for deploy.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork mern-stack', description: 'Fork codecapsules-io/mern-stack on GitHub.'},
    {type: 'link', href: '/docs/full-stack/mern-stack', label: '🛠️ Deployed MERN boilerplate', description: 'Deploy the MERN stack boilerplate from your forked repository.'},
    {type: 'link', href: '/docs/products/database-capsule/mongodb/deploy', label: '🍃 MongoDB Capsule', description: 'The database your job board stores jobs in.'},
    {type: 'link', href: 'https://nodejs.org', label: '💻 Node.js installed', description: 'Run the app on your computer.'},
  ]}
/>

You also need basic knowledge of JavaScript and React.

## Part 1: Run the boilerplate locally

In this part, you'll clone your forked boilerplate repository and run it on your computer.

1. **Clone and install**

   Clone your forked repository and run `npm install` in the project root.

2. **Set the database connection**

   Copy the **Public Connection String** from your MongoDB Capsule **Details** tab into a root `.env` file using the line below.

   `.env`

   ```
   DATABASE_URL=mongodb+srv://username:password@cluster.example.mongodb.net/database
   ```

3. **Load the environment variable**

   Run this command in the root folder to install the package that loads environment variables.

   ```bash
   npm install dotenv
   ```

   Open `index.js` in the root folder and add this line immediately below the other require statements.

   `index.js`

   ```
   require('dotenv').config();
   ```

4. **Build and start the app**

   In `client`, run `npm install` and `npm run build`, then run `node index.js` from the project root.

:::tip[Checkpoint]

Open `http://localhost:8080`. You see the boilerplate MERN application.

:::

## Part 2: Build the frontend

In this part, you'll add the components that submit and list jobs.

5. **Add the SubmitJob component**

   Create `client/src/components/submitJob.js` with a form that posts new jobs to `/api/jobs/`.

   `client/src/components/submitJob.js`

   ```js
   import React, { useState } from 'react'
   import axios from 'axios'

   const SubmitJob = () => {

       const [jobTitle, setJobTitle] = useState("")
       const [jobDescription, setJobDescription] = useState("")
       const [jobLocation, setJobLocation] = useState("")
       const [jobSalary, setJobSalary] = useState(null)

       const postJob = (e) => {
           const data = { title: jobTitle, description: jobDescription, location: jobLocation, salary: jobSalary }
           axios.post('/api/jobs/', data)
           .then(response => {
             console.log(response)
           })
       }

       return (
           <div className="submitJobContainer">
               <h3>Submit a Job</h3>
               <form className="formContainer" onSubmit={postJob}>
                   <input type="text" name="title" placeholder="Job Title" onChange={e => setJobTitle(e.target.value)} />
                   <input type="text" name="description" placeholder="Job Description" onChange={e => setJobDescription(e.target.value)} />
                   <input type="text" name="location" placeholder="Job Location" onChange={e => setJobLocation(e.target.value)} />
                   <input type="number" name="salary" placeholder="Job Salary" onChange={e => setJobSalary(e.target.value)} />
                   <button className="submitButton" type="submit">Submit</button>
               </form>
           </div>
       )
   }

   export default SubmitJob
   ```

6. **Add the ViewJobs component**

   This component fetches the available jobs when the page loads and displays them.

   `client/src/components/viewJobs.js`

   ```js
   import React, { useState, useEffect } from 'react'
   import axios from 'axios'

   const ViewJobs = () => {

       const [jobsStateArray, setJobsStateArray] = useState([])

       useEffect(() => {          
           axios.get('/api/jobs/')
           .then(response => {
               console.log(response)
               setJobsStateArray(response.data)
             })
       }, [])

       return (
           <div className="viewJobsContainer">
               <h3>View Available Jobs</h3>
               {jobsStateArray.map((item, index) => {
                   return (
                       <div className="jobCard">
                           <p><strong>Job Title</strong>: {item.title}</p>
                           <p><strong>Location</strong>: {item.location}</p>
                           <p><strong>Description</strong>: {item.description}</p>
                           <p><strong>Salary</strong>: {item.salary}</p>
                       </div>
                   )
               })}
           </div>
       )
   }

   export default ViewJobs
   ```

7. **Render the components in App.js**

   Replace the contents of `App.js` with this code so React renders both components.

   `client/src/App.js`

   ```js
   import logo from './logo.svg';
   import './App.css';
   import React, { useState } from 'react';
   import axios from 'axios';
   import SubmitJob from './components/submitJob';
   import ViewJobs from './components/viewJobs';

   function App() {
     return (
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h3>Job Board</h3>
         </header>
         <SubmitJob />
         <ViewJobs />
       </div>
     );
   }

   export default App;
   ```

8. **Style the job board**

   Copy the contents of [this CSS file](https://github.com/ritza-co/mern-job-board/blob/main/client/src/App.css) into `client/src/App.css`.

9. **Rebuild the frontend**

   In the `client` folder, run `npm run build`.

:::tip[Checkpoint]

Run `node index.js` in the root folder and open `http://localhost:8080`. You see the **Submit a Job** form and the **View Available Jobs** list.

:::

## Part 3: Build the backend

In this part, you'll add the job model, controller, and routes that save and retrieve jobs.

10. **Add the job database**

    Replace `app/models/index.js` with the Mongoose setup below.

    `app/models/index.js`

    ```js
    const dbConfig = require("../config/db-config.js");
    const mongoose = require("mongoose");
    mongoose.Promise = global.Promise;

    const db = {};
    db.mongoose = mongoose;
    db.url = dbConfig.url;
    db.jobs = require("./job.model.js")(mongoose);

    module.exports = db;
    ```

11. **Add the job model**

    This model tells MongoDB what a job looks like.

    `app/models/job.model.js`

    ```js
    module.exports = mongoose => {
        var schema = mongoose.Schema(
            {
            title: String,
            description: String,
            location: String,
            salary: Number
            },
            { timestamps: true }
        );

        schema.method("toJSON", function() {
            const { __v, _id, ...object } = this.toObject();
            object.id = _id;
            return object;
        });

        const Job = mongoose.model("job", schema);
        return Job;
    };
    ```

    Delete `person.model.js` from the `models` folder.

12. **Add the job controller**

    The `create` export saves a new job and `findAll` retrieves all submitted jobs.

    `app/controllers/job.controller.js`

    ```js
    const db = require("../models");
    const Job = db.jobs;

    // Create and Save a new Job
    exports.create = (req, res) => {
      // Validate request
      if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }

      // Create a Job
      const job = new Job({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        salary: req.body.salary
      });

      // Save Job in the database
      job
        .save(job)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Job."
          });
        });
    };

    // Retrieve all Jobs from the database.
    exports.findAll = (req, res) => {
        const title = req.query.title;
        var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

        Job.find(condition)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Jobs."
            });
          });
    };
    ```

    Delete `person.controller.js` from the `controllers` folder.

13. **Add the job routes**

    These routes send `post` and `get` requests to the controller.

    `app/routes/job.routes.js`

    ```js
    module.exports = app => {
        const jobs = require("../controllers/job.controller.js");

        var router = require("express").Router();

        // Create a new Job
        router.post("/", jobs.create);

        // Retrieve all Jobs
        router.get("/", jobs.findAll);

        app.use('/api/jobs', router);
    };
    ```

    Delete `person.routes.js` from the `routes` folder.

14. **Use the job routes**

    In `index.js` in the root folder, find this line:

    ```
    require("./app/routes/person.routes")(app);
    ```

    Change it to:

    ```
    require("./app/routes/job.routes")(app);
    ```

:::tip[Checkpoint]

Restart `node index.js` and open `http://localhost:8080`. Submit a job in the form. The job appears under **View Available Jobs**.

:::

## Part 4: Deploy to Code Capsules

In this part, you'll push your changes and open the live job board.

15. **Ignore the build folder**

    The frontend rebuilds when you deploy, so add this line to the `.gitignore` file in the root folder.

    `.gitignore`

    ```
    /client/build
    ```

16. **Commit your changes**

    Run these commands in the root folder.

    ```bash
    git add -A
    ```

    ```bash
    git commit -m "Added job board files"
    ```

17. **Push to GitHub**

    Code Capsules deploys the new version as soon as you push to the deploy branch, which is `main` here.

    ```bash
    git push origin main
    ```

18. **Open the live job board**

    In your Space, open the capsule and wait for the build to finish. On **Details**, open the capsule URL.

:::tip[Checkpoint]

The live URL shows the job board. Submit a job and it appears in the list.

:::

## Summary

You extended the MERN boilerplate into a job board. The React frontend has a form for submitting jobs and a list of available jobs, and the Express API saves them to MongoDB. The finished app is deployed on Code Capsules, with one capsule serving both the frontend and the backend.

## Next steps

<DocCardList
  items={[
    {type: 'link', href: '/docs/full-stack', label: '🛠️ Full-stack guides', description: 'Deploy other full-stack applications.'},
    {type: 'link', href: '/docs/products/frontend-capsule/deploy', label: '📋 Frontend guides', description: 'Deploy another frontend.'},
    {type: 'link', href: '/docs/products/database-capsule/mongodb/monitor', label: '🍃 Monitor MongoDB', description: 'Keep an eye on your job board database.'},
  ]}
/>

## Troubleshooting

<details>
<summary>The deploy fails after git push</summary>

Open the capsule **Deploy** tab and read **Build logs**. Confirm the branch matches the one Code Capsules builds from and that environment variables are set.

</details>
