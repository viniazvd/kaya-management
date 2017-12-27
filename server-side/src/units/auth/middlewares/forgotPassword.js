module.exports = service => (req, res) => {
  const { email } = req.body

  service.forgotPassword(email)
    .then(result => res.status(200).send({ result }))
    .catch(error => res.status(422).send({ error: error.message }))
}
