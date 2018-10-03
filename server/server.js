const express = require("express")
const path = require("path")
const server = express()
const api = require('./api')

//Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, "..", "public"))) 

const endpoint = "https://api.uberchord.com/v1/chords/"
const request = require('superagent')


server.get('/v1/chords/:chord', (req, res) => {
    api.getChord(req.params.chord)

    // request
    //   .get(`${endpoint}/${req.params.chord}`)
    // .then(response => {
    //   res.json(response.body)
    // })
    // .catch(err => {
    //   console.log({err})
    // })
})


module.exports = server