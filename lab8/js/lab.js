/**
*Author: Emma LaPolt
*Created: 10/23/2022
**/

var numbers = [0, 3, 6, 45, 897];
console.log("List of numbers: ", numbers);

//function that multiplies parameters by two
function timesTwo(x) {
    var result = x + x;
    return result;
}

//function test
console.log("2 x 2 = ", timesTwo(2));
console.log("25 x 2 = ", timesTwo(25));

var numbersxTwo = numbers.map(timesTwo);
//should return 0, 6, 12, 90, 1794
console.log("My numbers, doubled: ", numbersxTwo);

//my numbers squared by anon function
var numbersSquared = numbers.map(function(x){
  return x * x;
})
//should return 0, 9, 36, 2025, 804609
console.log("My numbers, squared: ", numbersSquared);
