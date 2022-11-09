/**
*Author: Emma LaPolt
*Created: 11/2/2022
**/

function sortingHat(str){
  length = str.length;
  mod = length % 4;
  if (mod == 0){
    return "Gryffindor";
  }
  else if (mod == 1){
    return "Ravenclaw";
  }
  else if (mod == 2){
    return "Slytherin";
  }
  else if (mod == 3){
    return "Hufflepuff";
  }
}

function description(str){
  length = str.length;
  mod = length % 4;
  if (mod == 0){
    return "Gryffindors are all cool guys who don't fear death and think they're better than everyone else! B)";
  }
  else if (mod == 1){
    return "Ravenclaws are the smart ones. They're uninvolved with everyone else's nonsense because they have better things to do."
  }
  else if (mod == 2){
    return "Slytherins are cunning and manipulative. It's not they're fault they're evil, it just comes naturally to them."
  }
  else if (mod == 3){
    return "Hufflepuffs are the best house, but everyone is really mean to them. :( #niceguysfinishlast"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var desc = description(name);
  var newText = "<p>The Sorting Hat has sorted you into "+ house +"!</p><p>"+ desc +"</p>";
  document.getElementById("output").innerHTML = newText;
})
