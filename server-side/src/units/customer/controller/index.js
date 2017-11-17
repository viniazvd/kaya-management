const { services } = require('../../../domain').customers

const [all, one, create, update, remove] = ['all', 'one', 'create', 'update', 'remove']
  .map(actionName => require(`./${actionName}`))
  .map(action => action(services))

module.exports = { all, one, create, update, remove }
