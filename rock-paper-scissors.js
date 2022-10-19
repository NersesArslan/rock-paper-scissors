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



function game(){
    let playerScore = 0;
    let computerScore = 0;
    let score = 0;
    for(let i = 0; i < 5; i++){      
        const playerSelection = prompt("Rock, Paper or Scissors?"); 
        const computerSelection = getComputerChoice();    
        if(playRound(playerSelection, computerSelection) === 0){
            console.log("Draw");
        }
        else if(playRound(playerSelection, computerSelection) === 1){
            console.log("You win this round!");
        }
        else if(playRound(playerSelection, computerSelection) === -1){
            console.log("You lose this round!");
        
        }
        
        score += score;
       }
       if(score > 0){
        console.log(alert("You Win!"));
       }
       else if(score < 0){
        console.log(alert("Computer Wins!"));
       }
       else if(score === 0){
        console.log(alert("Tie Game"));
       }
    
    } 
    


