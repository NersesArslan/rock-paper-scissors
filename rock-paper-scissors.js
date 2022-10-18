/* function that returns Rock, Paper or Scissors */

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
    else if(computerSelection ==="paper"){
        return 1;
    }
    }
};



function game(){
    let score = 0;
    


    for(let i = 0; i <= 4; i++){      
        let userInput = prompt("Rock, Paper or Scissors?"); 
        const playerSelection = userInput;
        const computerSelection = getComputerChoice();    
        score += playRound(playerSelection, computerSelection);
        
    } 
    if(score > 0){
        console.log("You win!")
    } 
    else if(score < 0){
        console.log("You lose!");
    } 
    else if(score === 0){
        console.log("Draw");
    }

}
