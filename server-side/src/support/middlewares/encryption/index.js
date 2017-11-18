const bcrypt = require('bcrypt')

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync()
  return bcrypt.hashSync(password, salt)
}

const isValidPassword = (password, encodedPassword) => {
  return bcrypt.compare(password, encodedPassword)
}

module.exports = {
  encryptPassword,
  isValidPassword
}
