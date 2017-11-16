const service = require('../../../domain/customers/services')

let controller = {}

controller.listAllCustomers = async (req, res) => {
  service.listAllCustomers()
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

controller.getCustomer = async (req, res) => {
  const id = req.params.id

  service.getCustomer(id)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

controller.newCustomer = async (req, res) => {
  const { name, email, password } = req.body

  service.newCustomer(name, email, password)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

controller.updateCustomer = async (req, res) => {
  const id = req.params.id
  const { name, email, password } = req.body

  service.updateCustomer(id, name, email, password)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

controller.removeCustomer = async (req, res) => {
  const id = req.params.id

  service.removeCustomer(id)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

module.exports = controller
