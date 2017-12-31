require('dotenv').config()

const test = require('ava')

const models = require('../../../infra/sequelize/models')

test.beforeEach(t => models.User.destroy({ truncate: true, cascade: true }))
test.after.always(t => models.User.destroy({ truncate: true, cascade: true }))

test.serial('list user', async t => {
  const userTest = { name: 'vinitest1', email: 'emailtest1@gmail.com', password: '123', role: 'ADMIN' }
  const newUser = await models.User.build(userTest)
  await newUser.save()

  const list = await models.User.findAndCountAll()
  t.is(list.count, 1)
})

test.serial('create user', async t => {
  const userTest = { name: 'vinitest', email: 'emailtest@gmail.com', password: '123', role: 'ADMIN' }
  const newUser = await models.User.build(userTest)
  const result = await newUser.save()

  t.is(result.dataValues.email, 'emailtest@gmail.com')
})

test.serial('remove user', async t => {
  const userTest = { email: 'remover@gmail.com', password: '123', role: 'ADMIN' }
  const newUser = await models.User.build(userTest)
  await newUser.save()

  const removed = await models.User.destroy({ where: { email: 'remover@gmail.com' } })

  t.is(removed, 1)
})

test.serial('update user', async t => {
  const userTest = { name: 'vinitest', email: 'emailtest@gmail.com', password: '123', role: 'ADMIN' }
  const newUser = await models.User.build(userTest)
  await newUser.save()

  const userUpdated = { email: 'emailtest2@gmail.com' }
  const updated = await models.User.update(userUpdated, { where: { email: 'emailtest@gmail.com' } })

  t.is(updated[0], 1)
})
