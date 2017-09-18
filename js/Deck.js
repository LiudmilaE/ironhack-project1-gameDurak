function Card (rank, suit) {
    this.rank = rank;
    this.suit = suit;
}

// a deck of 36 cards
// Ace is the highest rank and six is the lowest.
// Trumps always beat non-trump cards regardless of rank
// (e.g., a trump six beats a non-trump ace).
function Deck(){
  this.cards = [];
  this.talon = [];//remainderDeck - so called prikup
  this.discardPile = [];
  this.trump = "Diamonds";
  this.lastCard = {}; /*The bottom card of the remaining deck is laid open on the table.
  This determines the trump suit.*/
}

 Deck.prototype._creatDeck = function () {
   var that = this;
  var newDeck =[];
  var ranks =["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var i, j, index=0;
    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < ranks.length; j++) {
            newDeck[index] = new Card(ranks[j], suits[i]);
            index++;
        }
    }
    that.trump = _.sample(suits,1);
    that.cards = newDeck;
};

Deck.prototype._shuffleDeck = function () {
  var that = this;
  var shuffledDeck = _.shuffle(this.cards);
  that.trump = shuffledDeck[shuffledDeck.length-1].suit;
  that.lastCard =  shuffledDeck[shuffledDeck.length-1];
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
