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

console.log(getComputerChoice());