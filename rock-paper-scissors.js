/* function that returns Rock, Paper or Scissors */

let userInput = prompt("Rock, Paper or Scissors?");

function getComputerChoice() 
    {
        const rps = ["Rock", "Paper", "Scissors"];
    return rps[Math.floor(Math.random()*rps.length)];
    }

function playRound(playerSelection, computerSelection){
    let playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return "Draw";
    } 
    else if (playerSelection ==="rock"){
        if(computerSelection === "Paper"){
            return "You lose! Paper covers Rock."
        }
        else if (computerSelection === "Scissors"){
            return "You win! Rock beats Scissors!";
        } 
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "Scissors"){
            return "You lose! Scissors cuts Paper.";
        } 
        else if(computerSelection === "Rock"){
            return "You win! Paper covers Rock.";
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "Rock"){
            return "You lose! Rock beats Scissors.";
        }
    else if(computerSelection ==="Paper"){
        return "You win! Scissors cuts Paper.";
    }
    }
};

console.log(playRound(userInput, getComputerChoice()));
   