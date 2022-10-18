/* function that returns Rock, Paper or Scissors */

let userInput = prompt("Rock, Paper or Scissors?");

function getComputerChoice() 
    {
        const rps = ["Rock", "Paper", "Scissors"];
    return rps[Math.floor(Math.random()*rps.length)];
    }

const playerSelection = userInput;
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "Draw";
    } 
    else if (playerSelection === "rock"){
        if(computerSelection === "paper"){
            return "You lose! Paper covers Rock."
        }
        else if (computerSelection === "scissors"){
            return "You win! Rock beats Scissors!";
        } 
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return "You lose! Scissors cuts Paper.";
        } 
        else if(computerSelection === "rock"){
            return "You win! Paper covers Rock.";
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return "You lose! Rock beats Scissors.";
        }
    else if(computerSelection ==="paper"){
        return "You win! Scissors cuts Paper.";
    }
    }
};


console.log(playRound(playerSelection, computerSelection));
   