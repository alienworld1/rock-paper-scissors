function getComputerChoice(){
    let choice = Math.floor(Math.random * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                return "You lose! Paper beats rock."
            case "scissors":
                return "You win! Rock beats scissors."
            default:
                playRound(prompt("Enter your choice:"), getComputerChoice());
                break;
        }
    }
}