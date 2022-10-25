/**
*Author: Emma LaPolt
*Created: 10/23/2022
**/

//sortUserName takes user input and sorts the letters of the name they write
var userName = window.prompt("Hi. Tell me your name so I can mess with it.");
function sortUserName(name) {
  console.log("userName is: ", userName);
  //string becomes array of letters
  var nameArray = userName.split('');
  console.log("nameArray is: ", nameArray);
  //sort nameArray
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort is: ", nameArraySort);
  //make the array a string again
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted is: ", nameSorted);
  return nameSorted;
}

//output
document.writeln("Here is your new name. Nice to meet you, ", sortUserName(userName), ".", "</br>");
