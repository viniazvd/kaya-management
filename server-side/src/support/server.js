const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./middlewares/cors')

const models = require('../support/database/sequelize/models')

const routes = require('../units')

models.sequelize.sync()
  .then(() => console.log('database/sequelize: ok'))
  .catch(() => console.log('database/sequelize: erro'))

const app = express()

app.use(bodyParser.json())
app.use(cors)

routes(app)

module.exports = app
