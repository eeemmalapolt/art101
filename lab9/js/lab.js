/**
*Author: Emma LaPolt
*Created: 10/31/2022
**/

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
var new2El = document.createElement("p");

new1El.innerHTML = "I'm doing this lab on Halloween!! :D";
new2El.innerHTML = "I'm dressed as a character from the movie X. I'm very scary! >:)";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.fontFamily="cursive";
new2El.style.fontFamily="cursive";
