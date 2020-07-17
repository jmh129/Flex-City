module.exports = function (sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
      rating: DataTypes.INTEGER,
      review: DataTypes.TEXT,
    });
  
    Review.associate = function (models) {
        Review.belongsTo(models.Workout);
        Review.belongsTo(models.User)
    };
  
    return Review;
  };
  