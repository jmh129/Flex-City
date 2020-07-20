module.exports = function (sequelize, DataTypes) {
  //Create a workout table
  const Workout = sequelize.define("Workout", {
    //Creates a name column that must be 1 length
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    //Creates a type column of what kind of exercise it is that must be 1 length
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  //Workout relationships
  Workout.associate = function (models) {
    //Workouts and Exercises are a one to many relationship
    Workout.hasMany(models.Exercise);

    //Users and workouts are a many to many relationship so need a middle table UserWorkout
    Workout.belongsToMany(models.User, { through: models.UserWorkout });
    Workout.hasMany(models.UserWorkout);

    //workout is in a one to many relations ship with reviews
    Workout.hasMany(models.Review);
  };

  return Workout;
};
