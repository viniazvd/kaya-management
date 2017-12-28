const { all, one, create, update, remove } = require('./middlewares')

module.exports = server => {
  server.get('/api/activity/', all)
  server.get('/api/activity/:id', one)
  server.post('/api/activity', create)
  server.put('/api/activity/:id', update)
  server.delete('/api/activity/:id', remove)
}
