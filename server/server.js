const path = require('path')
const express = require('express')
const request = require('superagent')
const server = express()

const apiURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/swanson', (req, res) => {
  request.get(apiURL)
    .then(ret => {
      const quote = ret.body
      res.json(quote)
    })
})


module.exports = server
