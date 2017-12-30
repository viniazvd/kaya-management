const models = require('../../../infra/sequelize/models')

module.exports = {
  async all () {
    const activities = await models.Activity.findAll().catch(() => {
      throw new Error(`Failed to find all activities.`)
    })

    return { activities }
  },

  async one (id) {
    const activity = await models.Activity.findById(id).catch(() => {
      throw new Error(`Failed to find activity.`)
    })

    if (!activity) throw new Error(`Usuário com ID: ${id} não existe.`)

    return { activity }
  },

  async create (name) {
    const newActivity = await models.Activity.build({ name })

    await newActivity.save().catch(() => {
      throw new Error(`Failed to create activity.`)
    })

    return ({ newActivity })
  },

  async update (id, name) {
    const exist = await models.Activity.findById(id).catch(() => {
      throw new Error(`Failed to find activity.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.Activity.update({ name }, { where: { id } }).catch(() => {
      throw new Error(`Failed to update activity.`)
    })

    return (`Usuário alterado com sucesso.`)
  },

  async remove (id) {
    const exist = await models.Activity.findById(id).catch(() => {
      throw new Error(`Failed to find activity.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.Activity.destroy({ where: { id } }).catch(() => {
      throw new Error(`Failed to remove activity.`)
    })

    return (`Usuário ${id} removido com sucesso.`)
  }
}
