const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./cors')

const app = express()

app.use(bodyParser.json())
app.use(cors)

// app.use('/api', require('../../modules/login/routes/users'))

module.exports = app
