const controller = require('./controller')

module.exports = server => {
  server.get('/api/user/', controller.listAllCustomers)
  server.get('/api/user/:id', controller.getCustomer)
  server.post('/api/user', controller.newCustomer)
  server.put('/api/user/:id', controller.updateCustomer)
  server.delete('/api/user/:id', controller.removeCustomer)
}
