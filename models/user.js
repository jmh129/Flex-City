const UserWorkout = require("./UserWorkout");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = function (models) {
    User.belongsToMany(models.Workout, {through: models.UserWorkout});
    User.hasMany(models.UserWorkout)
    User.hasMany(models.Review)
  };

  return User;
};
