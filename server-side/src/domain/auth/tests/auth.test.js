require('dotenv').config()

const isValid = require('../../../support/compare-passwords')
const encrypt = require('../../../support/encrypt')
const test = require('ava')
const models = require('../../../infra/sequelize/models')

test.beforeEach(t => models.Client.destroy({truncate: true}))
test.after.always(t => models.Client.destroy({truncate: true}))

test.serial('signup', async t => {
  const user = { name: 'vinitest', email: 'emailtest@gmail.com', password: '123' }
  const newUser = await models.Client.build(user)
  const result = await newUser.save()

  t.is(result.dataValues.email, 'emailtest@gmail.com')
})

test.serial('signin', async t => {
  const passwordEncrypted = await encrypt('123')
  const user = { name: 'vinitest', email: 'emailtest@gmail.com', password: passwordEncrypted }
  const newUser = await models.Client.build(user)
  const result = await newUser.save()

  const isMatch = await isValid('123', user.password)

  t.is(result.dataValues.email, 'emailtest@gmail.com')
  t.is(isMatch, true)
})
