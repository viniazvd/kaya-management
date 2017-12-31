const client = require('./client')
const user = require('./user')
const auth = require('./auth')
const activity = require('./activity')
const task = require('./task')

const routes = (server) => {
  user(server)
  client(server)
  auth(server)
  activity(server)
  task(server)
}

module.exports = routes
