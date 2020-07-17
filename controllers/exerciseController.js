const express = require("express");
const router = express.Router();
const db = require("../models");

// /api/exercise

//get routes for exercises
router.get("/", (req, res) => {
  db.Exercise.findAll({}).then((result) => {
    res.json(result);
  });
});

//request to create a new exercise
router.post("/", (req, res) => {
  db.Exercise.create(req.body)
    .then((result) => {
      res.json({
        error: false,
        data: result,
        message: "Successfully created new exercise",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new exercise.",
      });
    });
});
router.delete("/:id", (req, res) => {
  db.Exercise.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
});
module.exports = router;
