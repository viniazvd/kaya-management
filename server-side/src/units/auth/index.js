const { signup, signin, changePassword } = require('./controller')

module.exports = server => {
  server.post('/api/auth/signup', signup)
  server.post('/api/auth/signin', signin)
  server.post('/api/auth/change-password', changePassword)
}
