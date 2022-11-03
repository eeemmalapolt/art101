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

document.getElementById("my-button").addEventListener("click", sortUserName("user-name"));
