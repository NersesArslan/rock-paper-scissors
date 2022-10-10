/* function that returns Rock, Paper or Scissors */


function getComputerChoice(rps) 
    {
    return rps[Math.floor(Math.random()*rps.length)];
    }
const rps = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(rps));

function playRound(playerSelection, computerSelection) {
    
}