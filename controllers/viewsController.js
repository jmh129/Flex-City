const express = require("express");
const router = express.Router();
const testObject = [
    {
        id: "1",
        name: "Pushups",
        type: "Strength"
    },
    {
        id: "2",
        name: "Planks",
        type: "Strength"
    },
    {
        id: "3",
        name: "Tricep Press",
        type: "Strength"
    },
    {
        id: "4",
        name: "Curls",
        type: "Strength"
    },
    {
        id: "5",
        name: "Running",
        type: "Cardio"
    }
];
const singleexercise = {
    singleexercisedata: testObject
}

//renders the front page
router.get("/", (req, res) => {
  res.render("index");
});

//these are just placeholders and guesses until front end is done
router.get("/workout/create",(req,res) =>{
  res.render("workoutform");
});
router.get("/exercise/create",(req,res) =>{
  res.render("exerciseform");
});
router.get("/workout/viewWorkout",(req,res) =>{
  res.render("viewWorkout");
});
router.get("/workout/myworkouts",(req,res) =>{
  res.render("myworkouts");
});
//render 404 page needs
router.get("*",(req,res)=>{
  res.render("404")
});
//might need to add more

module.exports = router;