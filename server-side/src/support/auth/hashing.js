const bcrypt = require('bcrypt')

module.exports = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  } catch (error) {
    throw new Error(error)
  }
}
