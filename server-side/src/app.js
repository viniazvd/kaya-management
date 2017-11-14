require('dotenv').config()

const app = require('./infra')

// app.get('/', function(req, res, next) {
//   res.send('opaaaaaaaa')
// })

const routes = require('./interfaces/http/routes.js')

app.use(routes)

module.exports = app
