const express = require("express");
const router = express.Router();
const db = require("../models");

// Route to display the index page
router.get("/api/workouts", function(req, res) {
    db.Workout.findAll(function(data) {
      let hbsObject = {
        Workout: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

// Route that shows one workout
router.get("/api/workouts/:id", function(req, res) {
    db.Workout.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbWorkout) {
        res.json(dbWorkout);
      });
  });
  
//  Route that creates new workout
router.post("/api/workouts/", function (req, res) {
  db.Workout.create(["name", "type"], [req.body.name, req.body.type], function (
    result
  ) {
    // This needs to update depending on the handlebars page(maybe workouts handlebars page), not index.
    res.render("index", result);
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

// Route that deletes workouts by their id's
router.delete("/api/workouts/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    db.Workout.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router;

// I really don't know if any of this is right
