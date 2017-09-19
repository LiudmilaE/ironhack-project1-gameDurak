function GameDurak() {
  this.deck = new Deck();//cards, talon, trump, lastCard
  this.players = [];
  this.gameOver = false;
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
  // The player to the attacker's left is always the defender.
 function isFirstAttackerVsDefender(players){
   var lowestTrumps = [];
   players.forEach(function(p){
      var lowT = _.minBy(p.cardsTrump, function(c) { return c.strength; });
      if (lowT===undefined){
        lowestTrumps.push(100);//that is more than valid strength's values -> from 0 to 8
      } else {
        lowestTrumps.push(lowT);
      }
   });
   console.log (lowestTrumps);
   if (_.every(lowestTrumps, 100)){
     console.log("Is not possible to start the game, because no one received any trump!!!");
   } else{
   var attackerIndex = _.indexOf(lowestTrumps, _.minBy(lowestTrumps,function(c) { return c.strength; }));
   that.players[attackerIndex].isAttacker = true;
   that.nextPlayerToTheLeft(attackerIndex).isDefender = true;
  }
 }

 isFirstAttacker(that.players);

  /*The remainder of the deck is then placed
   on top of the revealed card at a 90 degree angle, so that it remains visible,
    forming a draw pile called the prikup ("talon").
    The revealed card remains part of the talon and is drawn as the last card.
    Cards discarded due to successful defenses are placed in a discard pile
    next to the talon.*/
};
/////////////////////////end of startGame method

GameDurak.prototype.nextPlayerToTheLeft = function(index) {
  if(index===(this.players.length-1)) {
    return this.players[0];
  } else {
    return this.players[index+1];
  }
};

GameDurak.prototype.changeTurn = function () {
  /*After each turn play proceeds clockwise.
  If the attack succeeds, the defender loses their turn
  and the attack passes to the player on the defender's left.
  If the attack fails, the defender becomes the next attacker.*/


};

GameDurak.prototype.isGameOver = function () {

};
