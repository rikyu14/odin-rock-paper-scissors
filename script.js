function getComputerChoice() {
    // Get random number 1, 2 or 3 to represent computer's choice
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return 'rock';
    } else if (randomNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Capitalize the first letter of rock, paper and scissors
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');
const buttons = document.querySelectorAll('button');

// Update results div
function updateResults(message) {
    const p = document.createElement('p');
    p.textContent = message;
    results.appendChild(p);
}

// Clear results from previous round
function clearResults() {
    results.innerHTML = '';
}

// Disable all buttons when game is over
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function playRound(humanChoice) {
    clearResults();

    const computerChoice = getComputerChoice();

    updateResults(`You chose: ${capitalize(humanChoice)}; Computer chose: ${capitalize(computerChoice)}.`);

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') || 
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        updateResults(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
        humanScore += 1;
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        updateResults(`You lose. ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
        computerScore += 1;
    } else {
        console.log(`It's a tie. Both chose ${capitalize(humanChoice)}.`);
    }

    updateResults(`Your Score: ${humanScore}; Computer Score: ${computerScore}`);

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            updateResults('Congratulations! You won the game!');
        } else {
            updateResults('Sorry, you lost the game.');
        }
        disableButtons();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const playerSelection = event.target.textContent.toLowerCase();
        playRound(playerSelection);
    });
});
