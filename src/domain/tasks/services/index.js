const models = require('../../../infra/sequelize/models')

module.exports = {
  async all () {
    const tasks = await models.Task.findAll().catch(() => {
      throw new Error(`Failed to find all tasks.`)
    })

    return { tasks }
  },

  async one (id) {
    const task = await models.Task.findById(id).catch(() => {
      throw new Error(`Failed to find task.`)
    })

    if (!task) throw new Error(`Usuário com ID: ${id} não existe.`)

    return { task }
  },

  async create (name, date, hour, price, description, id_client, id_activity) {
    const newTask = await models.Task.build({ name, date, hour, price, description, id_client, id_activity })

    await newTask.save().catch(() => {
      throw new Error(`Failed to create task.`)
    })

    return ({ newTask })
  },

  async update (id, name) {
    const exist = await models.Task.findById(id).catch(() => {
      throw new Error(`Failed to find task.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.Task.update({ name }, { where: { id } }).catch(() => {
      throw new Error(`Failed to update task.`)
    })

    return (`Usuário alterado com sucesso.`)
  },

  async remove (id) {
    const exist = await models.Task.findById(id).catch(() => {
      throw new Error(`Failed to find task.`)
    })

    if (!exist) throw new Error(`Usuário com ID: ${id} não existe.`)

    await models.Task.destroy({ where: { id } }).catch(() => {
      throw new Error(`Failed to remove task.`)
    })

    return (`Usuário ${id} removido com sucesso.`)
  }
}
