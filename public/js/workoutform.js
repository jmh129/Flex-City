$(document).ready(function () {
  $("#submitbtn").on("click", function () {

    if ($("#name").val() === "" || $("#type").val() === "") {

      alert("Enter a name and type");
    } else {
      $.ajax("/api/workouts/" + id, {
        type: "PUT",
        data: {
          name: $("#name").val(),
          type: $("#type").val(),
        },
      }).then(function (results) {
        for (let i = 1; i < 6; i++) {
          if ($("#message" + i).val() !== "") {
            $.ajax("/api/exercise/ " + id, {
              type: "PUT",
              data: {
                text: $("#message" + i).val(),
                WorkoutId: results.id,
              },
            }).then(function () {
              location.reload();
            });
          }
        }
      });
    }
  });
});
