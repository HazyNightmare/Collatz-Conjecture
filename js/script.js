var count = 0;

function Collatz (number) {
console.log(number);
count += 1;
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
  else if (number < 1){
    console.error("The number must be greater than one");
  }
  else {
    console.error("ERROR. STOP FDSJKDLSJFKSDLJF");
  }
  count = 0;
}

Collatz(8191);
