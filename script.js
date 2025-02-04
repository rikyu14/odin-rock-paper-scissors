function getComputerChoice() {
    const computerNum = Math.floor(Math.random() * 3) + 1;

    // console.log(computerNum);

    if (computerNum === 1) {
        return "Rock";
    } else if (computerNum === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// console.log(getComputerChoice());