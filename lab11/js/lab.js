/**
*Author: Emma LaPolt
*Created: 11/2/2022
**/

$('#challenge').append('<button id="buttChalEl">Click me!</button>');

$('#results').append('<button id="buttResEl">Click me!!</button>');

$('#problems').append('<button id="buttProbEl">Click me!!!</button>');

$('#output').append('<button id="buttOutEl">Switch it up!</button>');

$('#buttChalEl').click(function(){
  $('#challenge').toggleClass("special");
});

$('#buttResEl').click(function(){
  $('#results').toggleClass("specialer");
});

$('#buttProbEl').click(function(){
  $('#problems').toggleClass("specialest");
});

$('#buttOutEl').click(function(){
  $('button').toggleClass("sillyButt");
})
