const { services } = require('../../../domain').auth

const [signup, signin] = ['signup', 'signin']
  .map(controller => require(`./${controller}`))
  .map(inject => inject(services))

module.exports = { signup, signin }
