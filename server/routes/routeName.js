const express = require("express")
const router = express.Router()

const dbFunctions = require("../db/dbFunctions")

router.get("/", (req,res) => {

// // ---------------------- For local data file
//   res.json(db.getThing())

// ---------------------- For knex database
  dbFunctions.getThing()
  .then(dataFromDBFunction => {
// console.log("------------ routes/routeName.js --------")
// console.log(dataFromDBFunction)
    res.json(dataFromDBFunction)
  })

})

module.exports = router