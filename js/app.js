var game = new GameDurak();

$(document).ready(function(){
  $("#start-game").click(function(){
    $("#start-game").hide();
    game.startGame(2);
    $('#trump').replaceWith(game.deck.lastCard.html);
    $('#talon, #pile').addClass('card hide-card');////need improvement
    restartCards();
  });

  function restartCards(){
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
  }




///Show/Hide Cards

function ShowHidePlayer0() {
  game.players[0].cards.forEach(function(el,j){
    $("#p0c"+j+" > section").toggleClass("hide-card");
  });
}

function ShowHidePlayer1() {
  game.players[1].cards.forEach(function(el,j){
    $("#p1c"+j+" > section").toggleClass("hide-card");
  });
}

  $("#btn-p0").click(ShowHidePlayer0);

  $("#btn-p1").click(ShowHidePlayer1);

  ///TODO attack vs defense
  $("#p1cards").click(function(event) {
    var cardId = event.target.id;
    console.log(event.target);
    var arr = cardId.split("-");
    var card = _.filter(game.players[1].cards, function(c){return (c.rank === arr[0] && c.suit === arr[1]);});
    //console.log(card);
    if(game.players[1].isAttacker && game.canAttack){
      game.players[1].attack(card[0], game.currPlayedCards);
      $(event.target).detach();
      // $(event.target).parent().detach();
      // $(event.target).parent().appendTo("#p1cards");
      $(event.target).appendTo("#attCard");
      restartCards();
      // ShowHidePlayer1();
      $("#btn-p1").addClass("hide");
      $("#btn-p0").removeClass("hide");

    }
    if(game.players[1].isDefender && game.canAttack){
      game.players[1].defense(card[0], game.currPlayedCards[0][(game.currPlayedCards[0].length-1)]);
      $(event.target).detach();
      // $(event.target).parent().detach();
      // $(event.target).parent().appendTo("#p1cards");
      $(event.target).appendTo("#defCard");
      restartCards();
      // ShowHidePlayer1();
      $("#btn-p1").addClass("hide");
      $("#btn-p0").removeClass("hide");
    }
  });

  $("#p0cards").click(function(event) {
    var cardId = event.target.id;
    console.log(event.target);

    var arr = cardId.split("-");
    var card = _.filter(game.players[0].cards, function(c){return (c.rank === arr[0] && c.suit === arr[1]);});
    //console.log(card);
    if(game.players[0].isAttacker && game.canAttack){
      game.players[0].attack(card[0], game.currPlayedCards);
      $(event.target).detach();
      // $(event.target).parent().detach();
      // $(event.target).parent().appendTo("#p0cards");
      $(event.target).appendTo("#attCard");
      restartCards();
      // ShowHidePlayer0();
      $("#btn-p0").addClass("hide");
      $("#btn-p1").removeClass("hide");
    }
    if(game.players[0].isDefender && game.canAttack){
      game.players[0].defense(card[0], game.currPlayedCards[0][game.currPlayedCards[0].length-1]);
      $(event.target).detach();
      // $(event.target).parent().detach();
      // $(event.target).parent().appendTo("#p0cards");
      $(event.target).appendTo("#defCard");
      restartCards();
      // ShowHidePlayer0();
      $("#btn-p0").addClass("hide");
      $("#btn-p1").removeClass("hide");
    }
  });





});
