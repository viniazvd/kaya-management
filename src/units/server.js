const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('../support/middlewares/cors')
const exclusions = require('../support/middlewares/jwt/exclusions')
const jwt = require('../support/middlewares/jwt')
const { logErrors } = require('../support/middlewares/errors')
// const register = require('../support/middlewares/register')

const app = express()

app.use(helmet())
app.use(cors)
app.use(bodyParser.json())
app.use(jwt({ exclusions }))

app.use(logErrors)

// register(app)(helmet(), cors, bodyParser.json(), jwt({ exclusions }), logErrors)

// rotas
require('../units')(app)

module.exports = app
