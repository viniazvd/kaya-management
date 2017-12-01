module.exports = service => (req, res) => {
  try {
    const { name, email, password } = req.body

    service.signup(name, email, password)
      .then(results => res.status(200).send(results))
  } catch (error) {
    res.status(404).send(error)
  }
}
