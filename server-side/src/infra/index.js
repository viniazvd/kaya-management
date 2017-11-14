const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./cors')

const middlewares = express()

middlewares.use(bodyParser.json())
middlewares.use(cors)

// middlewares.use('/api-mongodb', require('../../modules/login/routes/users'))

module.exports = middlewares
