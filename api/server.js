const express = require("express")
const carsRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())
server.use('/cars', carsRouter)

server.get('/welcome', (req, res) => {
  res.send('welcome to cars api')
})

module.exports = server
