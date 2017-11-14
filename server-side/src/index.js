require('dotenv').config()
require('./infra/database')

// const routes = require('../src/interfaces/http/router.js')
const app = require('./infra')

// app.use(routes)

module.exports = app
