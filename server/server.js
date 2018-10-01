const express = require("express")
const path = require("path")
const server = express()

//Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, "..", "public"))) 



// const exampleRoutes = require("./routes/routeName");
// server.use("/api/v1/route", exampleRoutes)


module.exports = server