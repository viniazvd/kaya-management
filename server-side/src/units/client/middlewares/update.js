module.exports = service => (req, res) => {
  const id = req.params.id
  const { name, email, password } = req.body

  service.update(id, name, email, password)
    .then(results => res.status(200).send({ results }))
    .catch(error => res.status(422).send({ error: error.message }))
}
