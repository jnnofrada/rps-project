console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomChoice = Math.random();
    if (randomChoice <= .33) {
        return "rock";
    } else if (randomChoice >= .66){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?");
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

