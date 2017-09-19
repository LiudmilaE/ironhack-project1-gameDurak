function GameDurak(num) {
  this.deck = new Deck();//cards, talon, trump, lastCard
  this.numberOfPlayers = num;
  this.player1 = new Player("Incognito1");
  this.player2 = new Player("Incognito2");
  this.gameOver = false;

  this.attacker = {};//The player with the lowest trump is the first attacker.
  this.defender = {};//The player to the attacker's left is always the defender.
}

GameDurak.prototype.startGame = function () {
  var that=this;//GameDurak instance
  //The deck is shuffled, and each player receives six cards.
  this.deck._creatDeck();
  this.deck._shuffleDeck();
  this.deck._shuffleDeck();
  this.player1._receiveCards(this.deck._cardsToBeReceived(6));
  this.player2._receiveCards(this.deck._cardsToBeReceived(6));

  //The player with the lowest trump is the first attacker.
  this.attacker = function(){
    if(that.player1.cardsTrump.length !== 0 && that.player2.cardsTrump.length === 0){
      return that.player1;
    } else if(that.player1.cardsTrump.length === 0 && that.player2.cardsTrump.length !== 0) {
      return that.player2;
    } else {
      var lT1 = _.minBy(that.player1.cardsTrump, function(c) { return c.strength; });
      var lT2 = _.minBy(that.player2.cardsTrump, function(c) { return c.strength; });
        return lT1.strength < lT2.strength ? that.player1 : that.player2 ;
    }
  }();/////---var attacker end


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
