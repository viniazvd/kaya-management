const { all, one, create, update, remove } = require('./controller')

module.exports = server => {
  server.get('/api/user/', all)
  server.get('/api/user/:id', one)
  server.post('/api/user', create)
  server.put('/api/user/:id', update)
  server.delete('/api/user/:id', remove)
}
