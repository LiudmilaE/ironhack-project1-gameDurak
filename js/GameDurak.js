function GameDurak() {
  this.deck = new Deck();
  this.player1 = new Player();
  this.player2 = new Player();
  this.gameOver = false;
}

GameDurak.prototype.startGame = function () {
  //The deck is shuffled, and each player receives six cards.
  this.deck._creatDeck();
  this.deck._shuffleDeck();
  console.log(this);




};
