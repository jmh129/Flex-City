module.exports = function (sequelize, DataTypes) {
  //create the table for exercises
  var Exercise = sequelize.define("Exercise", {
    //create a name for it that cannot be nothing
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    //number of reps for the exercise
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //number of sets for the exercise
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //How heavy are the weights for the exercise. This can be null because it might not need weights
    weights: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    time:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  });
  //Associate the exercise to workouts in a one to many relationship
  Exercise.associate = function (models) {
    //Workouts and Exercises are a one to many relationship
    Exercise.belongsTo(models.Workout);
  };

  return Exercise;
};
