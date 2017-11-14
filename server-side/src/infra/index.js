const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./cors')

const models = require('../infra/database/sequelize/models')

models.sequelize.sync()
  .then(() => {
    console.log('database/sequelize: ok')
  })
  .catch(() => {
    console.log('database/sequelize: erro')
  })

const app = express()

app.use(bodyParser.json())
app.use(cors)

// app.use('/api', require('../../modules/login/routes/users'))

module.exports = app
