function GameDurak(num) {
  this.deck = new Deck();//cards, trump, remainderDeck
  this.numberOfPlayers = num;
  this.player1 = new Player("Incognito1");
  this.player2 = new Player("Incognito2");
  this.gameOver = false;
}

GameDurak.prototype.startGame = function () {
  //The deck is shuffled, and each player receives six cards.
  this.deck._creatDeck();
  this.deck._shuffleDeck();
  /*The bottom card of the remaining deck is laid open on the table.
  This determines the trump suit. The remainder of the deck is then placed
   on top of the revealed card at a 90 degree angle, so that it remains visible,
    forming a draw pile called the prikup ("talon").
    The revealed card remains part of the talon and is drawn as the last card.
    Cards discarded due to successful defenses are placed in a discard pile
    next to the talon.*/

};
