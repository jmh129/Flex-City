module.exports = function (sequelize, DataTypes) {
    var UserWorkout = sequelize.define("UserWorkout", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    });
    UserWorkout.associate = function (models) {
        UserWorkout.belongsTo(models.User);
        UserWorkout.belongsTo(models.Workout);
    };
  
    return UserWorkout;
  };