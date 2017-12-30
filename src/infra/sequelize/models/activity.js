module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  })

  Activity.associate = models => Activity.hasMany(models.Task)

  return Activity
}
