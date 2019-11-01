# Overview of "The Great Lost + Found"
    My app will allow parks to login and post, manage, and delete items that have been lost on their property. The app will allow individuals to post requests for missing items. Parks will be able to filter items by various criteria. The app will alert visitors of actions taken on their items.
---
### Creation of app
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* Using a react-bootstrap library for many components
    [React-Bootstrap](https://react-bootstrap.netlify.com/getting-started/introduction/)
---
* The "database" is a JSON file hosted off of json server port 5002
* Below is a diagram showing the relationship between the data sets
![Entity Relationship](https://drive.google.com/file/d/1hpTB8c_IunZb5Rj8DlRGzxoerQAkW2x7/view?usp=sharing "The Great Lost and Found")

---
No api's are being used currently.
---
### Demo
1. In the project directory, you should run: `npm install`
2. For the best demonstration of all of the features, a base profile has been built with starter data.
Use:
username: sequioa@park.gov
password: Sequioa1!

#### Layout
1. Home page displays all items on the app that have been marked as "claimed" or "donated" as a sort of splash page that shows that app's successful transactions.
2. Visitors tab directs customers to a form where they can submit lost item claims to the database.
3. Account/Register tab will allow parks to sign up as a new user and begin use of app or directs them to an Account Dashboard where they can fill in or update park info.
4. the Parks tab navbar dropdown gives three options
    1. "Home" shows a form for Parks to submit listings to database for item they have found in their parks. Followed by a list of items that have been submitted y visitors as lost but not yet found on property
    2. "Items" shows a list of all items of any given status associated with the park who is logged in at the time. Parks can filter through these items y category or status.
    3. a link to external website for National Parks
5. There is a Logout btn on the pages requiring login
---
### Downloading
1. First, fork the repo and clone it down.
2. Once it finished downloading, I recommend working in Visual Studio Code. From the root directory of the project,     run: npm install
3. Once the packages are done installing, from the root level
    run: npm start
4. This will host the application in your browser.
5. cd api in terminal in order to
type "json-server -p 5002 -w LostToFound.json"
6. These steps will let you run a json server with the database.json from the api directory, and allow all of the fetch calls to function.
---
### Author
Lance Pennington - [GitHub Repo](https://github.com/LanceP51/LostToFound)
---
### License
Copyright 2019 Lance Pennington