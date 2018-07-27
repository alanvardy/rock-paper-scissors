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
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

var x = prompt("Enter player selection (rock, paper, or scissors)");
var y = prompt("Enter computer selection (rock, paper, or scissors)");

console.log(computerPlay(x, y));