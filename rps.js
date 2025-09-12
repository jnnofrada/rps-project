console.log("Hello World!");

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    String.toString(humanChoice).toLowerCase;
    console.log(humanChoice);
    console.log(computerChoice);
    if ((humanChoice == "rock" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "rock")){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        alert(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    } else if ((computerChoice == "rock" && humanChoice == "paper")
        || (computerChoice == "paper" && humanChoice == "scissors")
        || (computerChoice == "scissors" && humanChoice == "rock")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        alert(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    } else{
        console.log(`Tie! Both choices are ${humanChoice}!`);
        alert(`Tie! Both choices are ${humanChoice}!`);
    }
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function playGame(){
    let round = 1;

    let result = "";
    if (humanScore > computerScore){
        result = "Human Wins!";
    } else if (computerScore > humanScore){
        result = "Computer Wins!";
    } else {
        result = "Tie Game!";
    }

    console.log(`Game Over! Final Scores: Human: ${humanScore} Computer: ${computerScore}`);
    alert(`Game Over! Final Scores: Human: ${humanScore} Computer: ${computerScore}. ${result}`);
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => playRound(rockButton.innerHTML, getComputerChoice));
paperButton.addEventListener("click", () => playRound(paperButton.innerHTML, getComputerChoice));
scissorsButton.addEventListener("click", () => playRound(scissorsButton.innerHTML, getComputerChoice));

// playGame();