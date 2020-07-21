$(document).ready(function () {
  
  let savedWorkout = [];
  //get local storage
  if (localStorage.getItem("saved") === null) {
    savedWorkout = [];
  } else {
    savedWorkout = JSON.stringify(localStorage.getItem("saved"));
  }

  //if a workout button is pressed that workout id is saved to local storage
  $(".save-workout").on("click", function (error) {
    event.preventDefault();
    savedWorkout.push($(this).data("id"));
  });
  
  $("#view-saved").on("click", function (error) {
    event.preventDefault();
    $.get("/workouts/saved",{
        type:"GET",
        data: json.stringify(localStorage.getItem("saved"))
    }).then(()=>{
        console.log("pulled up saved workouts")
    })
  });
});
