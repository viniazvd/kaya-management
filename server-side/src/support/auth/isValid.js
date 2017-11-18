const bcrypt = require('bcrypt')

module.exports = async (passwordPosted, passwordEncrypted) => {
  try {
    return await bcrypt.compare(passwordPosted, passwordEncrypted)
  } catch (error) {
    throw new Error(error)
  }
}
