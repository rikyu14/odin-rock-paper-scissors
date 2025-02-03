function getComputerChoice() {
    let computerNum = Math.floor(Math.random() * 100) + 1;

    if (computerNum >= 1 && computerNum <= 33) {
        return "Rock";
    } else if (computerNum >= 34 && computerNum <= 67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanNum = prompt("Type number your choice: Rock = 1, Paper = 2 or Scissors = 3");

    if (humanNum === "1") {
        return "Rock";
    } else if (humanNum === "2") {
        return "Paper";
    } else if (humanNum === "3") {
        return "Scissors";
    } else {
        return "Cannot recognize, please type again.";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Rock")) {
        return "You win!";
        humanScore += 1;
    } else if ((computerChoice === "Rock" && humanChoice === "Scissors") || (computerChoice === "Scissors" && humanChoice === "Paper") || (computerChoice === "Paper" && humanChoice === "Rock")) {
        return "You lose!";
        computerScore += 1;
    } else {
        return "Game tie!"
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));