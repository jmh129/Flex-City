const express = require("express");
const router = express.Router();
const db = require("../models");

// /api/exercise

//get routes for all exercises (might need to show o)
router.get("/", (req, res) => {
  //return all exercises
  db.Exercise.findAll({}).then((result) => {
    res.json(result);
  });
});

//request to create a new exercise
router.post("/", (req, res) => {
  db.Exercise.create(req.body)
    //on sucess send a response of the data and a message that it was created
    .then((result) => {
      res.json({
        error: false,
        data: result,
        message: "Successfully created new exercise",
      });
    })
    //on failure send a status code with message of unable to be created
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new exercise.",
      });
    });
});
//request for updating an exercise
router.put("/:id", (req, res) => {
  //update the name, reps, sets, and weights part of the exercise
  db.Exercise.update(req.body,
    {
      //location of the exercise that is being updated
      where: {
        id: req.params.id,
      },
    }
    //on sucess send a response of the data and a message that it was updated
  )
    .then((result) => {
      res.json({
        error: false,
        data: result,
        message: "Succesfully updated exercise",
      });
      //on failure send a status code with message of unable to be updated
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to update exercise",
      });
    });
});

//request for deleting an exercise
router.delete("/:id", (req, res) => {
  //call to destroy the exercise
  db.Exercise.destroy({
    //location of which exercise to destroy
    where: {
      id: req.params.id,
    },
    //on sucess send a response of the data and a message that it was deleted
  }).then((result) => {
    res
      .json({
        error: true,
        data: result,
        message: "Successfully deleted exercise",
      })
      //on failure send a status code with message of unable to be deleted
      .catch((err) => {
        res.status(500),
          json({
            error: true,
            data: null,
            message: "Unable to delete exercise",
          });
      });
  });
});
module.exports = router;
