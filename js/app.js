var game = new GameDurak();

$(document).ready(function(){
  $("#start-game").click(function(){
    $("#start-game").hide();
    game.startGame(2);
    $('#trump').replaceWith(game.deck.lastCard.html);
    $('#talon, #pile').addClass('card hide-card');////need improvement
    game.players.forEach(function(p,i){
      $("#p"+i).text(p.name);
      if(p.isAttacker){
        $("#role"+i).text("Attacker");
        $("#btn-p"+i).removeClass("hide");
      }
      if(p.isDefender){
        $("#role"+i).text("Defender");
      }
      p.cards.forEach(function(el,j){
        $("#p"+i+"c"+j).html(el.html);
        $("#p"+i+"c"+j+" > section").addClass("hide-card");
      });
    });
  });


///Show/Hide Cards
  $("#btn-p0").click(function() {
    game.players[0].cards.forEach(function(el,j){
      $("#p0c"+j+" > section").toggleClass("hide-card");
    });
  });

  $("#btn-p1").click(function() {
    game.players[1].cards.forEach(function(el,j){
      $("#p1c"+j+" > section").toggleClass("hide-card");
    });
  });

  ///TODO attack vs defence
  $( "#p1cards, #p0cards" ).click(function() {
    
  });





});
