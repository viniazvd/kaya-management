require('dotenv').config()

const app = require('./interfaces/http/server')

// const Application = require('../app/Application')
// const { post, get, put, remove } = require('../app/user')
// app.use(Application)

module.exports = app
