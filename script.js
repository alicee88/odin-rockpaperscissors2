function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Oh dear, computerPlay is returning the wrong thing";
    }
}

function playRound(playerSelection, computerSelection) {
    const endState = {
        endString: "It's a draw!",
        winner: ""
    };

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            endState.endString = "You lose! Paper beats Rock!";
            endState.winner = "computer";
        }
        else if (computerSelection === "scissors") {
            endState.endString = "You win! Rock beats Scissors!";
            endState.winner = "player";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            endState.endString = "You win! Paper beats Rock!";
            endState.winner = "player";
        }
        else if (computerSelection === "scissors") {
            endState.endString = "You lose! Scissors beats Paper!";
            endState.winner = "computer";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            endState.endString = "You lose! Rock beats Scissors!";
            endState.winner = "computer";
        }
        else if (computerSelection === "paper") {
            endState.endString = "You win! Scissors beats Paper!";
            endState.winner = "player";
        }
    }
    return endState;
}

function game() {
    let computerWins = 0;
    let playerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerGuess = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const computerGuess = computerPlay();
        const roundResult = playRound(playerGuess, computerGuess);
        console.log(roundResult.endString);
        if (roundResult.winner === "player") playerWins++;
        if (roundResult.winner === "computer") computerWins++;
    }
    console.log(`FINAL SCORE: You won ${playerWins}, I won ${computerWins}.`);
    if (playerWins > computerWins)
        console.log("You won the most games, well done!");
    else if (playerWins < computerWins)
        console.log("I won the most games, yay me!");
    else
        console.log("It was a draw, how boring.");
}

//game();