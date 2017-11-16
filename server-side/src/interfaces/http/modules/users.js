const models = require('../../../infra/database/sequelize/models')

module.exports = function users (server) {
  server.get('/api/user/', async (req, res, next) => {
    try {
      const users = models.user.findAll()
      res.status(200).send(await users)
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.get('/api/user/:id', async (req, res, next) => {
    const id = req.params.id

    try {
      const user = models.user.findById(id)
      res.status(200).send(await user)
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.post('/api/user', async (req, res, next) => {
    const { name, email, password } = req.body
    const newUser = models.user.build({ name, email, password })

    try {
      const user = newUser.save()
      res.status(200).send(await user)
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.put('/api/user/:id', async (req, res, next) => {
    const id = req.params.id
    const { name, email, password } = req.body

    try {
      const updateUser = models.user.update({ name, email, password }, { where: { id } })
      res.status(200).send(await updateUser)
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.delete('/api/user/:id', async (req, res, next) => {
    const id = req.params.id

    try {
      const deleteUser = models.user.destroy({ where: { id } })
      res.status(200).send(await deleteUser)
    } catch (error) {
      res.send(422, error)
    }
    next()
  })
}
