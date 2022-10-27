


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



const Rock = document.querySelector('.Rock');
const Paper = document.querySelector('.Paper');
const Scissors = document.querySelector('.Scissors');

const results = document.querySelector('.results');
const result = document.createElement('div');
result.classList.add('result');

Rock.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice(); 
    result.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(result);

    console.log(playerSelection);
    console.log(computerSelection);
    
})

Paper.addEventListener('click', () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice(); 
    result.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(result);

    console.log(playerSelection);
    console.log(computerSelection);

})

Scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice(); 
    result.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(result);

    console.log(playerSelection);
    console.log(computerSelection);
    
})






