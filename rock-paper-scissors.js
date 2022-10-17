/* function that returns Rock, Paper or Scissors */


function getComputerChoice(rps) 
    {
    return rps[Math.floor(Math.random()*rps.length)];
    }
const rps = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(rps));

function playRound(playerSelection, computerSelection) {
    switch(playerSelection && computerSelection){
        case playerSelection === "Rock" && computerSelection === "Scissors":
        return "You win! Rock beats Scissors!";
        
    }
}