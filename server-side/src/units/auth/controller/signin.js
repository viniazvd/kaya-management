module.exports = service => async (req, res) => {
  try {
    const { email, password } = req.body

    service.signin(email, password)
      .then(results => res.status(200).send(results))
  } catch (error) {
    res.status(404).send(error)
  }
}
