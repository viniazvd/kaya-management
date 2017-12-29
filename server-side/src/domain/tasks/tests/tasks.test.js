require('dotenv').config()

const test = require('ava')

const models = require('../../../infra/sequelize/models')

test.beforeEach(t => models.Task.destroy({truncate: true}))
test.after.always(t => models.Task.destroy({truncate: true}))

test.serial('list task', async t => {
  const taskTest = { name: 'nameX' }
  const newTask = await models.Task.build(taskTest)
  await newTask.save()

  const list = await models.Task.findAndCountAll()
  t.is(list.count, 1)
})

test.serial('create task', async t => {
  const taskTest = { name: 'nameX' }
  const newTask = await models.Task.build(taskTest)
  const result = await newTask.save()

  t.is(result.dataValues.name, 'nameX')
})

test.serial('remove task', async t => {
  const taskTest = { name: 'nameX' }
  const newTask = await models.Task.build(taskTest)
  await newTask.save()

  const removed = await models.Task.destroy({ where: { name: 'nameX' } })

  t.is(removed, 1)
})

test.serial('update task', async t => {
  const taskTest = { name: 'nameX' }
  const newTask = await models.Task.build(taskTest)
  await newTask.save()

  const taskUpdated = { name: 'nameX' }
  const updated = await models.Task.update(taskUpdated, { where: { name: 'nameX' } })

  t.is(updated[0], 1)
})