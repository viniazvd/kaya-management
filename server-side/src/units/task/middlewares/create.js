module.exports = service => (req, res) => {
  const { name, date, hour, price, description, id_client, id_activity } = req.body

  service.create(name, date, hour, price, description, id_client, id_activity)
    .then(results => res.status(200).send({ results }))
    .catch(error => res.status(422).send({ error: error.message }))
}
