const client = require('./client')
const auth = require('./auth')

const routes = (server) => {
  client(server)
  auth(server)
}

module.exports = routes
