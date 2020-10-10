require('dotenv').config();

const bodyParser = require('body-parser')
const express = require('express')

const port = process.env.PORT
const server = express()

// Vamos precisar do body parser para a conexão com o BD
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () => { console.log(`BACKEND is running on port ${port}.` )})

require('./routes')(server)