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

const playerButtons = document.querySelectorAll("#player-buttons-container button");
const computerChoicePara = document.querySelector("#computer-choice-text");
const resultDiv = document.querySelector("#results-container");

playerButtons.forEach((playerButton) => {
    playerButton.addEventListener("click", () => {
        choice = getComputerChoice();

        computerChoicePara.textContent = `I choose... ${choice}!`;
        let roundResult = playRound(playerButton.id, choice);

        if (roundResult.startsWith("You win")) {
            resultDiv.classList.add("win");
            resultDiv.classList.remove("loss");
        }

        else if (roundResult.startsWith("You")) {
            resultDiv.classList.add("loss");
            resultDiv.classList.remove("win");            
        }

        else {
            resultDiv.classList.remove("win");
            resultDiv.classList.remove("loss");
        }

        resultDiv.textContent = roundResult;
    })
})

