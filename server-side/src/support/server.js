const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./middlewares/cors')
const helmet = require('helmet')
const exclusions = require('./middlewares/jwt/exclusions')
const jwt = require('./middlewares/jwt')

const models = require('../infra/database/sequelize/models')
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
