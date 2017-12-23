module.exports = (err, req, res, next) =>
  req.xhr
    ? res.status(422).send({ error: 'Something failed!' })
    : next(err)
