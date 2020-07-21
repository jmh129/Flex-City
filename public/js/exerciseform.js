$(document).ready(function () {
  $("create-btn").on("click", function () {
    $.ajax("/api/exercise", {
        type:"PUT",
        data:{
            text:text,
        }
    }).then(function(){
        console.log("created exercise")
    });
  });
});
