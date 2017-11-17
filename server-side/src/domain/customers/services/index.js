const models = require('../../../infra/database/sequelize/models')

let services = {}

services.all = async () => {
  const users = await models.user.findAll()
  return users
}

services.one = async (id) => {
  const user = models.user.findById(id)
  return user
}

services.create = async (name, email, password) => {
  const newUser = models.user.build({ name, email, password })

  const user = newUser.save()
  return user
}

services.update = async (id, name, email, password) => {
  const updateUser = models.user.update({ name, email, password }, { where: { id } })
  return updateUser
}

services.remove = async (id) => {
  const deleteUser = models.user.destroy({ where: { id } })
  return deleteUser
}

module.exports = services
