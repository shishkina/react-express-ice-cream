# Hooking up React and Express!!!

Today, you'll be hooking up a React app with an Express app! YAY! For great power and glory. Or something.

### LEARNING OBJECTIVES

- React! Express!
- Connecting a React frontend to an Express API

# Let's get started!

We're going to be working on an ice cream app all day today. This morning, you'll work on getting R set up yourself. Then in the afternoon, we'll go over CUD together. All together, that's CRUD. Perfect!

## Set up the Express app

- Create a database, `icecream_dev`
- `cd` into `icecream-app` and run the command `psql icecream_dev -f db/migrations/migration-111320171200.sql`
- Then run the command `psql icecream_dev -f /db/seeds/seed.sql`
- Run `npm install` to install all the dependencies
- `npm run dev` to start the server!

Check out some endpoints -- `/api/icecream`, etc. Try to make some requests in postman.

## Hooking up the React app!

Hooking up Express and React can be done in a couple of different ways. You can do the React stuff manually by setting up a webpack config. Or, you can use our good friend `create-react-app`. 

If we're going to be using `create-react-app`, though... it gives us a little baby server that runs the react app. Hot reloading, all that good stuff. Runs on port 3000 by default.

BUT! Our _Express_ app _also_ needs to be running on a port. So we have to figure out how to set that up... 🤔

Fortunately, this is pretty simple to do.

- From within `icecream-app`, we're going to run `create-react-app client`. (It deals with the client side, so we're naming it appropriately.)
- Then, we're going to open up the express app and change the port. Now, it'll run on port 3001.
- Finally, we need to _proxy_ the requests from the react app. Basically, we're going to trick the react app into thinking it's running on the same port as the express app. To do this, we need to add a line to the `package.json` in the _react_ app (not the express app!). After the scripts, add the line `"proxy": "http://localhost:3001"`

Then you can run both apps:
- `npm run dev` from the `icecream-app` directory
- open a new terminal tab
- `cd` into `client`
- run `npm start`

## Building out components!!!

You'll be building out a few components in prep for the afternoon. These will be as follows:

- `Header`
- `Footer`
- `IceCreamList`
- `IceCream`

App should be the only component that has state. You should make the API call to get the list of ice creams from App.

#### [Here is the HTML and CSS you'll be working from.](https://git.generalassemb.ly/gist/jlr7245/b38c22afba40a6b76fc7e14769d9e788)

Godspeed!
