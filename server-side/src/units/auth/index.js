const { signup, signin } = require('./controller')
// const passport = require('passport')

module.exports = server => {
  server.post('/api/auth/signup', signup)
  server.post('/api/auth/signin', signin)
  // server.post('/api/auth/signin', passport.authenticate('local'), signin)
}
