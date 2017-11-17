const models = require('../../../infra/database/sequelize/models')
const signToken = require('../../../support/auth/sign-token')

let services = {}

services.signup = async (name, email, password) => {
  const foundUser = await models.user.findOne({ where: { email } })
  if (foundUser) {
    return { msg: 'E-mail já existe. Tente se registrar com outro.' }
  }

  const newUser = models.user.build({ name, email, password })
  const user = newUser.save()
  const token = signToken(user)

  return { token: token }
}

module.exports = services
