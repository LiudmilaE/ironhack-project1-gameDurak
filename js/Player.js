//The game is typically played with two to five people (because of recieve method of 6 cards)

function Player(name){
  this.name = name;
  this.cards = [];
  this.cardsTrump = [];
  this.isAttacker = false;
  this.isDefender = false;
}

 Player.prototype._receiveCards = function (cards) {
  if(this.cards.length<6){
    this.cards = _.concat(this.cards, cards);
    this.cardsTrump = _.filter(this.cards, function(card) { return card.isTrump; });
    return this.cards;
  }
  return false;
 };


//TODO
Player.prototype.attack = function (plCards) {
  if(this.isAttaker){
    if(plCards.length===1){
      this.playedCards = _.concat(this.playedCards, plCards);
    } else if(_.every(plCards, 'rank')){
      this.playedCards = _.concat(this.playedCards, plCards);
    } else {
      console.log("Illigal move. Cards should be of the same rank");
    }
  } else {
    return false;
  }
};


//TODO isStronger
Player.prototype.defense = function (i) {
  if(this.isDefender){
  if (this.cards[i].isStronger){
    return this.cards[i];}
  } else {
    return false;
  }
};
