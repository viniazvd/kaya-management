const models = require('../../../infra/sequelize/models')

module.exports = {
  async all () {
    const users = await models.Client.findAll().catch(() => {
      throw new Error(`Failed to find all users.`)
    })

    return { users }
  },

  async one (id) {
    const user = await models.Client.findById(id).catch(() => {
      throw new Error(`Failed to find user.`)
    })

    if (!user) throw new Error(`Usuário com ID: ${id} não existe.`)

    return { user }
  },

  async create (name, email, password) {
    const newUser = await models.Client.build({ name, email, password })

    await newUser.save().catch(() => {
      throw new Error(`Failed to find all users.`)
    })

    return ({ newUser })
  },

  async update (id, name, email, password) {
    const exist = await models.Client.findById(id).catch(() => {
      throw new Error(`Failed to find user.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.Client.update({ name, email, password }, { where: { id } }).catch(() => {
      throw new Error(`Failed to update user.`)
    })

    return (`Usuário alterado com sucesso.`)
  },

  async remove (id) {
    const exist = await models.Client.findById(id).catch(() => {
      throw new Error(`Failed to find user.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.Client.destroy({ where: { id } }).catch(() => {
      throw new Error(`Failed to remove user.`)
    })

    return (`Usuário ${id} removido com sucesso.`)
  }
}
