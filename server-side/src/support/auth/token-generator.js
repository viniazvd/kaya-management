const jwt = require('jsonwebtoken')

module.exports = user => {
  return jwt.sign({
    iss: 'kaya',
    sub: user.password,
    iat: new Date().getTime(),
    exp: new Date().getTime() / 1000 + 60 * 60
  }, process.env.JWT_SECRET_TOKEN)
}
