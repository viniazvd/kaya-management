const bcrypt = require('bcryptjs')

module.exports = async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(this.password, salt)
    this.password = passwordHash
    next()
  } catch (error) {
    next(error)
  }
}
