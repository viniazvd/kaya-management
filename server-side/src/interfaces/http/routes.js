const users = require('./modules/users')

const routes = (server) => {
  users(server)
}

module.exports = routes
