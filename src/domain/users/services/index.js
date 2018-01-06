const encrypt = require('../../../support/encrypt')
const models = require('../../../infra/sequelize/models')

module.exports = {
  async all () {
    const users = await models.User.findAll().catch(() => {
      throw new Error(`Failed to find all users.`)
    })

    return { users }
  },

  async one (id) {
    const user = await models.User.findById(id).catch(() => {
      throw new Error(`Failed to find user.`)
    })

    if (!user) throw new Error(`Usuário com ID: ${id} não existe.`)

    return { user }
  },

  async create (name, email, password, role) {
    const exist = await models.User.findOne({ where: { email } })

    if (exist) throw new Error(`${email} já existe. Tente se registrar com outro e-mail.`)

    const passwordEncrypted = await encrypt(password).catch(() => {
      throw new Error(`Failed to encrypt.`)
    })

    const newUser = await models.User.build({ name, email, password: passwordEncrypted })
    await newUser.save().catch(() => {
      throw new Error(`Failed to register user.`)
    })

    return ({ user: newUser })
  },

  async update (id, name, email, password, role) {
    const exist = await models.User.findById(id).catch(() => {
      throw new Error(`Failed to find user.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.User.update({ name, email, password, role }, { where: { id } }).catch(() => {
      throw new Error(`Failed to update user.`)
    })

    return (`Usuário alterado com sucesso.`)
  },

  async remove (id) {
    const exist = await models.User.findById(id).catch(() => {
      throw new Error(`Failed to find user.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.User.destroy({ where: { id } }).catch(() => {
      throw new Error(`Failed to remove user.`)
    })

    return (`Usuário ${id} removido com sucesso.`)
  }
}
