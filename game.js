game();

function game() {
    let playerChoice;
    let computerChoice;

    for (let i = 0; i < 1; i++) {
        playerChoice = prompt("Enter your choice: ");
        computerChoice = getComputerChoice();

        // function playRound(playerChoice, computerChoice) {

        // }
        console.log(playerChoice);
        console.log(computerChoice)
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