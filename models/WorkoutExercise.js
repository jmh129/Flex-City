module.exports = function (sequelize, DataTypes) {
  //Table for connecting the workout and exercise in a many to many relationship
  const WorkoutExercise = sequelize.define("WorkoutExercise", {
    //create an id with it
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });
  //Add the associations to the workouts and exercise tables
  WorkoutExercise.associate = function (models) {
    //Has a one to many relationship with both workouts and exercise
    //in order to get a many to many relationship with workouts and exercise
    WorkoutExercise.belongsTo(models.Workout);
    WorkoutExercise.belongsTo(models.Exercise);
  };

  return WorkoutExercise;
};
