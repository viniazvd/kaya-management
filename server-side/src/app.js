require('dotenv').config()

const app = require('./interfaces/http/server')

// app.use('/api', require('./interfaces/http/routes')(app))

module.exports = app
