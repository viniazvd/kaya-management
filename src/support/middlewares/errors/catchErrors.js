// module.exports = fn => (...params) => fn(...params).catch(err => console.error(err))
module.exports = fn => (req, res, next) => fn(req, res, next).catch(next())
