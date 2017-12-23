const { signup, signin, changePassword } = require('./middlewares')
// const catchErrors = require('../../support/handleError')

module.exports = server => {
  server.post('/api/auth/signup', signup)
  // server.post('/api/auth/signup', catchErrors(signup))
  server.post('/api/auth/signin', signin)
  server.post('/api/auth/change-password', changePassword)
}
