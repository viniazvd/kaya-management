const bcrypt = require('bcrypt')

module.exports = async (password) => {
  try {
    // const salt = bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, 10)

    return passwordHash
  } catch (error) {
    throw new Error(error)
  }
}
