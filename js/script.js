var count = 0;
var submitButton = $("#submit"),
    tableBody = $(".tbody"),
    tableHStep = $(".tstep"),
    tableHResult = $(".tresult");
function Collatz (number) {
  'use strict';
  count += 1;

  $(submitButton).addClass("disabled");
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
        alert("There was an error. Make sure that JavaScript is enabled on the page and then try again.");
      }
    }
    else if (number === 1) {
      $(tableHStep).text("Step          Total = " + count);
      $(tableHResult).text("Result          Final = " + number);
    }
    else {
      alert("There was an error. Make sure that JavaScript is enabled on the page and then try again.");
    }
  count = 0;
  $(submitButton).removeClass("disabled");
}
$(submitButton).click(function() {
  var testNum = $("#number-to-test").val();
  $(tableBody).children().remove(".tableRow");
  Collatz(testNum);
});
