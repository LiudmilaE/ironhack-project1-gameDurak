function Card (rank, suit) {
    this.rank = rank;
    this.suit = suit;
}
// a deck of 36 cards
//The bottom card of the remaining deck is laid open on the table.
//This determines the trump suit.
function Deck(){
  this.cards = [];
  this.trump = "Diamonds";
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
  that.cards = shuffledDeck;
};
