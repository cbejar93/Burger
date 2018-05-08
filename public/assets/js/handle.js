$(function(){
console.log("hello");


$("#btn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("hello");
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      eat : false 
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})