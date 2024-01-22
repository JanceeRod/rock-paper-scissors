let playerScore = 0;
let computerScore = 0;

game();

function game() {
    let playerChoice;
    let computerChoice;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Enter your choice: ");
        playerChoice.toLowerCase();
        computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice);
    }

    console.log(playerScore);
    console.log(computerScore);
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("Computer Wins!");
        computerScore += 1;
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("Player Wins!");
        playerScore += 1;
    }
    else if (playerChoice == "rock" && computerChoice == "scissor") {
        console.log("Player Wins!");
        playerScore += 1;
    }
    else if (playerChoice == "scissor" && computerChoice == "rock") {
        console.log("Computer Wins!");
        computerScore += 1;
    }
    else if (playerChoice == "paper" && computerChoice == "scissor") {
        console.log("Computer Wins!");
        computerScore += 1;
    }
    else if (playerChoice == "scissor" && computerChoice == "paper") {
        console.log("Player Wins!");
        playerScore += 1;
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
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissor"
            break;
    }
    return choice;
}