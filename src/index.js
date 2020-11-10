if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 3003
const server = express()

// Vamos precisar do body-parser para fazer o parsing do body das requisições da API
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use(cors())

server.listen(port, () => { console.log(`BACKEND is running on port ${port}.` )})

require('./config/mongodb')
require('./config/routes')(server)

