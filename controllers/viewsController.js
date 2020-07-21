const express = require("express");
const router = express.Router();

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

router.get("/workout/myworkouts",(req,res) =>{
  res.render("myworkouts");
});
//render 404 page needs
router.get("*",(req,res)=>{
  res.render("404")
});
//might need to add more

module.exports = router;