const models = require('../../../infra/sequelize/models')
const tokenGenerator = require('../../../support/sign-token')
const encrypt = require('../../../support/encrypt')
const isValid = require('../../../support/compare-passwords')

module.exports = {
  async signup (name, email, password) {
    const exist = await models.user.findOne({ where: { email } })

    if (exist) throw new Error(`${email} já existe. Tente se registrar com outro e-mail.`)

    const passwordEncrypted = await encrypt(password).catch(() => {
      throw new Error(`Failed to encrypt.`)
    })

    const newUser = await models.user.build({ name, email, password: passwordEncrypted })
    await newUser.save().catch(() => {
      throw new Error(`Failed to register user.`)
    })

    return ({ user: newUser })
  },

  async signin (email, password) {
    const user = await models.user.findOne({ where: { email } })

    if (!user) throw new Error(`${email} não existe. Tente logar com outro e-mail.`)

    const isMatch = await isValid(password, user.password)

    if (!isMatch) throw new Error('Senha inválida')

    const token = tokenGenerator(user)

    return { token: token }
  },

  changePassword: async (email, password, newPassword) => {
    const user = await models.user.findOne({ where: { email } })

    if (!user) throw new Error(`${email} não existe. Tente usar outro e-mail.`)

    const isMatch = await isValid(password, user.dataValues.password)

    if (!isMatch) throw new Error('Senha inválida')

    const passwordEncrypted = await encrypt(newPassword).catch(() => {
      throw new Error(`Failed to encrypt.`)
    })

    await models.user.update({ password: passwordEncrypted }, { where: { email } }).catch(() => {
      throw new Error(`Failed to update password.`)
    })

    return { msg: 'Senha alterada com sucesso!' }
  }
}
