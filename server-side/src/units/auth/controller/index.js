const { services } = require('../../../domain').auth

const [signup, signin, changePassword] = ['signup', 'signin', 'changePassword']
  .map(controller => require(`./${controller}`))
  .map(inject => inject(services))

module.exports = { signup, signin, changePassword }
