module.exports = service => (req, res) => {
  const id = req.params.id

  service.get(id)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}
