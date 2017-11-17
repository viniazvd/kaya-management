const { signupUser } = require('./controller')

module.exports = server => {
  server.post('/api/auth/signup', signupUser)
}
