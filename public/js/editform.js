$(document).ready(function () {
    $("#submitbtn-edit").on("click", function () {
  
      if ($("#name-edit").val() === "" || $("#type-edit").val() === "") {
        alert("Enter a name and type");
      } else {
        $.ajax("/api/workouts/" + id, {
          type: "PUT",
          data: {
            name: $("#name-edit").val(),
            type: $("#type-edit").val(),
          },
        }).then(function (results) {
          for (let i = 0; i < 5; i++) {
            if ($("#loop" + i).val() !== "" || $("#loop" + i).val() !== "undefined") {
              $.ajax("/api/exercise/ " + id, {
                type: "PUT",
                data: {
                  text: $("#loop" + i).val(),
                  WorkoutId: results.id,
                },
              }).then(function () {
                console.log("updated exercise")
              });
            }
          }
          location.reload();
        });
      }
    })
})