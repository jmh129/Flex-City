$(document).ready(function () {

const id = $("exercise-id")

$("#submitbtn").on("click",function(){
    event.preventDefault();
    $.ajax("/api/exercise/" + id,{
        type:"PUT",
        data:{
            text:text,
        }
    }).then(function(){
        console.log("update exercise")
    });
});

$("#deletebtn").on("click",function(){
    event.preventDefault();
    $.ajax("/api/exercise/" + id,{
        type:"DELETE"
    }).then(function(){
        console.log("deleted exercise")
    });
});


});