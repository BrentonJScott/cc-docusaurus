---
slug: "/tutorials/create-and-host-an-api-with-flask"
title: "Create and Host an API with Flask"
description: >-
  Build a personal API that lets you access up to the minute exchange rates and weather data for cities of your choosing.
sidebar_label: "Create and Host an API with Flask"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Create and Host an API With Flask

Build a personal API that lets you access up to the minute exchange rates and weather data for cities of your choosing.

## What you'll build

An API, or Application Programming Interface, is a tool enabling developers to interact with data online. Imagine: you navigate to some website and see your location’s temperature displayed on their homepage. How did they present this information?

Undoubtedly, they used an API. APIs are hosted on a server and operate as an access point between the user and some data.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/platform/account/connect-version-control', label: '🔌 GitHub connected', description: 'Link GitHub for deploy.'},
  ]}
/>
## Part 1: Set up the project

In this part, you'll create a virtual Python environment and install the packages the API needs.

### Setting Up Our Environment

First, let’s set up a virtual Python environment using Virtualenv. Virtualenv provides a clean Python install with no third-party libraries or packages, allowing us to work on this project without interfering with the dependencies of our other projects.

1. Open your terminal and create an empty folder.
2. Navigate to the folder via your terminal, and enter:

```
virtualenv env
```

To activate the virtual environment, enter one of the following:

#### Linux/MacOSX

```
source env/bin/activate
```

#### Windows

```
env\Scripts\activate.bat
```

If the virtual environment has activated correctly, you’ll see (env) to the left of your name in the terminal.

### Installing the Dependencies

Now that we’ve activated the virtual environment, let’s take a look at the packages we’ll use to create our API:

* Flask is a minimal web development framework for Python. Flask provides resources and tools for building and maintaining web applications, websites, and more.
* Gunicorn is a WSGI server that will help serve our Python application (the API hosted on Code Capsules).
* Requests is a Python library we will use to interact with APIs.

From your terminal where you activated the virtual environment, install these packages with:

```
pip3 install flask gunicorn requests
```

Note, pip will have automatically been installed when you set the virtual environment, if not, you can follow this guide to install it.

:::tip[Checkpoint]

Your terminal shows `(env)` next to your prompt, and `pip3 install flask gunicorn requests` finished without errors.

:::

## Part 2: Get data from two APIs

In this part, you'll register for the OpenExchangeRates and weatherstack APIs and request exchange rates and a temperature from them.

### Registering Accounts on OpenExchangeRates and weatherstack

Our API will return the current temperature of a chosen city and the USD exchange rates for three currencies. We’ll create our API by combining data from two other APIs – weatherstack and OpenExchangeRates. As their names suggest, weatherstack will provide the temperature data, and OpenExchangeRates the exchange rate data.

Registering an account is required so that we can receive a unique API key. An API key is a password that lets us use a particular API. In APIs with more sensitive data, these are used to prevent unauthorized access, but for open APIs like weatherstack and OpenExchangeRates, they’re used for rate limiting to prevent users from sending too many requests at once and overwhelming the system.

#### Creating our accounts

First, let’s register an account on OpenExchangeRates. Navigate to here and:

1. Sign up and log in.
2. On the dashboard, click “App IDs”.
3. Take note of your “App ID” (API key) you will need to paste it into the code below.

Obtaining the weatherstack API key is similar:

1. Create a free account on weatherstack
2. Log in and take note of the API key presented in the control panel, you will need to paste it into the code below.

Now we can retrieve data from the OpenExchangeRates and weatherstack APIs using our API keys. Let’s try that out now.

#### Getting exchange rates

First, let’s see how requesting data from OpenExchangeRates works. Create a file named app.py and open it.

To request data from an API, we need an endpoint for the type of data we want. APIs often provide multiple endpoints for different information – for example, a weather API may have one endpoint for temperature and another for humidity.

In the code below, the EXCHANGE\_URL variable contains the OpenExchangeRates endpoint for retrieving the latest exchange rates. Enter it in your app.py file now, replacing YOUR-API-KEY-HERE with the OpenExchangeRates API key you saved earlier.

```python
import requests

EXCHANGE_URL = 'https://openexchangerates.org/api/latest.json?app_id=YOUR-API-KEY-HERE'
exchange_data = requests.get(EXCHANGE_URL)
```

Note that we are including a secret API key in our codebase, which is bad practice. In later tutorials, you’ll see how to use environment variables with Code Capsules for better security.

In this code, we’re using the requests module to fetch data from the API. It does this over HTTPS, the same way your browser would. In fact, if you copy the value of EXCHANGE\_URL to your browser now, you’ll see exactly what data your code is fetching.

Note the format of the URL:

* https://openexchangerates.org is the website.
* /api/ is the path containing the API portion of the website.
* latest.json is the API endpoint which returns the latest exchange rates.
* ?app\_id=YOUR-API-KEY-HERE specifies our password for accessing the API.

OpenExchangeRates has many other endpoints, each of which provides a different set of data. For example, you could request data from the historical endpoint (https://openexchangerates.org/api/historical/) to access past exchange rates.

Now let’s print the data using the .json() method. This method converts the data from raw text into JSON (JavaScript Object Notation), which we can work with like a Python dictionary.

```python
print(exchange_data.json())
```

When running the program, you will see a lot of output. This is because we are currently retrieving every exchange rate OpenExchangeRates provides. Let’s modify the code to only receive exchange rates from USD to EUR, CAD, and ZAR.

Add the following lines below EXCHANGE\_URL:

```python
EXCHANGE_PARAMS =  {'symbols':'ZAR,EUR,CAD'}

exchange_data = requests.get(EXCHANGE_URL, EXCHANGE_PARAMS)
```

Then change your print statement as follows:

```python
print(exchange_data.json()['rates']) # Print only exchange rates
```

Now we’ve included an EXCHANGE\_PARAMS variable. Providing parameters to an API endpoint will alter which data is retrieved. The parameters available will depend on the API endpoint. You can find a list of parameters for the latest endpoint here.

In our case, we supplied the parameter symbols with the three currencies we want data for. When you run the program again, you should only see three exchange rates.

#### Getting the temperature

Now that we’ve obtained the exchange rates, we can retrieve the temperature for a city. Let’s modify the program by adding the following below the print statement. Make sure to replace YOUR-API-KEY-HERE with the weatherstack API key.

```python
WEATHER_URL = 'http://api.weatherstack.com/current?access_key=YOUR-API-KEY-HERE'
WEATHER_PARAMS = {'query':'Cape Town'}

weather = requests.get(WEATHER_URL, params=WEATHER_PARAMS) 

print(weather.json()['current']['temperature'])
# will print only the temperature; print without indexing to see all the values returned!
```

Here we retrieve the temperature for Cape Town, South Africa. You can replace “Cape Town” with another city of your choice to see its temperature.

:::tip[Checkpoint]

Run `python app.py`. The terminal prints the three exchange rates (`ZAR`, `EUR`, `CAD`) and then the current temperature for Cape Town.

:::

## Part 3: Create the API with Flask

In this part, you'll turn the script into a Flask API and add the files Code Capsules needs to run it.

### Creating our API

Now we’ll get to create the API with Flask. Our API will package the weatherstack and OpenExchangeRates data together in a single endpoint.

This means we can build other applications later, which will be able to retrieve all the data above by calling `requests.get(MY_CODE_CAPSULES_URL)`.

#### Beginning steps with Flask

First, we can remove all the print statements in our `app.py` file. Afterward, edit the file accordingly:

```python
import requests
from flask import Flask, jsonify

EXCHANGE_URL = 'https://openexchangerates.org/api/latest.json?app_id=YOUR-API-KEY-HERE'
EXCHANGE_PARAMS =  {'symbols':'ZAR,EUR,CAD'}

WEATHER_URL = 'http://api.weatherstack.com/current?access_key=YOUR-API-KEY-HERE'
WEATHER_PARAMS = {'query':'Cape Town'}

app = Flask(__name__) 

@app.route('/') # Create main page of web-application
def index():
    return "Welcome to my API!" # Display text on main page

if __name__ == '__main__':
    app.run() # Run the application
```

After instantiating a Flask object, we add `@app.route(‘/’)`. The `@` symbol is known as a Python decorator – its use isn’t essential for our application. Note that the below creates the homepage for your API:

```python
@app.route(`/`)
def index():
    return "Welcome to my API!"
```

Once the API is hosted on Code Capsules, you’ll see “Welcome to my API!” when you visit the app’s URL, which you can find under the domains section of the capsule.

Next, we’ll implement the ability to “get” (using `requests.get()`) our data from the API when it’s hosted.

#### Combining the APIs

We’ve already written code to retrieve our data – now we need to combine it and create an endpoint to fetch it. We’ll do this by creating a new endpoint called /get that returns our selected data.

```python
@app.route('/get',methods=['GET']) # Add an endpoint to access our API
def get():
    exchange_data = requests.get(EXCHANGE_URL, EXCHANGE_PARAMS)  
    weather = requests.get(WEATHER_URL,params=WEATHER_PARAMS) 

    return jsonify({
        'usd_rates': exchange_data.json()['rates'],
        'curr_temp': weather.json()['current']['temperature']
    })
```

`@app.route(‘/get’, methods=[‘GET’])` adds an endpoint, `/get`, allowing us to retrieve data from the API. When Code Capsules gives us a URL for our API, we’ll be able to use this URL plus the endpoint `/get` to retrieve data from our API, combining the inputs from the two APIs we are calling out to in turn.

Next, the statement below returns our data in JSON:

```python
return jsonify({
    'usd_rates' : exchange_data.json()['rates'],
    'curr_temp' : weather.json()['current']['temperature']
    })
```

Here, the exchange rate data is stored under `usd_rates` and the temperature data under `curr_temp`. This means that if we request our data and store it in a variable like `my_data`, we’ll be able to print out the exchange rates by executing `print(my_data[‘usd_rates’])`, and print the temperature by executing `print(my_data[‘curr_temp’])`.

The API is complete – only a few steps left before hosting it on Code Capsules.

### Freezing Requirements and Creating the Procfile

Before sending our API to GitHub (so Code Capsules can host it), we need the `requirements.txt` file, and a Procfile.

The `requirements.txt` file contains information about the libraries we’ve used to make our API, which will allow Code Capsules to install those same libraries when we deploy it. To create this file, first ensure your terminal is still in the virtual environment. Then, in the same directory as the app.py file, enter `pip3 freeze > requirements.txt` in your terminal.

Next, create a new file named `Procfile` in the same directory. Open the `Procfile` and enter:

```
web: gunicorn app:app
```

This tells Code Capsules to use the Gunicorn WSGI server to serve the HTTP data sent and received by our Flask API.

:::tip[Checkpoint]

Your project folder contains `app.py`, `requirements.txt`, and `Procfile`.

:::

## Part 4: Host the API on Code Capsules

In this part, you'll push the project to GitHub, deploy it to a Backend Capsule, and request data from the live API.

### Hosting the API on Code Capsules

The API is now ready to host on Code Capsules. Follow these steps to get it online:

1. Create a remote repository on GitHub.
2. Push the `Procfile`, `requirements.txt`, and `app.py` files to the repository.
3. Link the repository to your Code Capsules account following this guide.
4. Create a new Team and Space (as necessary).

With the repository linked to Code Capsules, we need to store the API on a Capsule:

1. Create a new Capsule.
2. Choose Backend Capsule and continue.
3. Select your GitHub repository and branch, then click **Next**.
4. Leave the **Run Command** field blank (our `Procfile` handles this step).
5. Create the Capsule.

Once the Capsule has built, the API is hosted! Let’s take a brief look at how to interact with it.

#### Viewing and interacting with our API

Once the Capsule has been built, Code Capsules will provide you with a URL (found in the “Overview” tab). Enter the URL in your browser, and you’ll be greeted with “Welcome to my API!”. To view the API data, add /get to the end of the URL.

Now, try interacting with the API through code. In a new file, enter the following, replacing the URL with your Code Capsules URL (ensure /get is at the end of the URL):

```json
import requests

MY_URL = 'https://my-code-capsules-url.codecapsules.space/get'

api_data = requests.get(MY_URL) 

print(api_data.json())
```

:::tip[Checkpoint]

Your Capsule URL shows “Welcome to my API!”, and the URL with `/get` at the end returns the exchange rates and the temperature as JSON.

:::

## Summary

You followed **Create and Host an API with Flask** and deployed the result on Code Capsules.

## Next steps

<DocCardList
  items={[
    {type: 'link', href: '/tutorials', label: '🎓 More tutorials', description: 'Browse other step-by-step guides.'},
    {type: 'link', href: '/frontend/index', label: '📋 Frontend guides', description: 'Deploy another frontend.'},
    {type: 'link', href: '/backend/index', label: '📋 Backend guides', description: 'Deploy another backend.'},
  ]}
/>

## Troubleshooting

<details>
<summary>The deploy fails after git push</summary>

Open the capsule **Deploy** tab and read **Build logs**. Confirm the branch matches the one Code Capsules builds from and that environment variables are set.

</details>
