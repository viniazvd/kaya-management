const controller = require('./controller')

module.exports = server => {
  server.get('/api/user/', controller.listAll)
  server.get('/api/user/:id', controller.get)
  server.post('/api/user', controller.new)
  server.put('/api/user/:id', controller.update)
  server.delete('/api/user/:id', controller.remove)
}
