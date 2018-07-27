var computerScore = 0;
var playerScore = 0;
var roundsPlayed = 0;

function computerPlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a draw!";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a draw!";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a draw!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playRound() {
    var x = prompt("Enter player selection (rock, paper, or scissors)");
    var y = prompt("Enter computer selection (rock, paper, or scissors)");
    console.log(computerPlay(x, y));
    console.log(`Current score is Player: ${playerScore} Computer ${computerScore}`)
    roundsPlayed++;
}

while (roundsPlayed < 5) {
    playRound();
}
if (playerScore > computerScore) {
    console.log(`You won after ${roundsPlayed} rounds played. The score was ${playerScore} to ${computerScore}`);
}
else if (playerScore > computerScore) {
    console.log(`You lost after ${roundsPlayed} rounds played. The score was ${playerScore} to ${computerScore}`);
}