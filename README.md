# A full stack boilerplate with descriptive names.

## Setup
* $ git init
* Go to GitHub and make repo
* $ git remote add origin git@github.com:username/new_repo
* $ git push -u origin master
* $ yarn

### adjust database
* $ yarn knex init
* $ yarn knex migrate:rollback
* $ yarn knex migrate:latest
* $ yarn knex seed:run


## Data Flow

### Server side
------------ db/dbFunctions.js --------

Takes seed data as an array of objects and modifies it as needed via map.


------------ routes/routeName.js --------

Runs db function and res.jsons the array so it's available at that route



### Client side

------------ App state --------

State is initially empty, therefore anything that needs state data is initially not rendered


------------ App ComponentDidMount --------

dispatches fetchThing() from this.props, which is the only way to trigger the data retrieval

this.props initially looks like: {reducerName: Array(0), dispatch: ƒ} as the reducer comes from inital state, which is an empty array


------------ actions/index.js fetchThing() --------

fetchThing() is called from app, gets array of objects from routeName (via res.body, visible in Postman)

res.body data is then dispatched to recieveThing in the same file



------------ actions/index.js recieveThing() --------

receiveThing() returns the action object containing the data in its parameter. This then goes to the relevanr reducer



------------ reducers/reducerName.js switch RECIEVE_THING --------

the RECEIVE_THING case in switch returns actions.actionObjectData, which is still the same array of objects, and pushes it into state



------------ App state --------

App state now has that array available

{reducerName: Array(3)}
