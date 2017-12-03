const { services } = require('../../../domain').auth

const [signup, signin, changePassword] = ['signup', 'signin', 'changePassword']
  .map(middlewares => require(`./${middlewares}`))
  .map(inject => inject(services))

module.exports = { signup, signin, changePassword }
