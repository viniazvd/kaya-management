module.exports = service => (req, res) => {
  const { email, password } = req.body

  service.signin(email, password)
    .then(result => res.status(200).send({ result }))
    .catch(error => res.status(422).send({ error: error.message }))
}
