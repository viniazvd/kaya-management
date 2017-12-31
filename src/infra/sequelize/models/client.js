module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: DataTypes.STRING
  })

  Client.associate = models => Client.hasMany(models.Task)

  return Client
}
