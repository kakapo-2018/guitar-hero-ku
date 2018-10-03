const express = require("express")
const path = require("path")
const server = express()

//Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, "..", "public"))) 

const endpoint = "https://api.uberchord.com/v1/chords/"
const request = require('superagent')


server.get('/api/v1/chords/:chord', (req, res) => {
  request
    .get(`${endpoint}/${req.params.chord}`)
    .then(response => {
      res.json(response.body)
    })
    .catch(err => {
      console.log({err})
    })
})


module.exports = server