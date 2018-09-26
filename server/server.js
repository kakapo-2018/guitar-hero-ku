const express = require("express")
const path = require("path")
const server = express()

//Middleware
server.use(express.static(path.join(__dirname, "..", "public"))) 
  //shell Windows vs Linux can have file system issues unless join is used
server.use(express.json()) // for APIs


const exampleRoutes = require("./routes/routeName");
server.use("/api/v1/route", exampleRoutes)


module.exports = server