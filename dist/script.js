function computerMath(){var e=Math.random();return e=.34>e?"rock":.67>=e?"paper":"scissors"}function win(){$(".losingText").hide(),$(".tiedText").hide(),$(".winningText").show(),$(".computerChoiceTextContainer").show(),winCounter++,$("#winCounter").html(winCounter)}function lose(){$(".winningText").hide(),$(".tiedText").hide(),$(".losingText").show(),$(".computerChoiceTextContainer").show(),loseCounter++,$("#loseCounter").html(loseCounter)}function showComputerPicked(){$("#computerChoiceText").html(computerChoice)}function computerPickedColor(){$("#computerChoiceText").removeClass("rockColor paperColor scissorsColor"),"rock"===computerChoice?$("#computerChoiceText").addClass("rockColor"):"paper"===computerChoice?$("#computerChoiceText").addClass("paperColor"):$("#computerChoiceText").addClass("scissorsColor")}function tied(){$(".winningText").hide(),$(".losingText").hide(),$(".tiedText").show(),$(".computerChoiceTextContainer").show()}function battle(){return userChoice===computerChoice?void tied():void("rock"===userChoice&&"scissors"===computerChoice||"paper"===userChoice&&"rock"===computerChoice||"scissors"===userChoice&&"paper"===computerChoice?win():lose())}$(".dottedCircle").mouseenter(function(){$(this).addClass("rotateCircleIn")}),$(".dottedCircle").mouseenter(function(){$(this).removeClass("rotateCircleOut")}),$(".dottedCircle").mouseleave(function(){$(this).addClass("rotateCircleOut")}),$(".dottedCircle").mouseleave(function(){$(this).removeClass("rotateCircleIn")}),$(".dottedCircle").mouseenter(function(){$(this).children().addClass("rotateChildIn")}),$(".dottedCircle").mouseenter(function(){$(this).children().removeClass("rotateChildOut")}),$(".dottedCircle").mouseleave(function(){$(this).children().removeClass("rotateChildIn")}),$(".dottedCircle").mouseleave(function(){$(this).children().addClass("rotateChildOut")});var userChoice,computerChoice=computerMath(),winCounter=0,loseCounter=0,winningText=".winningText",losingText="losingText";$("button").click(function(){computerChoice=computerMath(),userChoice=$(this).prop("id"),battle(),showComputerPicked(),computerPickedColor()});