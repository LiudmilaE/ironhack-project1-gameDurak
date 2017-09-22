var game = new GameDurak();

$(document).ready(function(){

  $("#start-game").click(function(){
    $("#start-game").hide();
    $("#btn-dpile").removeClass("hide");
    game.startGame(2);
    $("#p1").text(game.players[1].name);
    $("#p0").text(game.players[0].name);
    changeRoles();
    $('#trump').replaceWith(game.deck.lastCard.html);
    $('#talon, #pile').addClass('card hide-card');////need improvement
    restartCards();
  });


//btn "Take" when defense is failed
   $("#btn-p0-take").click(function(){
     var allcards = _.flatten(game.currPlayedCards);
     game.players[0].cards = _.concat(game.players[0].cards, allcards);
     game.currPlayedCards = [[],[]];
     $("#defCard, #attCard").html("");
     ///don't need to change roles!
     //draw cards - receive cards -change turn
     //game.changeTurn();
     //changeRoles();
     game.drawCards();
     //hide cards
     restartCards();
   });

   $("#btn-p1-take").click(function(){
     var allcards = _.flatten(game.currPlayedCards);
     game.players[1].cards = _.concat(game.players[1].cards, allcards);
     game.currPlayedCards = [[],[]];
     for(var i = 0; i<6; i++){
       $("#attCard"+i+", #defCard"+i).html("");////TODO
     }
     ///don't need to change roles!
     //draw cards - receive cards -change turn
     //game.changeTurn();
     //changeRoles();
     game.drawCards();
     //hide cards
     restartCards();
   });



//TODO fix when we can see this button
    $("#btn-dpile").click(function(){
      game.isDefenceSucceded = true;
      var numCardsToDraw = game.currPlayedCards[0].length;
      var allcards = _.flatten(game.currPlayedCards);
      game.discardPile = _.concat(game.discardPile, allcards);
      game.currPlayedCards = [[],[]];
      for(var i = 0; i<6; i++){
        $("#attCard"+i+", #defCard"+i).html("");////TODO
      }
      //draw cards - receive cards -change turn
      game.changeTurn();
      changeRoles();
      game.drawCards();
      //hide cards
      restartCards();
    });

    function changeRoles(){
    game.players.forEach(function(p,i){
      if(p.isAttacker){
        $("#role"+i).text("Attacker");
        $("#btn-p"+i).removeClass("hide");
      }
      if(p.isDefender){
        $("#role"+i).text("Defender");
        $("#btn-p"+i).addClass("hide");
      }
    });
  }

  function restartCards(){
    $("#p0cards > div").html("");
    $("#p1cards > div").html("");
    game.players.forEach(function(p,i){
      if(p.isAttacker){
        $("#btn-p"+i).removeClass("hide");
      }
      if(p.isDefender){
        $("#btn-p"+i).addClass("hide");
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
  //player 2 click events
  $("#p1cards").click(function(event) {
    var cardId = event.target.id;
    // console.log(event.target);
    var arr = cardId.split("-");
    var card = _.filter(game.players[1].cards, function(c){return (c.rank === arr[0] && c.suit === arr[1]);});
    //console.log(card);
    if(game.players[1].isAttacker && game.canAttack){
      var legalAttack =  game.players[1].attack(card[0], game.currPlayedCards);
      var indexToAddAttCard = game.currPlayedCards[0].length;
      game.currPlayedCards[0] = _.concat(game.currPlayedCards[0], legalAttack);
      $(event.target).detach();
      $(event.target).appendTo("#attCard"+indexToAddAttCard);
      $("#p1cards > div:last-child").html("");
      restartCards();
      $("#btn-p1").addClass("hide");
      $("#btn-p0, #btn-p0-take").removeClass("hide");
    }

    if(game.players[1].isDefender && game.canAttack){
      var legalDef = game.players[1].defense(card[0], game.currPlayedCards[0][(game.currPlayedCards[0].length-1)]);
      var indexToAddDefCard = game.currPlayedCards[1].length;
      game.currPlayedCards[1] = _.concat(game.currPlayedCards[1], legalDef);
      $(event.target).detach();
      $(event.target).appendTo("#defCard"+indexToAddDefCard);
      $("#p1cards > div:last-child").html("");
      restartCards();
      $("#btn-p1, #btn-p1-take").addClass("hide");
      $("#btn-p0").removeClass("hide");
    }
  });


//player1 click events
  $("#p0cards").click(function(event) {
    var cardId = event.target.id;
    // console.log(event.target);
    var arr = cardId.split("-");
    var card = _.filter(game.players[0].cards, function(c){return (c.rank === arr[0] && c.suit === arr[1]);});
    //console.log(card);
    if(game.players[0].isAttacker && game.canAttack){
      var legalAttack = game.players[0].attack(card[0], game.currPlayedCards);
      var indexToAddAttCard = game.currPlayedCards[0].length;
      game.currPlayedCards[0] = _.concat(game.currPlayedCards[0], legalAttack);
      $(event.target).detach();
      $(event.target).appendTo("#attCard"+indexToAddAttCard);
      $("#p0cards > div:last-child").html("");
      restartCards();
      $("#btn-p0").addClass("hide");
      $("#btn-p1, #btn-p1-take").removeClass("hide");
    }

    if(game.players[0].isDefender && game.canAttack){
      var legalDef = game.players[0].defense(card[0], game.currPlayedCards[0][game.currPlayedCards[0].length-1]);
      var indexToAddDefCard = game.currPlayedCards[1].length;
      game.currPlayedCards[1] = _.concat(game.currPlayedCards[1], legalDef);
      $(event.target).detach();
      $(event.target).appendTo("#defCard"+indexToAddDefCard);
      $("#p0cards > div:last-child").html("");
      restartCards();
      $("#btn-p0, #btn-p0-take").addClass("hide");
      $("#btn-p1").removeClass("hide");
    }
  });





});
