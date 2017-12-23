const { signup, signin, changePassword } = require('./middlewares')

module.exports = server => {
  server.post('/api/auth/signup', signup)
  server.post('/api/auth/signin', signin)
  server.post('/api/auth/change-password', changePassword)
}
