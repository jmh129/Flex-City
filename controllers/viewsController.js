const express = require("express");
const router = express.Router();

//renders the front page
router.get("/", (req, res) => {
  res.render("index");
});

//these are just placeholders and guesses until front end is done
router.get("/workout_list",(req,res) =>{
  res.render("workoutform");
})
router.get("/workout/create",(req,res) =>{
  res.render("oneWorkout");
})
router.get("/exercise/create",(req,res) =>{
  res.render("exerciseform");
})

module.exports = router;
