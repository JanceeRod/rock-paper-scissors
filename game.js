let playerScore = 0;
let computerScore = 0;

let playerScoreText = document.getElementById('player-score');
playerScoreText.textContent = "Player: " + playerScore;

let computerScoreText = document.getElementById('computer-score');
computerScoreText.textContent = "Computer: " + computerScore;

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

var playerImage = document.getElementById('player-img');
var computerImage = document.getElementById('computer-img');

game();

function game() {
    let playerChoice;
    let computerChoice;

    rockButton.addEventListener('click', () => {
        playerImage.src = "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/270a.svg";
        playerChoice = 'rock';
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice)
    });

    paperButton.addEventListener('click', () => {
        playerImage.src = "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/270b.svg";
        playerChoice = 'paper';
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice)
    });

    scissorsButton.addEventListener('click', () => {
        playerImage.src = "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/270c.svg";
        playerChoice = 'scissor';
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice)
    });

    console.log(playerScore);
    console.log(computerScore);
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("Computer Wins!");
        computerScore += 1;
        computerScoreText.textContent = "Computer: " + computerScore;
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("Player Wins!");
        playerScore += 1;
        playerScoreText.textContent = "Player: " + playerScore;
    }
    else if (playerChoice == "rock" && computerChoice == "scissor") {
        console.log("Player Wins!");
        playerScore += 1;
        playerScoreText.textContent = "Player: " + playerScore;
    }
    else if (playerChoice == "scissor" && computerChoice == "rock") {
        console.log("Computer Wins!");
        computerScore += 1;
        computerScoreText.textContent = "Computer: " + computerScore;
    }
    else if (playerChoice == "paper" && computerChoice == "scissor") {
        console.log("Computer Wins!");
        computerScore += 1;
        computerScoreText.textContent = "Computer: " + computerScore;
    }
    else if (playerChoice == "scissor" && computerChoice == "paper") {
        console.log("Player Wins!");
        playerScore += 1;
        playerScoreText.textContent = "Player: " + playerScore;
    }
    else if (playerChoice == computerChoice) {
        console.log("Its a Tie!");
        playerChoice = prompt("Enter your choice: ");
        playerChoice.toLowerCase();

        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
    
}

function getComputerChoice() {
    let choice;
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0: 
            choice = "rock";
            computerImage.src = "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/270a.svg";
            break;
        case 1:
            choice = "paper";
            computerImage.src = "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/270b.svg";
            break;
        case 2:
            choice = "scissor";
            computerImage.src = "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/270c.svg";
            break;
    }
    return choice;
}