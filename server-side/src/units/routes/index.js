const users = require('./user')

const routes = (server) => {
  users(server)
}

module.exports = routes
