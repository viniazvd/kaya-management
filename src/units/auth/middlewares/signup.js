module.exports = service => (req, res) => {
  const { name, email, password, role } = req.body

  service.signup(name, email, password, role)
    .then(result => res.status(200).send({ result }))
    .catch(error => res.status(422).send({ error: error.message }))
}
