Project: Rock Paper Scissors from The Odin Project
Project link: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

The purpose of this project is to practice JavaScript skills.

This Rock Paper Scissors game is played entirely via the console.

Pseudocode:

Create function to get computer choice
    - Get a random number to represent Rock, Paper or Scissors
    - If random number from 1 to 33
        - Return Rock
    - Else if random number in range 34 to 67
        - Return Paper
    - Else if random number in range 67 to 100
        - Return Scissors

Create function to get human choice
    - Prompt user to type number as choice
    - If input is 1, 2 or 3
        - Return the choice
    - Else tell user to type again

Create scoreboard for human and computer
    - Set initial value to 0

Create function for gameplay
    - If human choice beat computer choice
        - Return human win
        - add 1 point to human
    - Else if computer choice beat human choice
        - Return computer win
        - add 1 point to computer
    - Else return game ties