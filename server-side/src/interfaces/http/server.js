const express = require('express')
const bodyParser = require('body-parser')
const cors = require('../../infra/cors')

const models = require('../../infra/database/sequelize/models')

const routes = require('./routes')

models.sequelize.sync()
  .then(() => console.log('database/sequelize: ok'))
  .catch(() => console.log('database/sequelize: erro'))

const app = express()

app.use(bodyParser.json())
app.use(cors)

routes(app)

module.exports = app
