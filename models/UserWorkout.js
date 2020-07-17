module.exports = function (sequelize, DataTypes) {
  //Table for connecting the user and workout in a many to many relationship
  const UserWorkout = sequelize.define("UserWorkout", {
    //create an id with it
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });

  //Add the associations to the user and workouts tables
  UserWorkout.associate = function (models) {
    //Has a one to many relationship with both user and workout in order to get a many to many relationship with user and workouts
    UserWorkout.belongsTo(models.User);
    UserWorkout.belongsTo(models.Workout);
  };

  return UserWorkout;
};
