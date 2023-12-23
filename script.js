function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
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
                return "You lose! Paper beats rock.";
            case "scissors":
                return "You win! Rock beats scissors.";
            default:
                return "It's a tie!"
                break;
        }
    }

    else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win! Paper beats rock.";
            case "scissors":
                return "You lose! Scissors beats paper.";
            default:
                return "It's a tie!"
                break;                
        }
    }

    else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You lose! Rock beats scissors.";
            case "paper":
                return "You win! Scissors beats paper.";
            default:
                return "It's a tie!"
                break;                                
        }
    }

}

function game() {
    let roundResult;
    let playerChoice;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Enter your choice") ?? "";
        roundResult = playRound(playerChoice, getComputerChoice());

        while (!roundResult) {
            console.log("Please choose either rock, paper or scissors.");
            playerChoice = prompt("Enter your choice") ?? "";
            roundResult = playRound(playerChoice, getComputerChoice());                
        }

        console.log(roundResult);
        if (roundResult.startsWith("You win!")) {
            playerScore++;
        }
    }

    console.log(`You won ${playerScore} out of 5 rounds.`)
    console.log((playerScore > 2)? "You win! Congratulations." : "You lost! Better luck next time." );
}

game();