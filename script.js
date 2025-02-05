// Step 1: Check if JavaScript is linked correctly
// console.log("Hello World");

// Step 2: Create a function to get computer's choice
function getComputerChoice() {
    // Get random number 1, 2 or 3 to represent computer's choice
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 3: Create a function to get human's choice
function getHumanChoice() {
    let input = prompt("Type your choice: Rock, Paper or Scissors?");
    input = input.toLowerCase();
    // Check if input is valid
    if (
        (input === "rock") ||
        (input === "paper") ||
        (input === "scissors")
    ) {
        return input;
    } else {
        console.log("Invalid input! Please restart the game.");
        return;
    }
}

// Step 6: Create a function to play the entire game
function playGame() {
    // Step 4: Declare score variables
    let humanScore = 0;
    let computerScore = 0;

    // Capitalize the first letter of rock, paper and scissors
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

    // Step 5: Create a function to play a single round
    function playRound(humanChoice, computerChoice) {
        // Covert humanChoice to all lowercase letters
        humanChoice = humanChoice.toLowerCase();

        // List the conditions when human wins
        if (
            (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || 
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
            humanScore += 1;
        }
        // List the conditions when computer wins
        else if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "rock")
        ) {
            console.log(`You lose. ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
            computerScore += 1;
        }
        // Check for a tie
        else {
            console.log(`It's a tie. Both chose ${capitalize(humanChoice)}.`);
        }
    }

    // Play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);

        const humanSelection = getHumanChoice();

        // Stop the game if input is invalid
        if (!humanSelection) {
            return;
        }

        const computerSelection = getComputerChoice();

        console.log(`You chose: ${capitalize(humanSelection)}`);
        console.log(`Computer chose: ${capitalize(computerSelection)}`);

        playRound(humanSelection, computerSelection);
    }

    // Display final score
    console.log(`FINAL SCORE: You ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("It's a tie game overall.");
    }
}

playGame();
