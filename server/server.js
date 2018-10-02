const express = require("express")
const path = require("path")
const server = express()

//Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, "..", "public"))) 

module.exports = server