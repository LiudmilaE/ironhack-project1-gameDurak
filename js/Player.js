//The game is typically played with two to five people (because of recieve method of 6 cards)

function Player(name){
  this.name = name;
  this.cards = [];
}

 Player.prototype.receiveCards = function (sixCards) {
  this.cards = sixCards;
 };

Player.prototype.attack = function () {

};

Player.prototype.defense = function () {

};
