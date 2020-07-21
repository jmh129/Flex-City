const express = require("express");
const router = express.Router();
const db = require("../models");

// Route to display the index page
router.get("/workouts/find", function (req, res) {
  db.Workout.findAll({}).then(function (result) {
    const workout = {
      workout: result,
    };
    res.render("find", workout);
  });
});

// Route that shows one workout
router.get("/workouts/:id", function (req, res) {
  db.Workout.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Exercise],
  }).then(function (result) {
    var singleexercisedata = {
      singleexercisedata: result.dataValues.Exercises,
    };
    res.render("viewWorkout", singleexercisedata);
  });
});

router.get("/workouts/edit/:id", function (req, res) {
  db.Workout.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Exercise],
  }).then(function (result) {
    var singleexercisedata = {
      singleexercisedata: result.dataValues,
    };
    res.render("editwork", singleexercisedata);
  });
});

//get only saved routes
router.get("/workouts/saved", function (req, res) {
  if (req.body === null) {
    res.render("404");
  }
  db.Workout.findAll({
    where: {
      id: {
        [Op.or]: req.body.array,
      },
    },
  }).then(function (result) {
    res.render("index", result);
  });
});

//  Route that creates new workout
router.post("/api/workouts/", function (req, res) {
  db.Workout.create(req.body).then(function (result) {
    res.json(result);
  });
});

// Route that takes you to the workout user selected by id
router.put("/api/workouts/:id", function (req, res) {
  db.Workout.update(
    {
      name: req.body.name,
      type: req.body.type,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(function (result) {
    res.json(result);
  });
});

// Route that deletes workouts by their id's
router.delete("/api/workouts/:id", function (req, res) {
  db.Workout.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (result) {
    res.json(result);
  });
});

module.exports = router;
