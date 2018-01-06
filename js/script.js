var count = 0;
var submitButton = $("#submit");
var tableBody = $(".tbody");

function Collatz (number) {
  'use strict';
  $(submitButton).addClass("disabled");
  console.log(number);
  count += 1;

  $(tableBody).append("<tr class=\"tableRow\"><td>" + count + "</td><td>" + number + "</td></tr>");

    if (number > 1) {
      if (number % 2 === 0) {
        number /= 2;
        Collatz(number);
      }
      else if (number % 2 !== 0) {
        number = (number * 3) + 1;
        Collatz(number);
      }
      else {
        console.error("ERROR. STOP FDSJKDLSJFKSDLJF");
      }
    }
    else if (number === 1) {
      console.log("Completed. It took " + count + " calls to the function to get to 1.")
    }
    else {
      console.error("ERROR. STOP FDSJKDLSJFKSDLJF");
    }


  count = 0;
  $(submitButton).removeClass("disabled");
}

$(submitButton).click(function() {
  var testNum = $("#number-to-test").val();
  $(tableBody).children().remove(".tableRow");
  Collatz(testNum);
});
