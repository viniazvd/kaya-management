module.exports = service => (req, res) => {
  const { name } = req.body

  service.create(name)
    .then(results => res.status(200).send({ results }))
    .catch(error => res.status(422).send({ error: error.message }))
}
