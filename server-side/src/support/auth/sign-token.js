const JWT = require('jsonwebtoken')

module.exports = user => {
  return JWT.sign({
    iss: 'kaya',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().getTime() / 1000 + 60 * 60
  }, process.env.JWT_SECRET_TOKEN)
}
