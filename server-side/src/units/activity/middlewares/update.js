module.exports = service => (req, res) => {
  const id = req.params.id
  const { name } = req.body

  service.update(id, name)
    .then(results => res.status(200).send({ results }))
    .catch(error => res.status(422).send({ error: error.message }))
}
