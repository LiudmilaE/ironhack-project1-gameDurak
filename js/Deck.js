function Card (rank, suit , strength) {
    this.rank = rank;
    this.suit = suit;
    this.isTrump = false;
    this.strength = strength; ///from 0=weakest to 8=strongest
}

// a deck of 36 cards
// Ace is the highest rank and six is the lowest.
// Trumps always beat non-trump cards regardless of rank
// (e.g., a trump six beats a non-trump ace).
function Deck(){
  this.cards = [];
  this.talon = [];//remainderDeck - so called prikup
  this.receivedCards = [];///use to control start
  this.discardPile = [];
  this.trumpSuit = "diams"; //default
  this.lastCard = {}; /*The bottom card of the remaining deck is laid open on the table.
  This determines the trump suit.*/
}

 Deck.prototype._creatDeck = function () {
   var that = this;
  var newDeck =[];
  var ranks =["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  //in rank array index=j will show the strength of card
  var suits = ["clubs", "diams", "hearts", "spades"]; ///as in html // <!--&hearts; &spades; &clubs; or &diams-->
  var i, j, index=0;
    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < ranks.length; j++) {
            newDeck[index] = new Card(ranks[j], suits[i], j);
            index++;
        }
    }
    // <!--&hearts; &spades; &clubs; or &diams-->
    _.forEach(newDeck, function(c) {
      var color = c.suit==='diams' || c.suit==='hearts'? 'red' : 'black';
      c.html = '<section class="card '+color+'" id="'+c.rank+"-"+c.suit+'"><p class="top"><span>'+c.rank+
      '<br> &'+c.suit+';</span></p><h2>&'+c.suit+';</h2><p class="bottom"><span> &'+c.suit+';</span><span> '+c.rank+'</span></p></section>';
    });
    that.cards = newDeck;
};


Deck.prototype._shuffleDeck = function () {
  var that = this;
  var shuffledDeck = _.shuffle(that.cards);
      shuffledDeck = _.shuffle(that.cards);

  // The bottom card of the remaining deck is laid open on the table.
  // This determines the trump suit.
  that.lastCard =  shuffledDeck[shuffledDeck.length-1];
  that.trumpSuit = that.lastCard.suit;

 // function to mark in each card property isTrump false or true
  shuffledDeck.forEach(function(card){
    card.isTrump = card.suit===that.trumpSuit ? true : false;
    });

  that.cards = shuffledDeck;
  that.talon = _.map(shuffledDeck);
};


Deck.prototype._cardsToBeReceived = function (num) {
  if(this.talon.length <= num){
    return this.talon;
  }
 var newCards = _.take(this.talon, num);
 this.talon = _.slice(this.talon, num);
 return newCards;
};
