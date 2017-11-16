// const service = require('../../domain/customers/services')
const controller = require('./controller')

module.exports = server => {
  server.get('/api/user/', controller[0])
  server.get('/api/user/:id', controller[1])
  server.post('/api/user', controller[2])
  server.put('/api/user/:id', controller[3])
  server.delete('/api/user/:id', controller[4])
}

// const { listAll, get, create, update, remove } = require('./controller')

// module.exports = server => {
//   server.get('/api/user/', listAll)
//   server.get('/api/user/:id', get)
//   server.post('/api/user', create)
//   server.put('/api/user/:id', update)
//   server.delete('/api/user/:id', remove)
// }
