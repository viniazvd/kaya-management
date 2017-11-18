const models = require('../../../infra/database/sequelize/models')
// const sha1 = require('sha1')
const tokenGenerator = require('../../../support/auth/token-generator')
const hashing = require('../../../support/auth/hashing')
const isValidPassword = require('../../../support/auth/isValidPassword')
// const { encryptPassword } = require('../../../support/middlewares/encryption')

let services = {}

services.signup = async (name, email, password) => {
  const foundUser = await models.user.findOne({ where: { email } })
  if (foundUser) {
    return { msg: 'E-mail já existe. Tente se registrar com outro.' }
  }

  const passwordEncrypted = await hashing(password)

  // const newUser = await models.user.build({ name, email, password: sha1(password) })
  const newUser = await models.user.build({ name, email, password: passwordEncrypted })
  await newUser.save()

  const token = tokenGenerator(newUser)

  return { token: token }
}

services.signin = async (email, password) => {
  const user = await models.user.findOne({ where: { email } })
  if (!user) {
    return { msg: 'E-mail não existe.' }
  }

  const isMatch = await isValidPassword(password, user.password)

  if (!isMatch) {
    return { msg: 'Senha inválida.' }
  }

  return 'Autorizado'
}

module.exports = services
