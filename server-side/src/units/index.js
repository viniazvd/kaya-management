const client = require('./client')
const auth = require('./auth')
const activity = require('./activity')

const routes = (server) => {
  client(server)
  auth(server)
  activity(server)
}

module.exports = routes
