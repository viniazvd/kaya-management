require('dotenv').config()

const test = require('ava')

const models = require('../../../infra/sequelize/models')

test.beforeEach(t => models.Activity.destroy({truncate: true}))
test.after.always(t => models.Activity.destroy({truncate: true}))

test.serial('list activity', async t => {
  const activityTest = { name: 'nameX' }
  const newActivity = await models.Activity.build(activityTest)
  await newActivity.save()

  const list = await models.Activity.findAndCountAll()
  t.is(list.count, 1)
})

test.serial('create activity', async t => {
  const activityTest = { name: 'nameX' }
  const newActivity = await models.Activity.build(activityTest)
  const result = await newActivity.save()

  t.is(result.dataValues.name, 'nameX')
})

test.serial('remove activity', async t => {
  const activityTest = { name: 'nameX' }
  const newActivity = await models.Activity.build(activityTest)
  await newActivity.save()

  const removed = await models.Activity.destroy({ where: { name: 'nameX' } })

  t.is(removed, 1)
})

test.serial('update activity', async t => {
  const activityTest = { name: 'nameX' }
  const newActivity = await models.Activity.build(activityTest)
  await newActivity.save()

  const activityUpdated = { name: 'nameX' }
  const updated = await models.Activity.update(activityUpdated, { where: { name: 'nameX' } })

  t.is(updated[0], 1)
})
