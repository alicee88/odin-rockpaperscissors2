const playerButtons = document.querySelectorAll('.player');
const computerButtons = document.querySelectorAll('.computer');
const outcomeDiv = document.querySelector('#outcome');
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const replayButton = document.querySelector("#replay");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'Oh dear, computerPlay is returning the wrong thing';
    }
}

function playRound(playerSelection, computerSelection) {
    const endState = {
        endString: "It's a draw!",
        winner: ""
    };

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            endState.endString = 'You lose!';
            endState.winner = 'computer';
        }
        else if (computerSelection === 'scissors') {
            endState.endString = 'You win!';
            endState.winner = 'player';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            endState.endString = 'You win!';
            endState.winner = 'player';
        }
        else if (computerSelection === 'scissors') {
            endState.endString = 'You lose!';
            endState.winner = 'computer';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            endState.endString = 'You lose!';
            endState.winner = 'computer';
        }
        else if (computerSelection === 'paper') {
            endState.endString = 'You win!';
            endState.winner = 'player';
        }
    }
    return endState;
}

function resetGame(e) {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    const startText = document.createElement('h2');
    startText.textContent = 'Choose your move...';
    outcomeDiv.textContent = "";
    outcomeDiv.appendChild(startText);
}

playerButtons.forEach(button => button.addEventListener('click', processMove));

function processMove(e) {
    outcomeDiv.textContent = "";
    const computerMove = computerPlay();
    const result = playRound(this.id, computerMove);
    const playerMoveH2 = document.createElement('h2');
    playerMoveH2.textContent = `You chose ${this.id.toUpperCase()}`;
    outcomeDiv.appendChild(playerMoveH2);

    const computerMoveH2 = document.createElement('h2');
    computerMoveH2.textContent = `I chose ${computerMove.toUpperCase()}`;
    outcomeDiv.appendChild(computerMoveH2);

    const outcomeH2 = document.createElement('h2');
    outcomeH2.textContent = result.endString;
    outcomeDiv.appendChild(outcomeH2);

    computerButtons.forEach(button => {
        button.classList.remove('selected');
        if (button.classList.contains(computerMove)) {
            button.classList.add('selected');
        }
    });

    if (result.winner === 'player') playerScore++;
    if (result.winner === 'computer') computerScore++;

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    if (playerScore + computerScore === 5) {
        outcomeDiv.textContent = "";
        const winH2 = document.createElement('h2');
        if (playerScore > computerScore) {
            winH2.textContent = 'You CRUSHED me! Well done!';
        }
        else {
            winH2.textContent = 'I DESTROYED you! Loserrrrr!';
        }
        outcomeDiv.appendChild(winH2);
        outcomeDiv.appendChild(replayButton);
        replayButton.style.display = 'block';
    }

    replayButton.addEventListener('click', resetGame);

}
