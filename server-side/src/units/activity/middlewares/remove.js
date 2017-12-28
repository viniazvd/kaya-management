module.exports = service => (req, res) => {
  const id = req.params.id

  service.remove(id)
    .then(results => res.status(200).send({ results }))
    .catch(error => res.status(422).send({ error: error.message }))
}
