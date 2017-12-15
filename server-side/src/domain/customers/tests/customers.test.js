require('dotenv').config()

const test = require('ava')

const models = require('../../../infra/sequelize/models')

test.beforeEach(() => models.user.destroy({truncate: true}))
test.after.always(() => models.user.destroy({truncate: true}))

test('create user', async t => {
  const userTest = { name: 'vinitest', email: 'emailtest@gmail.com', password: '123' }
  const newUser = await models.user.build(userTest)
  const result = await newUser.save()

  t.is(result.dataValues.name, 'vinitest')
})

test('update user', async t => {
  const userTest = { name: 'vinitest', email: 'emailtest@gmail.com', password: '123' }
  const newUser = await models.user.build(userTest)
  await newUser.save()

  const userUpdated = { name: 'vinitest', email: 'emailtest@gmail.com', password: '123' }
  const updated = await models.user.update(userUpdated, { where: { name: 'vinitest' } })

  t.is(updated[0], 2)
})