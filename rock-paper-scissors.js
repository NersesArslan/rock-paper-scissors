function getComputerChoice() {   
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

const Rock = document.querySelector('.Rock');
const Paper = document.querySelector('.Paper');
const Scissors = document.querySelector('.Scissors');

const results = document.querySelector('.results');
const result = document.createElement('div');
result.classList.add('result');

const userScore = document.querySelector('.userscore');
const computerScore = document.querySelector('.computerscore');

let roundScore = 0;
    let scorePC = 0;
    let scoreUser = 0;
    

    function dry() {
        computerSelection = getComputerChoice(); 
        roundScore = playRound(playerSelection, computerSelection);
    
        if(roundScore === -1){
            scorePC += 1;        
            result.textContent = "You Lose!";

        } else if(roundScore === 1){
            scoreUser += 1;           
            result.textContent = "You Win!";

        } else {       
            result.textContent = "Draw"
        }
    
        console.log(roundScore);
        console.log("Pc Score: " + scorePC);
        console.log("User Score: " + scoreUser);
        console.log("---");
        results.appendChild(result);
        userScore.innerHTML = scoreUser;
        computerScore.innerHTML = scorePC;


        if(scoreUser === 5){
            alert("You Win!");
            return scoreUser = scorePC = 0;
        } else if(scorePC === 5){
            alert("Computer Wins!");
            return scoreUser = scorePC = 0;
        }
        
    }


function game() {

    

    Rock.addEventListener('click', () => {
        playerSelection = "rock";
        dry();
    
    });

     Paper.addEventListener('click', () => {
        playerSelection = "paper";
        dry();
            
    })

        Scissors.addEventListener('click', () => {
            playerSelection = "scissors";
            dry();
    })
        
}
    
game();
