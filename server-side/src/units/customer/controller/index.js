const service = require('../../../domain/customers/services')

let controller = {}

controller.listAll = (req, res) => {
  service.listAll()
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

controller.get = (req, res) => {
  const id = req.params.id

  service.get(id)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

controller.new = (req, res) => {
  const { name, email, password } = req.body

  service.new(name, email, password)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

controller.update = (req, res) => {
  const id = req.params.id
  const { name, email, password } = req.body

  service.update(id, name, email, password)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

controller.remove = (req, res) => {
  const id = req.params.id

  service.remove(id)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

module.exports = controller
