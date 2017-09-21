var game = new GameDurak();

$(document).ready(function(){
  $("#start-game").click(function(){
    $("#start-game").hide();
    //$("#btn-dpile").removeClass("hide");
    game.startGame(2);
    $('#trump').replaceWith(game.deck.lastCard.html);
    $('#talon, #pile').addClass('card hide-card');////need improvement
    restartCards();
  });

    $("#btn-dpile").click(function(){
      var allcards = _.flatten(game.currPlayedCards);
      game.discardPile = _.concat(game.discardPile, allcards);
    });

  function restartCards(){
    game.players.forEach(function(p,i){
      $("#p"+i).text(p.name);
      if(p.isAttacker){
        $("#role"+i).text("Attacker");
        $("#btn-p"+i+", #btn-p"+i+"-take").removeClass("hide");
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

///Show/Hide Cards Buttons
  $("#btn-p0").click(function ShowHidePlayer0() {
    game.players[0].cards.forEach(function(el,j){
      $("#p0c"+j+" > section").toggleClass("hide-card");
    });
  });
  $("#btn-p1").click(function ShowHidePlayer1() {
    game.players[1].cards.forEach(function(el,j){
      $("#p1c"+j+" > section").toggleClass("hide-card");
    });
  });


  ///TODO attack vs defense
  //player 2
  $("#p1cards").click(function(event) {
    var cardId = event.target.id;
    // console.log(event.target);
    var arr = cardId.split("-");
    var card = _.filter(game.players[1].cards, function(c){return (c.rank === arr[0] && c.suit === arr[1]);});
    //console.log(card);
    if(game.players[1].isAttacker && game.canAttack){
      $("#btn-dpile").removeClass("hide");
      var legalAttack =  game.players[1].attack(card[0], game.currPlayedCards);
      game.currPlayedCards[0] = _.concat(game.currPlayedCards[0], legalAttack);
      $(event.target).detach();

      $(event.target).appendTo("#attCard");
      $("#p1cards > div:last-child").html("");
      restartCards();
      // ShowHidePlayer1();
      $("#btn-p1").addClass("hide");
      $("#btn-p0").removeClass("hide");
      $("#btn-dpile").addClass("hide");
    }

    if(game.players[1].isDefender && game.canAttack){
      var legalDef = game.players[1].defense(card[0], game.currPlayedCards[0][(game.currPlayedCards[0].length-1)]);
      game.currPlayedCards[1] = _.concat(game.currPlayedCards[1], legalDef);
      $(event.target).detach();

      $(event.target).appendTo("#defCard");
      $("#p1cards > div:last-child").html("");
      restartCards();
      // ShowHidePlayer1();
      $("#btn-p1").addClass("hide");
      $("#btn-p0").removeClass("hide");
    }
  });


//player1
  $("#p0cards").click(function(event) {
    var cardId = event.target.id;
    // console.log(event.target);
    var arr = cardId.split("-");
    var card = _.filter(game.players[0].cards, function(c){return (c.rank === arr[0] && c.suit === arr[1]);});
    //console.log(card);
    if(game.players[0].isAttacker && game.canAttack){
      $("#btn-dpile").removeClass("hide");
      var legalAttack = game.players[0].attack(card[0], game.currPlayedCards);
      game.currPlayedCards[0] = _.concat(game.currPlayedCards[0], legalAttack);
      $(event.target).detach();
      $(event.target).appendTo("#attCard");
      $("#p0cards > div:last-child").html("");
      restartCards();
      // ShowHidePlayer0();
      $("#btn-p0").addClass("hide");
      $("#btn-p1").removeClass("hide");
      $("#btn-dpile").addClass("hide");
    }

    if(game.players[0].isDefender && game.canAttack){
      var legalDef = game.players[0].defense(card[0], game.currPlayedCards[0][game.currPlayedCards[0].length-1]);
      game.currPlayedCards[1] = _.concat(game.currPlayedCards[1], legalDef);
      $(event.target).detach();
      $(event.target).appendTo("#defCard");
      $("#p0cards > div:last-child").html("");
      restartCards();
      // ShowHidePlayer0();
      $("#btn-p0").addClass("hide");
      $("#btn-p1").removeClass("hide");
    }
  });





});
