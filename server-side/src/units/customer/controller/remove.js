module.exports = service => (req, res) => {
  const id = req.params.id

  service.remove(id)
    .then(results => res.sendStatus(200))
    .catch(error => res.status(404).send(error))
}
