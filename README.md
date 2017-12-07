![](https://i.imgur.com/1QgrNNw.png)
# Ironhack | Project 1 | Game Durak

##Introduction
---

This is a repo to practice in creating working game in browser as my first project during Ironhack Bootcamp

####DURAK 

(Russian: Дурак; IPA: [dʊˈrak] (About this sound listen), "fool") is a card game that is popular in post-Soviet states.
The object of the game is to get rid of all one's cards. At the end of the game, the last player with cards in his or her hands is the durak.

##Used technologies
---
-JavaScript ES5
-HTML5
-CSS3
-Bootstrap
-jQuery
-Lodash

##Personal Opinion
---
Фt first I was planning to make a game version with a computer, but it turned out to be much more complicated than I expected for a one-week timeframe. 
In the end I created a working version of the game, but it only works if the players do not cheat. And definitely it is not bug-free.

###Deployed on [GitHub pages](https://liudmilae.github.io/ironhack-project1-gameDurak/)

##Game Rules
---

-Two players
-A deck of 36 cards

1.The deck is shuffled
2.Each player receives 6 cards
3.The bottom card of the remaining deck determines the trump suit
4.The remainder of the deck forms a draw pile called the prikup ("talon") 
5.Cards discarded due to successful defenses are placed in a discard pile next to the talon
6.Ace is the highest rank and six is the lowest 7.Trumps always beat non-trump cards regardless of rank (e.g., a trump six beats a non-trump ace)

####Gameplay
The player with the lowest trump is the first attacker. The player to the attacker's left is always the defender.
If the attack succeeds (see below), the defender loses his or her turn and must continue the defense, while the attacker can continue with next attack. If the attack fails, the defender becomes the next attacker.

####Attack
The attacker opens the turn by playing one card face up on the table as an attacking card.
The defender has to immediately attempt defense in response to the initial attack.

####Defense
The defender attempts to beat the attacking cards by playing higher-valued defending cards.
One card is played to defend against each attacking card, and it must be in the attacking card's suit or the trump suit.
At any point during a defense, the attacker can add extra attacking cards, provided that for each new attacking card, there is already a card of the same rank on the table (either defending or attacking), and the total number of attacking cards does not exceed the number of cards in the defender's hand. The defender must also defend against these new cards.

At any point during the turn, a defender unwilling or unable to beat all attacking cards may abandon the defense by picking up all the cards on the table. This ends the turn. The failed defender loses his or her turn to attack.
If, however, the defender has beaten all attacking cards, and attacker is not willing or able to add more, the defender has triumphed.
The turn ends, all cards on the table are placed in the discard pile, and the successful defender opens the next turn as the new attacker.
No players may examine the discard pile at any point.

####End of turn
At the end of each turn, whether or not the defense was successful, each player draws until they have six cards in their hand or the talon is exhausted. The attacker draws as many cards as necessary first, followed by the defender. Once the talon is empty, play continues without further drawing.

####Winning and Losing
Player who exhausts his or her cards is a winner.
The last person left with cards is the loser (the fool or "durak").


More information on [wikipedia](https://en.wikipedia.org/wiki/Durak)
