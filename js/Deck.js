function Card (rank, suit) {
    this.rank = rank;
    this.suit = suit;
}

function Deck(){
  this.cards = [];
  this.trump = "Diamonds";
}


 Deck.prototype.creatDeck = function () {
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
    this.trump = _.sample(suits,1);
    this.cards = newDeck;
};

Deck.prototype.shuffleDeck = function () {
  this.deck=_.shuffle(this.deck);
};
