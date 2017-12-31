module.exports = service => (req, res) => {
  const { name, email, password, role } = req.body

  service.create(name, email, password, role)
    .then(results => res.status(200).send({ results }))
    .catch(error => res.status(422).send({ error: error.message }))
}
