const customer = require('./customer')
const auth = require('./auth')

const routes = (server) => {
  customer(server)
  auth(server)
}

module.exports = routes
