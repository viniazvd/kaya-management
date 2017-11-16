const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./middlewares/cors')

const models = require('../support/database/sequelize/models')
models.sequelize.sync()
  .then(() => console.log('database/sequelize: ok'))
  .catch(() => console.log('database/sequelize: erro'))

const app = express()
app.use(bodyParser.json())
app.use(cors)

const routes = require('../units')
routes(app)

module.exports = app
