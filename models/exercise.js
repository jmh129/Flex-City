module.exports = function (sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weights: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  Exercise.associate = function (models) {
    Exercise.belongsToMany(models.Workout, { through: models.WorkoutExercise });
    Exercise.hasMany(models.WorkoutExercise);
  };

  return Exercise;
};
