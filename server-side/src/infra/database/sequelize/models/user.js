// const hashing = require('../../../../support/auth/hashing')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  })

  // user.hashing(user.password)

  return user
}
