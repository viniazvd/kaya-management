const models = require('../../../infra/sequelize/models')

module.exports = {
  async all () {
    const clients = await models.Client.findAll().catch(() => {
      throw new Error(`Failed to find all clients.`)
    })

    return { clients }
  },

  async one (id) {
    const client = await models.Client.findById(id).catch(() => {
      throw new Error(`Failed to find client.`)
    })

    if (!client) throw new Error(`Usuário com ID: ${id} não existe.`)

    return { client }
  },

  async create (name, email, password) {
    const newClient = await models.Client.build({ name, email, password })

    await newClient.save().catch(() => {
      throw new Error(`Failed to create client.`)
    })

    return ({ newClient })
  },

  async update (id, name, email, password) {
    const exist = await models.Client.findById(id).catch(() => {
      throw new Error(`Failed to find client.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.Client.update({ name, email, password }, { where: { id } }).catch(() => {
      throw new Error(`Failed to update client.`)
    })

    return (`Usuário alterado com sucesso.`)
  },

  async remove (id) {
    const exist = await models.Client.findById(id).catch(() => {
      throw new Error(`Failed to find client.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.Client.destroy({ where: { id } }).catch(() => {
      throw new Error(`Failed to remove client.`)
    })

    return (`Usuário ${id} removido com sucesso.`)
  }
}
