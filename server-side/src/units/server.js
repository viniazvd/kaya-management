const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('../support/middlewares/cors')
const exclusions = require('../support/middlewares/jwt/exclusions')
const jwt = require('../support/middlewares/jwt')

const models = require('../infra/sequelize/models')
models.sequelize.sync()
  .then(() => console.log('database/sequelize: ok'))
  .catch(() => console.log('database/sequelize: erro'))

const app = express()

app.use(bodyParser.json())
app.use(cors)
app.use(helmet())
app.use(jwt({ exclusions }))

// rotas
require('../units')(app)

module.exports = app
