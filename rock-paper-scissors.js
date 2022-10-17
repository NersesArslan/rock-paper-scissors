/* function that returns Rock, Paper or Scissors */

let userInput = prompt("Rock, Paper or Scissors?");

function getComputerChoice() 
    {
        const rps = ["Rock", "Paper", "Scissors"];
    return rps[Math.floor(Math.random()*rps.length)];
    }

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Draw";
    } 
    else if (playerSelection ==="Rock"){
        if(computerSelection === "Paper"){
            return "You lose! Paper covers Rock."
        }
        else if (computerSelection === "Scissors"){
            return "You win! Rock beats Scissors!";
        } 
    }
    else if(playerSelection === "Paper"){
        if(computerSelection === "Scissors"){
            return "You lose! Scissors cuts Paper.";
        } 
        else if(computerSelection === "Rock"){
            return "You win! Paper covers Rock.";
        }
    }
    else if(playerSelection === "Scissors"){
        if(computerSelection === "Rock"){
            return "You lose! Rock beats Scissors.";
        }
    else if(computerSelection ==="Paper"){
        return "You win! Scissors cuts Paper.";
    }
    }
};

console.log(playRound(userInput, getComputerChoice()));
   