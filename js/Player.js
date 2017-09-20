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


Player.prototype.attack = function(card, currAttackedCards) {
  var arr = currAttackedCards;
  if(this.isDefender){
      console.log("Illegal move! You can't attack! You should defend yourself!");
      return;
    }
  if (arr.length===0 || _.includes(arr, card.rank)){
    arr = _.concat(arr, card);
    this.cards = _.filter(this.cards, function(c){return  !(c.rank === card.rank && c.suit === card.suit);});
    this.cardsTrump = _.filter(this.cardsTrump, function(c){return !(c.rank === card.rank && c.suit === card.suit);});
    return arr;
  } else {
    console.log("Illegal move! You can't attack! Your card should be of the same rank as currently played cards");
    return;
  }
};


//TODO check if isStrongerCard??
// The defender attempts to beat the attacking cards by playing higher-valued defending cards from their hand.
// One card is played to defend against each attacking card, and it must be in the attacking card's suit or the trump suit.
Player.prototype.defense = function (card, attackingCard) {
  var arr = [];
  if(!this.isDefender){
    console.log("Illegal move!You are not a defender! You should attack!");
    return;
  }

  function isStrongerCard(def,att){
    return (def.isTrump && !att.isTrump) || (def.suit===att.suit && def.strength > att.strength);
    }

  if (card.isStrongerCard){
    arr = _.concat(arr, card);
    return arr;
  } else {
    console.log("Defense is not successfull!");
    return false;
  }
};
