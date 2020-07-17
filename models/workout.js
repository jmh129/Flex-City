module.exports = function (sequelize, DataTypes) {
  const Workout = sequelize.define("Workout", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  Workout.associate = function (models) {
    Workout.belongsToMany(models.Exercise, { through: models.WorkoutExercise });
    Workout.hasMany(models.WorkoutExercise)

    Workout.belongsToMany(models.User, { through: models.UserWorkout });
    Workout.hasMany(models.UserWorkout)

    Workout.hasMany(models.Review)
  };

  return Workout;
};
