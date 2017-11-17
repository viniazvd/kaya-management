const { services } = require('../../../domain').customers

const [all, one, create, update, remove] = ['all', 'one', 'create', 'update', 'remove']
  .map(controller => require(`./${controller}`))
  .map(inject => inject(services))

module.exports = { all, one, create, update, remove }
