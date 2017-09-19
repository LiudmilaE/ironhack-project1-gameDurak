//The game is typically played with two to five people (because of recieve method of 6 cards)

function Player(name){
  this.name = name;
  this.cards = [];
  this.cardsTrump = [];
}

 Player.prototype._receiveCards = function (cards) {
  if(this.cards.length<6){
    this.cards = _.concat(this.cards, cards);
    this.cardsTrump = _.filter(this.cards, function(card) { return !card.isTrump; });
    return this.cards;
  }
  return false;
 };


//The player with the lowest trump is the first attacker.
Player.prototype.attack = function (i) {
 return this.cards[i];
};


//TODO isStronger
Player.prototype.defense = function (i) {
  if (this.cards[i].isStronger){
    return this.cards[i];}
};
