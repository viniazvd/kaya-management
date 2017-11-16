const { listAllUsers, getUser, createUser, updateUser, removeUser } = require('./controller')

module.exports = server => {
  server.get('/api/user/', listAllUsers)
  server.get('/api/user/:id', getUser)
  server.post('/api/user', createUser)
  server.put('/api/user/:id', updateUser)
  server.delete('/api/user/:id', removeUser)
}
