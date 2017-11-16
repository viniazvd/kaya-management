const customer = require('./customer')

const routes = (server) => {
  customer(server)
}

module.exports = routes
