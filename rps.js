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
    const scoreboard = document.querySelector(".scoreboard");
    console.log(humanChoice);
    console.log(computerChoice);
    if ((humanChoice == "rock" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "rock")){
        scoreboard.textContent = `You lose! ${computerChoice} beats ${humanChoice}! `;
        // alert(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    } else if ((computerChoice == "rock" && humanChoice == "paper")
        || (computerChoice == "paper" && humanChoice == "scissors")
        || (computerChoice == "scissors" && humanChoice == "rock")){
        scoreboard.textContent = `You win! ${humanChoice} beats ${computerChoice}! `;
        // alert(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    } else{
        scoreboard.textContent = `Tie! Both choices are ${humanChoice}! `;
        // alert(`Tie! Both choices are ${humanChoice}!`);
    }
    document.querySelector(".humanScore").textContent = `Human score: ${humanScore}`;
    document.querySelector(".computerScore").textContent = `Computer score: ${computerScore}`;
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

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

// playGame();