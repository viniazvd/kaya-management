// const service = require('../../../domain/customers/services')

const listAll = require('./listAll')
const get = require('./get')
const create = require('./create')
const update = require('./update')
const remove = require('./remove')

// let controller = {}

// controller.listAll = listAll(service)
// controller.get = get(service)
// controller.create = create(service)
// controller.update = update(service)
// controller.remove = remove(service)

// module.exports = controller

module.exports = {
  listAll,
  get,
  create,
  update,
  remove
}
