#### _**Link to deployed page**_: 
http://biotork-website.herokuapp.com/



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project contains an example project board meant to showcase how one can be used. The issues posted to it are not real issues.

#### _**IMPORTANT NOTE**_ - 
This project does not have a mongoDB connection setup. Setup the connection based on the environments below.
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.example.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.
- production: Since the config file is not pushed when you deploy your app, you must specifiy your db uri in heorku. Set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource. Make sure you name the environement variable "DB_URI".

## Getting Started
This repository aims to assist you in beginning work on a MERN stack application with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams.

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 

## File structure - UPDATED FOR GROUP 5B
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
        - #### Held inside is the background photos for each page appropriately labeled. As well as the logos used on the website. These can easily be changed to update the graphics.
    - #### `components` - This folder holds all of the different components that will make up our views
        - #### 'Footer' - Contains the code for the footer used across the website
        - #### 'Header' - Contains the code for the header used across the website
        - #### 'PR' - Contains the code for posting press releases in a standardized format
        - #### 'PR Admin' - Contains the code for the page that is used across to post the press releases 
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
        - #### 'AboutUs' - The about us page serves to display both a breif history of biotork and the mission statements for the company
        - #### 'Contact' - The contact page allows for sending an email to a company email that contains client contact information - THIS DOES NOT CURRENTLY WORK IN DEPLOYMENT - Local testing successful
        - #### 'Executives' - The executives page contains information about the executives and their headshots. The images are linked to externally and are easily changed. 
        - #### 'Home' - The home page displays a welcoming image and recent press releases
        - #### 'Projects' - The projects page displays all projects currently being developed by BioTork
        - #### 'Technology' - The technology page displays the proprietary technologies of Biotork
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Code Attribution
As this class was a learning experience we made heavy usage of online tutorials to help us along in the development process. Some tutorials lent templates for the features we developed within the website. 

This includes:
[HTML CSS Mobile Responsive Footer](https://codepen.io/jakeduncan/pen/rJZJMM)
[React/Bootstrap Cards](https://react-bootstrap.github.io/components/cards/)
[Build a website with React, React-Bootstrap, and React Router](https://www.youtube.com/watch?v=jgVkR5EKI68)
[Send Email with NODE JS REACT JS NODEMAILER](https://www.youtube.com/watch?v=04zqBhQx7xU&t=285s)

Dependencies:
axios, body-parser, bootstrap, classnames, concurrently, cookie-parser, express, http-proxy-middleware,jquery, mocha, mongoose, morgan, nodemailer, nodemailer-mailgun-transport, nodemon, popper.js, prop-types, react-bootstrap, react-visibility-sensor, should, superagent, supertest, cors

## Continuing Development
The currently deployed website contains all of the requested front end features and has appropriate and professional stylings.

However, some back end features are not working on Heroku. These features have been demoed locally and are verefied functional. As a group we have trapped to understand where things fail on Heroku. As best we can tell the issue is related to dependendancies and configuration of third party services. The master branch in its current state has functional backends for the contact form and the PR admin panel. The deployed branch removes these features to allow the server to not crash on deployment. This would be the best thing to tackle in future development.

Changing of graphics and text is trivial in the sites current state. All images are either externally linked or inside the assests folder when we expect them to be completely static. The text is all readable inline and styled already. 

## How to run
Locally: Clone the project, and navigate to the directory in command prompt / terminal. Run the commands in the getting started section (npm install && npm run-script install-all) and then use 'npm run-script dev' to run front and backend concurrently.

Heroku: Follow the procedures above ignoring the last command ('npm run-script dev'). Initialize a git repository if not already initialize. Add and commit project if not added and committed. Then use the following commands:
$ heroku create
$ git push heroku master

Script 'heroku-postbuild' takes care of building the project for deployment. 
## Project Features -- Images corresponding to pages described in 'File Structure'
![Home Page](../read_me_images/read_me_images/home.png)
Includes header to route to other pages
![Press Releases / Footer](../read_me_images/read_me_images/pr_footer.png)
Current Press Releases, updated by Press Release Admin
![About Us](../read_me_images/read_me_images/about.png)
About Us page
![Technology_1](../read_me_images/read_me_images/technology_1.png)
Top of the Technology Page
![Technology_2](../read_me_images/read_me_images/technology_2.png)
Bottom of Technology Page
![Technology Example](../read_me_images/read_me_images/tech_ex.png)
Example page of where cards on Technology link to
![Projects](../read_me_images/read_me_images/projects.png)
Projects page
![Projects Example](../read_me_images/read_me_images/project_ex.png)
Example page of where cards on Projects page link to
![Executives](../read_me_images/read_me_images/executives.png)
Page describing executives
![Contact Form](../read_me_images/read_me_images/contact.png)
Page to send email to the company from the website
![Press Release Backend](../read_me_images/read_me_images/pr_backend.png)
Page to update press releases shown on home page
