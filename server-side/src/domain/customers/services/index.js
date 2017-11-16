const models = require('../../../support/database/sequelize/models')

let services = {}

services.listAllCustomers = async () => {
  const users = await models.user.findAll()
  return users
}

services.getCustomer = async (id) => {
  const user = models.user.findById(id)
  return user
}

services.newCustomer = async (name, email, password) => {
  const newUser = models.user.build({ name, email, password })

  const user = newUser.save()
  return user
}

services.updateCustomer = async (id, name, email, password) => {
  const updateUser = models.user.update({ name, email, password }, { where: { id } })
  return updateUser
}

services.removeCustomer = async (id) => {
  const deleteUser = models.user.destroy({ where: { id } })
  return deleteUser
}

module.exports = services
