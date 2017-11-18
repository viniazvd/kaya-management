module.exports = service => (req, res) => {
  const { email, password } = req.body

  service.changePassword(email, password)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}
