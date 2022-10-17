/* function that returns Rock, Paper or Scissors */

let userInput = prompt("Rock, Paper or Scissors?");

function getComputerChoice() 
    {
        const rps = ["Rock", "Paper", "Scissors"];
    return rps[Math.floor(Math.random()*rps.length)];
    }

let computerSelection = getComputerChoice();
let playerSelection = userInput;

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection ==="Rock"){
        if(computerSelection === "Paper"){
            return "You lose! Paper covers Rock!"
        }
        else if(computerSelection === "Scissors"){
            return "You win! Rock beats Scissors!";
        } else {
            return "Draw.";
        }
    }
};
   