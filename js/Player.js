//The game is typically played with two to five people (because of recieve method of 6 cards)

function Player(name){
  this.name = name;
  this.cards = [];
}

 Player.prototype._receiveCards = function (cards) {
  if(this.cards.length<6){
    this.cards = _.concat(this.cards, cards);
    return this.cards;
  }
  return false;
 };

Player.prototype.attack = function () {

};

Player.prototype.defense = function () {

};
