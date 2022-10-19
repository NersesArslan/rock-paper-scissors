game();

function getComputerChoice() 
    {
        const rps = ["Rock", "Paper", "Scissors"];
    return rps[Math.floor(Math.random()*rps.length)];
    }


function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "Draw";
    } 
    else if (playerSelection === "rock"){
        if(computerSelection === "paper"){
            return "You lose!";
        }
        else if (computerSelection === "scissors"){
            return "You win!";
        } 
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return "You lose!";
        } 
        else if(computerSelection === "rock"){
            return "You win!";
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return "You lose!";
        }
    else if(computerSelection === "paper"){
        return "You win!";
    }
    }
};



function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < 5; i++){      
        

        const playerSelection = prompt("Rock, Paper or Scissors?"); 
        const computerSelection = getComputerChoice();    
        console.log(playRound(playerSelection, computerSelection));
        
       }
    } 
    
}

