require('dotenv').config()
require('./infra/database/sequelize')

const app = require('./infra')

const routes = require('./interfaces/http/routes.js')

app.use(routes)

module.exports = app
