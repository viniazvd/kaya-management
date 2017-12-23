const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('../support/middlewares/cors')
const exclusions = require('../support/middlewares/jwt/exclusions')
const jwt = require('../support/middlewares/jwt')
const { logErrors, errorHandler } = require('../support/middlewares/errors')

const models = require('../infra/sequelize/models')
models.sequelize.sync()
  .then(() => console.log('database/sequelize: ok'))
  .catch(() => console.log('database/sequelize: erro'))

const app = express()

app.use(helmet())
app.use(cors)
app.use(bodyParser.json())
app.use(jwt({ exclusions }))

// app.use(clientErrorHandler)
app.use(logErrors)
app.use(errorHandler)

// rotas
require('../units')(app)

module.exports = app
