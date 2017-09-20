function GameDurak() {
  this.deck = new Deck();//cards, talon, trump, lastCard
  this.players = [];
  this.gameOver = false;
  //change each turn //use _.flatten(array)
  this.currPlayedCards = [[],  //cards to attack
                               []]; //cards to defend

}

//The game is typically played with two to five people (because of recieve method of 6 cards)
// In theory the limit for a game with one deck of 36 cards is six players,
// but this gives a considerable advantage to the player who attacks first,
// and a considerable disadvantage to the player who defends first.
GameDurak.prototype.startGame = function (numberOfPlayers) {
  if (numberOfPlayers>5) {
    numberOfPlayers=5;
    console.log("Maximum only 5 players!!!");
  }
  var that=this;//GameDurak instance
  //The deck is shuffled, and each player receives six cards.
  this.deck._creatDeck();
  this.deck._shuffleDeck();
  for (var p=1; p<= numberOfPlayers; p++){
    var player = new Player("Incognito"+p);
    that.players.push(player);
  }
  that.players.forEach(function(el){
    var cards = that.deck._cardsToBeReceived(6);
    that.deck.receivedCards = _.concat(that.deck.receivedCards, cards);
    el._receiveCards(cards);
  });

  ////possible to start only if at least one player has one trump
    //that.deck.receivedCards = _.slice(that.deck.cards,0, numberOfPlayers*6);
    var checkTrump = _.filter(that.deck.receivedCards, function(card) { return card.isTrump; });
    if (checkTrump.length>0){
      isFirstAttackerVsDefender(that.players);
    } else {
      console.log("Not possible to start game. Nobody can attack. Try to start game again!");
    }
  ///////////////////////

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
     //console.log (lowestTrumps);
     if (_.every(lowestTrumps, 100)){
       console.log("Is not possible to start the game, because no one received any trump!!!");
       return;
     } else{
     var attackerIndex = _.indexOf(lowestTrumps, _.minBy(lowestTrumps,function(c) { return c.strength; }));
     that.players[attackerIndex].isAttacker = true;
     that.nextPlayerToTheLeft(attackerIndex).isDefender = true;
    }
 }
};
/////////////////////////end of startGame method

/*The remainder of the deck is then placed
 on top of the revealed card at a 90 degree angle, so that it remains visible,
  forming a draw pile called the prikup ("talon").
  The revealed card remains part of the talon and is drawn as the last card.
  Cards discarded due to successful defenses are placed in a discard pile
  next to the talon.*/

GameDurak.prototype.nextPlayerToTheLeft = function(index) {
  if(index===(this.players.length-1)) {
    return this.players[0];
  } else {
    return this.players[index+1];
  }
};

//TODO
GameDurak.prototype.gamePlayTurn = function () {
  var that=this;
  var attInd = _.findIndex(that.players, 'isAttacker');
  var attacker = that.players[attInd];
  var cardIndex; ///where to take index???? event onclick
  // function chosedCard(card) {
  //   return card;
  // }

  that.currPlayedCards[0] = attacker.attack(attacker.cards[cardIndex], that.currPlayedCards);
  //game.currPlayedCards[0] = game.players[0].attack(game.players[0].cards[1], game.currPlayedCards[0]);
  var defInd = _.findIndex(that.players, 'isDefender');
  var defender = that.players[defInd];
  var defendedCard = defender.defend(defCard, _.last(this.currPlayedCards[0]));
  if (defendedCard){
    that.currPlayedCards[1].push(defendedCard);
  }


  // At any point during a defense, all players other than the defender can add extra attacking cards,
  // provided that for each new attacking card, there is already a card of the same rank on the table (either defending or attacking),
  //  and the total number of attacking cards does not exceed the number of cards in the defender's hand.
  //  The defender must also defend against these new cards.
  //  If at any point multiple players wish to add cards simultaneously, the first attacker has first priority,
  //   then the player to defender's left, and so forth clockwise.
  // This variant of game durak only allows cards to be added to the attack once the first defending card has been played.
};

GameDurak.prototype.changeTurn = function () {
  /*After each turn play proceeds clockwise.
  If the attack succeeds, the defender loses their turn
  and the attack passes to the player on the defender's left.
  If the attack fails, the defender becomes the next attacker.*/


};

GameDurak.prototype.isGameOver = function () {

};
