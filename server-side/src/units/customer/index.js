const service = require('../../domain/customers/services')
const { listAll, get, create, update, remove } = require('./controller')

module.exports = server => {
  server.get('/api/user/', listAll(service))
  server.get('/api/user/:id', get(service))
  server.post('/api/user', create(service))
  server.put('/api/user/:id', update(service))
  server.delete('/api/user/:id', remove(service))
}
