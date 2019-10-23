This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you should run:

### `npm install`

My app will allow parks to login and post, manage, and delete items that have been lost on their property. The app will allow individuals to post requests for missing items. Parks will be able to filter items by various criteria. The app will alert visitors of actions taken on their items.

No api's are being used currently.

Home page displays all items on the app that have been marked as "claimed" or "donated" as a sort of splash page that shows that app's successful transactions.
Visitors tab directs customers to a form where they can submit lost item claims to the database.
Account/Register tab will allow parks to sign up as a new user and begin use of app or directs them to an Account Dashboard where they can fill in or update park info.
the Parks tab navbar dropdown gives three options
    1. "Home" shows a form for Parks to submit listings to database for item they have found in their parks. Followed by a list of items that have been submitted y visitors as lost but not yet found on property
    2. "Items" shows a list of all items of any given status associated with the park who is logged in at the time. Parks can filter through these items y category or status.
    3. a link to external website for National Parks
There is a Logout btn on the pages requiring login