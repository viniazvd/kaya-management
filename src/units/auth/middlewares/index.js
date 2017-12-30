const { services } = require('../../../domain').auth

const [signup, signin, changePassword, forgotPassword] = ['signup', 'signin', 'changePassword', 'forgotPassword']
  .map(middlewares => require(`./${middlewares}`))
  .map(inject => inject(services))

module.exports = { signup, signin, changePassword, forgotPassword }
