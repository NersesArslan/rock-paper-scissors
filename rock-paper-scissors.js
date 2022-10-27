function getComputerChoice() {   
        const rps = ["Rock", "Paper", "Scissors"];
        return rps[Math.floor(Math.random()*rps.length)];
    }

function getPlayerChoice() {

    Rock.addEventListener('click', () => {
        return playerSelection = "rock";
    });
    
    Paper.addEventListener('click', () => {
        return playerSelection = "paper";
    })
    
    Scissors.addEventListener('click', () => {
       return playerSelection = "scissors";
    })
}

  
function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return 0;
    } 
    else if (playerSelection === "rock"){
        if(computerSelection === "paper"){
            return -1;
            
        }
        else if (computerSelection === "scissors"){
            return 1;
        } 
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return -1;
        } 
        else if(computerSelection === "rock"){
            return 1;
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return -1;
        }
    else if(computerSelection === "paper"){
        return 1;
    }
    }
};

const Rock = document.querySelector('.Rock');
const Paper = document.querySelector('.Paper');
const Scissors = document.querySelector('.Scissors');

const results = document.querySelector('.results');
const result = document.createElement('div');
result.classList.add('result');

const userScore = document.querySelector('.userscore');
const computerScore = document.querySelector('.computerscore');



Rock.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice(); 
    result.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(result);
});

Paper.addEventListener('click', () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice(); 
    result.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(result);
})

Scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice(); 
    result.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(result);
})
