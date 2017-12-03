module.exports = service => (req, res) => {
  const { email, password, newPassword } = req.body

  service.changePassword(email, password, newPassword)
    .then(result => res.status(200).send({ result }))
    .catch(error => res.status(422).send({ error: error.message }))
}
