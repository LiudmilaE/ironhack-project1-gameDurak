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
  //The deck is shuffled, and each player receives six cards.
  this.deck._creatDeck();
  this.deck._shuffleDeck();
  this.deck._shuffleDeck();
  this.player1._receiveCards(this.deck._cardsToBeReceived(6));
  this.player2._receiveCards(this.deck._cardsToBeReceived(6));

  if(this.player1.cards){
    this.attacker = this.player1;
  } else {
    this.attacker = this.player2;
  }
  /*The bottom card of the remaining deck is laid open on the table.
  This determines the trump suit. The remainder of the deck is then placed
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
