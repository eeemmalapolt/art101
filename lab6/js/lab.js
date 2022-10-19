/**
*Author: Emma LaPolt
*Created: 10/19/2022
**/

//Define variables
myTransport = ["bus", "walk", "friendsCar", "Ghia"];
myMainRide = {
  make: "Ghia",
  model: "Volkswagen Karrman",
  color: "Light blue",
  year: 1968,
  age: function() {
    return 2022 - year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '/t'), "<pre>");
