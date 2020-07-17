module.exports = function (sequelize, DataTypes) {
  var WorkoutExercise = sequelize.define("WorkoutExercise", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });
  WorkoutExercise.associate = function (models) {
    WorkoutExercise.belongsTo(models.Workout);
    WorkoutExercise.belongsTo(models.Exercise);
  };

  return WorkoutExercise;
};
