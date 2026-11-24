---
slug: "/tutorials/build-a-mern-job-board"
title: "Build a MERN Job Board"
description: >-
  Turn a MERN boilerplate app into a job board where people post and browse
  jobs, then deploy it on Code Capsules.
sidebar_label: "MERN Job Board"
doc_version: drift
---

# Build a MERN Job Board

Turn a MERN boilerplate app into a job board where people post and browse jobs, then deploy it on Code Capsules.

## What you'll build

A job board with a form for posting a job (title, description, location, and salary) and a list of every job posted so far. The React frontend and the Express backend run together in one Code Capsule, and jobs are stored in a MongoDB Capsule.

Along the way, you'll:

- Run the boilerplate app locally against your MongoDB Capsule.
- Add React components for the job form and the job list.
- Add a Mongoose model, controllers, and API routes that store and return jobs.
- Push your changes so Code Capsules deploys the finished app.

![The finished job board with the Submit a Job form and the list of available jobs](/img/tutorials/build-a-mern-job-board/job-board-ui.png)

## Prerequisites

- A deployed MERN boilerplate app with a MongoDB Capsule. See [Deploy a MERN stack app](/docs/guides/mern-stack).
- [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed on your computer.
- Basic knowledge of JavaScript and React.

## Part 1: Run the boilerplate locally

In this part, you'll get the deployed boilerplate app running on your computer, connected to your MongoDB Capsule.

### Step 1: Clone your repo and install dependencies

Clone the repo you deployed in the prerequisites, then run `npm install` in its root folder.

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

### Step 2: Set the database connection

On your MongoDB Capsule's **Details** tab, copy the **Public Connection String**. Create a `.env` file in the root folder and paste the string in as `DATABASE_URL`.

`.env`

```text
DATABASE_URL=mongodb+srv://username:password@cluster.example.mongodb.net/database
```

Install `dotenv` so the app reads the `.env` file:

```bash
npm install dotenv
```

Then add this line to `index.js`, below the other `require` statements:

`index.js`

```js
require('dotenv').config();
```

### Step 3: Build the frontend and start the app

Install the frontend's dependencies and build it, then start the app from the root folder. The Express server serves the built frontend from `client/build`.

```bash
cd client
npm install
npm run build
cd ..
node index.js
```

### Checkpoint

Open `http://localhost:8080`. You see the boilerplate MERN app.

![The boilerplate MERN app running locally](/img/tutorials/build-a-mern-job-board/mern-stack.png)

## Part 2: Build the frontend

In this part, you'll add a form for posting jobs and a list that shows every job.

### Step 4: Add the job form

Create a `components` folder in `client/src`, then create `submitJob.js` in it with this code. It sends the form's values to `/api/jobs/` when the reader clicks **Submit**.

`client/src/components/submitJob.js`

```jsx
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

### Step 5: Add the job list

Create `viewJobs.js` in the same folder. It loads every job from `/api/jobs/` when the page opens.

`client/src/components/viewJobs.js`

```jsx
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

### Step 6: Show both components on the page

Replace the contents of `client/src/App.js` with this code.

`client/src/App.js`

```jsx
import logo from './logo.svg';
import './App.css';
import React from 'react';
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

### Step 7: Add the styles and rebuild

Replace the contents of `client/src/App.css` with the [job board styles](https://github.com/ritza-co/mern-job-board/blob/main/client/src/App.css). Then rebuild the frontend and restart the app.

```bash
cd client
npm run build
cd ..
node index.js
```

### Checkpoint

Refresh `http://localhost:8080`. You see the **Submit a Job** form and the **View Available Jobs** heading. The list is empty because the backend doesn't have a jobs API yet.

## Part 3: Build the backend

In this part, you'll add the model, controllers, and routes that store jobs in MongoDB and return them to the frontend.

### Step 8: Add the job model

Replace the contents of `app/models/index.js` with this code.

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

Create `job.model.js` in the same folder. It tells MongoDB what a job looks like.

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

Delete `app/models/person.model.js`.

### Step 9: Add the job controllers

Create `job.controller.js` in `app/controllers`. `create` saves a new job, and `findAll` returns every job.

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

Delete `app/controllers/person.controller.js`.

### Step 10: Add the job routes

Create `job.routes.js` in `app/routes`. It connects `POST` and `GET` requests on `/api/jobs` to the controllers.

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

Delete `app/routes/person.routes.js`.

### Step 11: Use the job routes

In `index.js`, find this line:

```js
require("./app/routes/person.routes")(app);
```

Replace it with:

```js
require("./app/routes/job.routes")(app);
```

Restart the app with `node index.js`.

### Checkpoint

Open `http://localhost:8080`, fill in the form, and click **Submit**. The page reloads and your job appears under **View Available Jobs**.

## Part 4: Deploy the job board

In this part, you'll push your changes so Code Capsules builds and deploys the finished app.

### Step 12: Stop tracking the build folder and your `.env` file

Code Capsules builds the frontend when it deploys, so the build folder doesn't belong in Git. Your `.env` file holds your database connection string, so it must stay out of Git too. Add these lines to `.gitignore` in the root folder:

`.gitignore`

```text
/client/build
.env
```

### Step 13: Commit and push

Commit your changes and push them to the branch Code Capsules deploys from.

```bash
git add -A
git commit -m "Add job board"
git push origin main
```

### Checkpoint

Open your capsule's **Deploy** tab. A new build starts. When it finishes, open the capsule's URL: you see the job board, and jobs you submit appear in the list.

## Troubleshooting

### The job list stays empty and the browser console shows a 500 error

The app can't reach MongoDB. Check that `DATABASE_URL` in `.env` is the **Public Connection String** from your MongoDB Capsule, and that `require('dotenv').config();` is in `index.js`.

### The app won't start and shows `Cannot find module './app/routes/person.routes'`

`index.js` still loads the deleted person routes. Change the line to `require("./app/routes/job.routes")(app);` as in Step 11.

## Summary

You turned the MERN boilerplate into a job board. The React frontend has a form for posting jobs and a list of every job, and the Express backend stores jobs in your MongoDB Capsule through a model, controllers, and an API. Pushing to `main` deployed the whole app on Code Capsules.

## Next steps

- [How does pricing work](/docs/platform/billing/how-does-the-pricing-work): see what your Backend and MongoDB Capsules cost.
- [Host a React application](/docs/frontend/react): deploy a React frontend on its own Frontend Capsule.
