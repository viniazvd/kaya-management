const models = require('../../../infra/database/sequelize/models')
const tokenGenerator = require('../../../support/auth/token-generator')
const hashing = require('../../../support/auth/hashing')
const isValid = require('../../../support/auth/isValid')

let services = {}

services.signup = async (name, email, password) => {
  const foundUser = await models.user.findOne({ where: { email } })
  if (foundUser) {
    return { msg: 'E-mail já existe. Tente se registrar com outro.' }
  }

  const passwordEncrypted = await hashing(password)

  const newUser = await models.user.build({ name, email, password: passwordEncrypted })
  await newUser.save()

  return { user: newUser }
}

services.signin = async (email, password) => {
  const user = await models.user.findOne({ where: { email } })
  if (!user) {
    return { msg: 'E-mail não existe.' }
  }

  const isMatch = await isValid(password, user.password)

  if (!isMatch) {
    return { msg: 'Senha inválida.' }
  }

  const token = tokenGenerator(user)

  return { token: token }
}

module.exports = services
