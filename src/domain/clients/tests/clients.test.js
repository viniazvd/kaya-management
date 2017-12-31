require('dotenv').config()

const test = require('ava')

const models = require('../../../infra/sequelize/models')

test.beforeEach(t => models.Client.destroy({ truncate: true, cascade: true }))
test.after.always(t => models.Client.destroy({ truncate: true, cascade: true }))

test.serial('list client', async t => {
  const clientTest = { name: 'vini', lastName: 'azvd', email: 'emailtest1@gmail.com', description: 'problema de junta' }
  const newClient = await models.Client.build(clientTest)
  await newClient.save()

  const list = await models.Client.findAndCountAll()
  t.is(list.count, 1)
})

test.serial('create client', async t => {
  const clientTest = { name: 'vini', lastName: 'azvd', email: 'emailtest1@gmail.com', description: 'problema de junta' }
  const newClient = await models.Client.build(clientTest)
  const result = await newClient.save()

  t.is(result.dataValues.email, 'emailtest1@gmail.com')
})

test.serial('remove client', async t => {
  const clientTest = { name: 'vini', lastName: 'azvd', email: 'remover@gmail.com', description: 'problema de junta' }
  const newClient = await models.Client.build(clientTest)
  await newClient.save()

  const removed = await models.Client.destroy({ where: { email: 'remover@gmail.com' } })

  t.is(removed, 1)
})

test.serial('update client', async t => {
  const clientTest = { name: 'vini', lastName: 'azvd', email: 'emailtest1@gmail.com', description: 'problema de junta' }
  const newClient = await models.Client.build(clientTest)
  await newClient.save()

  const clientUpdated = { email: 'emailtest2@gmail.com' }
  const updated = await models.Client.update(clientUpdated, { where: { email: 'emailtest1@gmail.com' } })

  t.is(updated[0], 1)
})
