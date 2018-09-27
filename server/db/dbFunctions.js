// // ---------------------- Methods for local data file
// const dataFile = require("./data")

// function getThing () {
//   return dataFile.localDataContent
// }

// module.exports = {
//   getThing
// }


// ---------------------- Methods for knex database, async

const knex = require("knex")
const config = require("../../knexfile")[process.env.NODE_ENV || 'development']
const dbConnection = knex(config)

function getThing() {
  return dbConnection("knexTable")
  .then(tableData => {
// console.log("------------ db/dbFunctions.js --------")
// console.log(tableData)


    return tableData.map(dbObject => {

// parse stringified data
      dbObject.stringifiedThing = JSON.parse(dbObject.stringifiedThing)

// change key in object:
      dbObject.parsedThing = dbObject.stringifiedThing

      return dbObject
    })
  })
}

module.exports = {
  getThing
}

