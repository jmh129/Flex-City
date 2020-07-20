const express = require("express");
const router = express.Router();
const db = require("../models");

// Route to display the index page
router.get("/workouts", function (req, res) {
  db.Workout.findAll({}).then((data) => {
    res.render("index", data);
  });
});

// Route that shows one workout
router.get("/workouts/:id", function (req, res) {
  db.Workout.findOne({
    where: {
      id: req.params.id,
    },
    include: db.Exercise,
  }).then(function (dbWorkout) {
    res.render(dbWorkout);
  });
});

//  Route that creates new workout
router.post("/api/workouts/", function (req, res) {
  db.Workout.create(req.body).then((result) => {
    // This needs to update depending on the handlebars page(maybe workouts handlebars page), not index.
    res.render("index", result);
  });
});

// Route that takes you to the workout user selected by id
router.put("/api/workouts/:id", function (req, res) {
  db.Workout.update({
    type: req.body.type,
    id: req.params.id,
  }).then((result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Route that deletes workouts by their id's
router.delete("/api/workouts/:id", function (req, res) {
  db.Workout.delete({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

