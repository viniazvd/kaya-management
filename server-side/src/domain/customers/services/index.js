const models = require('../../../infra/database/sequelize/models')

let services = {}

services.all = async () => {
  return models.user.findAll()
}

services.one = async (id) => {
  return models.user.findById(id)
}

services.create = async (name, email, password) => {
  const newUser = await models.user.build({ name, email, password })

  return newUser.save()
}

services.update = async (id, name, email, password) => {
  return models.user.update({ name, email, password }, { where: { id } })
}

services.remove = async (id) => {
  return models.user.destroy({ where: { id } })
}

module.exports = services
