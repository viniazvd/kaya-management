module.exports = service => (req, res) => {
  const { token, email, newPassword } = req.body

  service.changePassword(token, email, newPassword)
    .then(result => res.status(200).send({ result }))
    .catch(error => res.status(422).send({ error: error.message }))
}
