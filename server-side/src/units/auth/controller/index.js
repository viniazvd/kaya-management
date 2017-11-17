const service = require('../../../domain').auth.services

const signup = require('./signup')

const controllers = [
  signup
]

const [
  signupUser
] = controllers.map(controller => controller(service))

module.exports = { signupUser }
