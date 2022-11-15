/**
*Author: Emma LaPolt & Jorge Gonzalez
*Created: 11/14/2022
**/
function fizzBuzzBoomBang() {
  var final = ""
  for (i = 1; i < 201; i++) {
    var num = "";
    /* we don't actually need this part because we can avoid hard coding with the append method
    if (i % 105 == 0) {
      num.apppend("FizzBuzzBoom")
    }
    if (i % 15 == 0) {
      num.append("FizzBuzz")
    }*/
    /*The numbers below are moved one over for Task X*/
    if (i % 3 == 0) {
      num += "Fizz";
    }
    if (i % 4 == 0) {
      num += "Buzz";
    }
    if (i % 5 == 0) {
      num += "Boom";
    }
    if (i % 7 == 0) {
      num += "Bang";
    }

    if (num == "") {
      final += i
      final += "\n";
    }
    else{
      num += "!";
      final += i
      final += "- "
      final += num
      final += "\n";
    }
    }
  return final;
}

/*changing the output div*/
numberList = fizzBuzzBoomBang();
document.getElementById("output").innerHTML = numberList;
