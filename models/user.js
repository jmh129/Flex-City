module.exports = function (sequelize, DataTypes) {
  //create user table
  const User = sequelize.define("User", {
    //Save the user email, it must be unique and not null
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    //Save the password (encrypt later)
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  //associate the user to workouts and reviews
  User.associate = function (models) {
    //Users and workouts are a many to many relationship so need a middle table UserWorkout
    User.belongsToMany(models.Workout, { through: models.UserWorkout });
    User.hasMany(models.UserWorkout);

    //Users has many reviews in a one to many relationship
    User.hasMany(models.Review);
  };

  return User;
};
