/**
*Author: Emma LaPolt
*Created: 11/2/2022
**/

function sortUserName(name) {
  console.log("user-name is: ", name);
  //string becomes array of letters
  var nameArray = name.split('');
  console.log("nameArray is: ", nameArray);
  //sort nameArray
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort is: ", nameArraySort);
  //make the array a string again
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted is: ", nameSorted);
  return nameSorted;
}

var button = document.getElementById("my-button");
button.addEventListener("click", function(){
  inputValue = document.getElementById("user-name");
  var sortedName = sortUserName(inputValue);
  document.getElementById("output").innerHTML = sortedName;
});
