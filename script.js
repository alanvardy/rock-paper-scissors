var computerScore = 0;
var playerScore = 0;
var roundsPlayed = 0;

var choice = document.querySelectorAll(".choice");
var reset = document.querySelector("#reset");
var result = document.querySelector("#result");

choice.forEach(function(e) {
    e.addEventListener('click', function() {
        playerSelection = this.textContent;
        printScore(computerPlay(this.textContent));
    })
})

reset.addEventListener('click', function() {
    computerScore = 0;
    playerScore = 0;
    roundsPlayed = 0;
    result.textContent = "";
})

function printScore(text) {
    result.innerHTML = text + "<br> Player Score: " + playerScore +
        "<br> Computer Score: " + computerScore +
        "<br> Rounds played: " + roundsPlayed;
}

function computerPlay(playerSelection) {
    var computerSelection = "Rock";
    roundsPlayed++;
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        return `It's a draw! The score is ${playerScore} to ${computerScore}`;
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "It's a draw!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "It's a draw!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}