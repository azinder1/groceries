//===============UI===============
$(function() {
  var userInputs =[];
  $('#addButton').click(function(event){
    userInputs.push($("input#listItem").val());
    //$('#listItem').empty();<-----possible way to clear input field 
    event.preventDefault();
  });



  $("#submitButton").click(function(event){
    listMaker();
    //console.log(userInput);

    event.preventDefault();

  });


  //==============BL================

  var listMaker = function() {
    $('#blanks').hide();
    $('h2').show();
    userInputs.sort();
    userInputs.forEach(function(userInput){
      $("#groceryList").append("<li>"+userInput+"</li>");
    });
  }

});
