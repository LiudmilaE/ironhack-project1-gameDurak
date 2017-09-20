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
Player.prototype.attack = function(card, currAttackedCards) {
  var arr = currAttackedCards;
  if(this.isDefender){
      console.log("Illegal move! You can't attack! You should defend yourself!");
      return;
    }

  if (arr.length===0 || _.includes(arr, card.rank)){
    arr = _.concat(arr, card);
    return arr;
  } else {
    console.log("Illegal move! You can't attack! Your card should be of the same rank as currently played cards");
    return;
  }
};


//TODO check if isStronger??
Player.prototype.defense = function (i) {
  if(this.isDefender){
  if (this.cards[i].isStronger){
    return this.cards[i];}
  } else {
    return false;
  }

  return arr;
};
