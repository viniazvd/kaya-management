const users = require('./customer')

const routes = (server) => {
  users(server)
}

module.exports = routes
