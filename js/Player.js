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


Player.prototype.attack = function(card, currCards) {
  var arr = currCards[0]; //attackedCards
  var allCurrCards = _.flatten(currCards); //all played cards

  if(this.isDefender){
      console.log("Illegal move! You can't attack! You should defend yourself!");
      return;
    }

 //At any point during a defense, all players other than the defender can add extra attacking cards,
 //provided that for each new attacking card, there is already a card of the same rank on the table (either defending or attacking)
  if (arr.length===0 || _.includes(allCurrCards, card.rank)){
    arr = _.concat(arr, card);
    this.cards = _.filter(this.cards, function(c){return  !(c.rank === card.rank && c.suit === card.suit);});
    this.cardsTrump = _.filter(this.cardsTrump, function(c){return !(c.rank === card.rank && c.suit === card.suit);});
    return arr;
  } else {
    console.log("Illegal move! You can't attack! Your card should be of the same rank as currently played cards");
    return;
  }
};



// The defender attempts to beat the attacking cards by playing higher-valued defending cards from their hand.
// One card is played to defend against each attacking card, and it must be in the attacking card's suit or the trump suit.
Player.prototype.defense = function (card, attCard) {
  // var arr = [];
  if(!this.isDefender){
    console.log("Illegal move!You are not a defender! You should attack!");
    return;
  }

  function isStrongerCard(def,att){
    return (def.isTrump && !att.isTrump) || (def.suit===att.suit && def.strength > att.strength);
  }

  if (isStrongerCard(card, attCard)){
    // arr = _.concat(arr, card);
    return card;
  } else {
    console.log("Defense is not successfull!");
    return;
  }
};
