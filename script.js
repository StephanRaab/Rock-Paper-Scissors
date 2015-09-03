//clears the console
console.clear();

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
    console.log("computer chose " + computerRandom);
    return computerRandom;
}


//here we're equalling the computer math FUNCTION from earlier  to a new VARIABLE
var computerChoice = computerMath();

//hide losing text
//show winning text
//add one to our wincounter
function win(){
    $('.losingText').hide();
    $('.winningText').show();
    winCounter++;
    $("#winCounter").html(winCounter);
}

//hide winning text
//show losing text
//add one to losecounter
function lose(){
    $('.winningText').hide();
    $('.losingText').show();
    loseCounter++;
    $("#loseCounter").html(loseCounter);
}

//show tied text
//hide winning text
//hide losing text
function tied(){
    $('.winningText').hide();
    $('.losingText').hide();
    $(".tiedText").show();
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
    userChoice = $(this).prop('id');
    battle();
    computerMath();
});
