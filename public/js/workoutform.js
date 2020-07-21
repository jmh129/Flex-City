$(document).ready(function () {

  $().on("click", function () {
    $.ajax("/api/workouts/", {
      type: "POST",
      data: {
        name: $("#name"),
        type: $("#type"),
      },
    }).then(function (results) {
      for (let i = 1; i < 6; i++) {
        if ($("message" + i) !== null) {
          $.ajax("/api/exercise/", {
            type: "POST",
            data: {
              text: $("message" + i),
            },
          }).then(function () {
            console.log("added exercise " + i);
          });
        }
      }
    });
  });
});
