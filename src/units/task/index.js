const { all, one, create, update, remove } = require('./middlewares')

module.exports = server => {
  server.get('/api/task/', all)
  server.get('/api/task/:id', one)
  server.post('/api/task', create)
  server.put('/api/task/:id', update)
  server.delete('/api/task/:id', remove)
}
