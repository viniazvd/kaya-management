const bcrypt = require('bcrypt')

module.exports = async (newPassword, password) => {
  try {
    return await bcrypt.compare(newPassword, password)
  } catch (error) {
    throw new Error(error)
  }
}
