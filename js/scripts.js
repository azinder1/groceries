$(function() {
  var userInput =[];
  $('#addButton').click(function(event){
    userInput.push($("input#listItem").val());
    console.log(userInput);
    event.preventDefault();
  });



  $("#submitButton").click(function(event){
    $('#blanks').hide();
    $('#list').show();
    userInput.sort();
    // userInput.toString();
    $("#groceryList").text(userInput);
    console.log(userInput);

    event.preventDefault();


  });
});
