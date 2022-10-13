//Pseudocode of streaming music.
//High level steps used when user plays music on an application.
//@link URL
//@file This is task 3 in Lab 4.
//@author Emma LaPolt and Wei-Yan Chiang.
//@since 10.12.2022

//Get a deck of cards
//Shuffle cards
//Set up the cards
  //Place tableau of cards in 7 columns from left to right in ascending order of 1 stacked card to 7, face down
  //Flip all card on the surface over to reveal their number and pattern
  //Place the rest in “stock” pile, all face down
  //Leave room for the foundation and waste
//Move any Aces (if there are any face up) in the tableau to the foundation
//Stack cards in tableau in alternating color order by descending faces
//Stack cards in foundation organized by face in ascending order (Ace to King). when this is complete, the game is won
//If there are every no possible moves, pull a card from the stock pile
