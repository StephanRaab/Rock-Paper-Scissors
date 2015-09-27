//Rotate the dotted circles
$(".dottedCircle").mouseenter(function() {
  $(this).addClass('rotateCircleIn');
});
$(".dottedCircle").mouseenter(function() {
  $(this).removeClass('rotateCircleOut');
});

$(".dottedCircle").mouseleave(function() {
  $(this).addClass('rotateCircleOut');
});
$(".dottedCircle").mouseleave(function() {
  $(this).removeClass('rotateCircleIn');
});

//Image static on rotation
$(".dottedCircle").mouseenter(function() {
  $(this).children().addClass('rotateChildIn');
});
$(".dottedCircle").mouseenter(function() {
  $(this).children().removeClass('rotateChildOut');
});

$(".dottedCircle").mouseleave(function() {
  $(this).children().removeClass('rotateChildIn');
});
$(".dottedCircle").mouseleave(function() {
  $(this).children().addClass('rotateChildOut');
});

//defining the userchoice variable for later use
var userChoice;

//function called computermath which uses math random to determine the computer's choice
function computerMath(){
    var computerRandom = Math.random();

    if (computerRandom < 0.34) {
        computerRandom = "rock";
    } else if (computerRandom <= 0.67) {
        computerRandom = "paper";
    } else {
        computerRandom = "scissors";
    }
    return computerRandom;
}


//here we're equalling the computer math FUNCTION from earlier  to a new VARIABLE
var computerChoice = computerMath();

//hide losing text
//hide tied text
//show winning text
//add one to our wincounter
function win(){
    $('.losingText').hide();
    $('.tiedText').hide();
    $('.winningText').show();
    $('.computerChoiceTextContainer').show();
    winCounter++;
    $("#winCounter").html(winCounter);
}

//hide winning text
//hide tied text
//show losing text
//add one to losecounter
function lose(){
    $('.winningText').hide();
    $('.tiedText').hide();
    $('.losingText').show();
    $('.computerChoiceTextContainer').show();
    loseCounter++;
    $("#loseCounter").html(loseCounter);
}

function showComputerPicked() {
    $('#computerChoiceText').html(computerChoice);
}

function computerPickedColor() {
  $('#computerChoiceText').removeClass('rockColor paperColor scissorsColor')
    if (computerChoice === "rock") {
      $('#computerChoiceText').addClass('rockColor');
    } else if (computerChoice === 'paper') {
      $('#computerChoiceText').addClass('paperColor');
    } else {
      $('#computerChoiceText').addClass('scissorsColor');
    }
}

//show tied text
//hide winning text
//hide losing text
function tied(){
    $('.winningText').hide();
    $('.losingText').hide();
    $(".tiedText").show();
    $('.computerChoiceTextContainer').show();
}

//run function called battle
function battle(){

//if userchoice equals computer choice show the tiedText
    if (userChoice === computerChoice) {
        tied();
          return;
    }

//if user picks rock and computer picks scissors
//if user picks paper and computer picks rock
//if user picks scissors and computer picks paper
//then run the win function
//otherwise, run the lose function
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice ==="rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
       ) {
        win();
    } else {
        lose();
    }
};

//set winCounter, LoseCounter to zero
// set winning text and losing text to their variables
var winCounter = 0;
var loseCounter = 0;
var winningText = (".winningText");
var losingText = ("losingText");

//on click run function
//userChoice equals this id that you pressed
//run battle function
//run new computerMath
$("button").click(function(){
    computerChoice = computerMath();
    userChoice = $(this).prop('id');
    battle();
    showComputerPicked();
    computerPickedColor();
});
