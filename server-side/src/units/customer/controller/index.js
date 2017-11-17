const service = require('../../../domain').customers.services

const listAll = require('./listAll')
const get = require('./get')
const create = require('./create')
const update = require('./update')
const remove = require('./remove')

const controllers = [
  listAll,
  get,
  create,
  update,
  remove
]

const [
  listAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser
] = controllers.map(controller => controller(service))

module.exports = { listAllUsers, getUser, createUser, updateUser, removeUser }
