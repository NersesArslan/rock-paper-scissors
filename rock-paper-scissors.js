


function getComputerChoice() 
    {
        const rps = ["Rock", "Paper", "Scissors"];
    return rps[Math.floor(Math.random()*rps.length)];
    }

    const computerSelection = getComputerChoice(); 
    
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



const Rock = document.querySelector('.Rock');
const Paper = document.querySelector('.Paper');
const Scissors = document.querySelector('.Scissors');

Rock.addEventListener('click', () => {
     playerSelection = "rock";
     alert(playRound(playerSelection, computerSelection));
     console.log(playerSelection);
     console.log(computerSelection);
})

Paper.addEventListener('click', () => {
    playerSelection = "paper";
    alert(playRound(playerSelection, computerSelection));
    console.log(playerSelection);
    console.log(computerSelection);

})

Scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    alert(playRound(playerSelection, computerSelection));
    console.log(playerSelection);
    console.log(computerSelection);
})

    


