const models = require('../../../infra/sequelize/models')
const tokenGenerator = require('../../../support/sign-token')
const encrypt = require('../../../support/encrypt')
const isValid = require('../../../support/compare-passwords')
const mailer = require('../../../infra/mailer')

module.exports = {
  async signup (name, email, password) {
    const exist = await models.Client.findOne({ where: { email } })

    if (exist) throw new Error(`${email} já existe. Tente se registrar com outro e-mail.`)

    const passwordEncrypted = await encrypt(password).catch(() => {
      throw new Error(`Failed to encrypt.`)
    })

    const newUser = await models.Client.build({ name, email, password: passwordEncrypted })
    await newUser.save().catch(() => {
      throw new Error(`Failed to register user.`)
    })

    return ({ user: newUser })
  },

  async signin (email, password) {
    const user = await models.Client.findOne({ where: { email } })

    if (!user) throw new Error(`${email} não existe. Tente logar com outro e-mail.`)

    const isMatch = await isValid(password, user.password)

    if (!isMatch) throw new Error('Senha inválida')

    const token = tokenGenerator(user)

    return { token: token }
  },

  changePassword: async (token, email, newPassword) => {
    const user = await models.Client.findOne({ where: { email } })

    if (!user) throw new Error(`${email} não existe. Tente usar outro e-mail.`)

    const isMatch = await isValid(user.dataValues.password, token)

    if (!isMatch) throw new Error('Token inválido')

    const passwordEncrypted = await encrypt(newPassword).catch(() => {
      throw new Error(`Failed to encrypt.`)
    })

    await models.Client.update({ password: passwordEncrypted }, { where: { email } }).catch(() => {
      throw new Error(`Failed to update password.`)
    })

    return { msg: 'Senha alterada com sucesso!' }
  },

  forgotPassword: async (email) => {
    const user = await models.Client.findOne({ where: { email } })

    if (!user) throw new Error(`${email} não existe. Tente usar outro e-mail.`)

    const token = await encrypt(user.password).catch(() => {
      throw new Error(`Failed to encrypt.`)
    })

    mailer.sendMail({
      to: email,
      from: 'viniazvd@gmail.com',
      template: 'forgotpassword',
      context: { token }
    }).catch(err => {
      throw new Error(`Cannot send forgot send password - ${err}`)
    })

    return { msg: 'token enviado com sucesso' }
  }
}
