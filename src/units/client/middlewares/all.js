module.exports = service => (req, res) => {
  service.all()
    .then(results => res.status(200).send({ results }))
    .catch(error => res.status(422).send({ error: error.message }))
}
