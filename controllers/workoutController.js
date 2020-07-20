const express = require("express");
const router = express.Router();
const db = require("../models/workout.js");

// Route to display the index page
router.get("/", function (req, res) {
  Workout.all(function (data) {
    let hbsObject = {

    };
    res.render("index", hbsObject);
  });
});
// THIS WILL BE USED IN GET ROUTE TO ORDER WORKOUTS BY THEIR RANKING
// User.findById(uID, { 
//     include: [
//         model: sequelize.models.userProfile
//         as: userProfile,
//         include: [{
//            model: sequelize.models.userProfileImages,
//            as: 'profileImages',
//         }],
//         order: [['profileImages','id', 'desc']]
//     ]
// });

//  Route that displays all the workouts on the page
router.post("/api/workouts", function (req, res) {
  Workout.create(["name", "type"], [req.body.name, req.body.type], function (
    result
  ) {
    res.json({ id: result.insertId });
  });
});

// Route that takes you to the workout user selected by id
router.put("/api/workouts/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  Workout.update(
    {
      type: req.body.type,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// I really don't know if any of this is right
