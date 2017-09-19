function GameDurak() {
  this.deck = new Deck();//cards, talon, trump, lastCard
  this.players = [];
  this.gameOver = false;
  this.attacker = {};//The player with the lowest trump is the first attacker.
  this.defender = {};//The player to the attacker's left is always the defender.
}

GameDurak.prototype.startGame = function (numberOfPlayers) {
  if (numberOfPlayers>6) {
    numberOfPlayers=6;
    console.log("Maximum only 6 players!!!");
  }
  var that=this;//GameDurak instance
  //The deck is shuffled, and each player receives six cards.
  this.deck._creatDeck();
  this.deck._shuffleDeck();
  this.deck._shuffleDeck();
  for (var p=1; p<= numberOfPlayers; p++){
    var player = new Player("Incognito"+p);
    that.players.push(player);
  }

  that.players.forEach(function(el){
    el._receiveCards(that.deck._cardsToBeReceived(6));
  });


  //The player with the lowest trump is the first attacker.
  //only works for 2 players TODO implement more players
  that.attacker = function(){
    if(that.players[0].cardsTrump.length !== 0 && that.players[1].cardsTrump.length === 0){
      return that.players[0];
    } else if(that.players[0].cardsTrump.length === 0 && that.players[1].cardsTrump.length !== 0) {
      return that.players[1];
    } else {
      var lT1 = _.minBy(that.players[0].cardsTrump, function(c) { return c.strength; });
      var lT2 = _.minBy(that.players[1].cardsTrump, function(c) { return c.strength; });
        return lT1.strength < lT2.strength ? that.players[0] : that.players[1] ;
    }
  }();/////---var attacker end

//TODO The player to the attacker's left is always the defender.
//  that.defender = that.attacker;

  /*The remainder of the deck is then placed
   on top of the revealed card at a 90 degree angle, so that it remains visible,
    forming a draw pile called the prikup ("talon").
    The revealed card remains part of the talon and is drawn as the last card.
    Cards discarded due to successful defenses are placed in a discard pile
    next to the talon.*/
};



GameDurak.prototype.changeTurn = function () {
  /*After each turn play proceeds clockwise.
  If the attack succeeds, the defender loses their turn
  and the attack passes to the player on the defender's left.
  If the attack fails, the defender becomes the next attacker.*/


};

GameDurak.prototype.isGameOver = function () {

};
