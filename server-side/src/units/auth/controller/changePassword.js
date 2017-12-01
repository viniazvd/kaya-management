module.exports = service => (req, res) => {
  try {
    const { email, password, newPassword } = req.body

    service.changePassword(email, password, newPassword)
      .then(results => res.status(200).send(results))
  } catch (error) {
    res.status(404).send(error)
  }
}
