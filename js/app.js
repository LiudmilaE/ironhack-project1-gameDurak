var game = new GameDurak();

$(document).ready(function(){
  $( "#start-game" ).click(function(){
    game.startGame(2);
    $('#trump').replaceWith(game.deck.lastCard.html);
  });
  // show trump game.deck.lastCard




});
