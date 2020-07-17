module.exports = function (sequelize, DataTypes) {
  //create a table for reviews
  const Review = sequelize.define("Review", {
    //reviews have a rating score that goes from 1-10
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 10,
        min: 1,
      },
    },
    //table column for the actual review. Can be null
    review: {
      type: DataTypes.TEXT,
    },
  });
  //associating the reviews with the workout and user tables
  Review.associate = function (models) {
    //The review is in a one ot many relationship with both workouts and users
    //Each review is assigned one workout and one user.
    //There can be many reviews assigned to many different workouts and users
    Review.belongsTo(models.Workout);
    Review.belongsTo(models.User);
  };

  return Review;
};
