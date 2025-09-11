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

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice){
    String.toString(humanChoice).toLowerCase;
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock!");
        ++computerScore;
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors!");
        ++humanScore;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper!");
        ++computerScore;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock!");
        ++humanScore;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats Paper!");
        ++humanScore;
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors!");
        ++computerScore;
    } else{
        console.log("Tie! Both choices are " + humanChoice);
    }
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

playRound(humanChoice, computerChoice);