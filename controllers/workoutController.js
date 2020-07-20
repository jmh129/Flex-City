const express = require("express");
const router = express.Router();
const db = require("../models");

// Route to display the index page
router.get("/workouts", function(req, res) {
    db.Workout.findAll({})
    .then(function(result) {
      res.render("index", result);
    });
  });

// Route that shows one workout
router.get("/workouts/:id", function(req, res) {
    db.Workout.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Excercise]   
    })
      .then(function(result) {
        res.render("index", result);
      });
  });

//  Route that creates new workout
router.post("/api/workouts/", function (req, res) {
    db.Workout.create(req.body)
        .then(function(result) {
          res.json(result);
        });
});


// Route that takes you to the workout user selected by id
router.put("/api/workouts/:id", function (req, res) {
    db.Workout.update(req.body,
        {
          where: {
            type: req.body.type,
            id: req.body.id
          }
        })
        .then(function(result) {
          res.json(result);
        });
});

// Route that deletes workouts by their id's
router.delete("/api/workouts/:id", function(req, res) {
    db.Workout.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(result) {
          res.json(result);
        });
  });

module.exports = router;

