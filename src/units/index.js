const client = require('./client')
const auth = require('./auth')
const activity = require('./activity')
const task = require('./task')

const routes = (server) => {
  client(server)
  auth(server)
  activity(server)
  task(server)
}

module.exports = routes
