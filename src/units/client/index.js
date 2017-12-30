const { all, one, create, update, remove } = require('./middlewares')

module.exports = server => {
  server.get('/api/client/', all)
  server.get('/api/client/:id', one)
  server.post('/api/client', create)
  server.put('/api/client/:id', update)
  server.delete('/api/client/:id', remove)
}
