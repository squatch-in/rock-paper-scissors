


//randomly choose between one of the values
let humanScore = 0;
let computerScore = 0;

let randomNum = Math.floor(Math.random() * (3 - 0)) + 1;

    

function numConvert() {           //assign the random number to back to a word
    let result;
    if (randomNum === 1) {
        result = "rock";
    }else if (randomNum === 2) {
        result = "paper";
    }else if (randomNum === 3) {
        result = "scissors";
    }
    return result;
}
console.log(numConvert());

let human = prompt("rock, paper, scissors");

function getHumanChoice() {
                                            //get the user to type there response
    if (human.toLowerCase() === "rock"){
        alert("you chose rock");
    }else if (human.toLowerCase() === "paper"){
        alert("you chose paper");
    }else if (human.toLowerCase() === "scissors") {
        alert("you chose scissors");
    }
    return human;
}

//console.log(getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = numConvert();


 //compare the output of the 2 functions
function playRound(humanSelection, computerSelection) { 
    let result;
    if (humanSelection == "rock" && computerSelection == "rock") {
        result = "tie";
    }else if (humanSelection == "rock"  && computerSelection == "scissors" ) {
        result = "you win";
    }else if (humanSelection == "paper" && computerSelection == "rock") {
        result = "you win";
    }else if (humanSelection == "scissors" && computerSelection == "paper") {
        result = "you win";
    }else if (humanSelection == "paper" && computerSelection == "scissors") {
        result = "you lose";
    }else if (humanSelection == "rock" && computerSelection == "paper") {
        result = "you lose";
    }else if (humanSelection == "scissors" && computerSelection == "rock") {
        result = "you lose";
    }else if (humanSelection == "paper" && computerSelection == "paper") {
        result = "tie";
    }else if (humanSelection == "scissors" && computerSelection == "scissors"){
        result = "tie"; 
    }
    return result;
}

console.log(playRound(humanSelection, computerSelection));

var result = playRound(humanSelection, computerSelection);

function playerScore(result){                   //decides between who won and who lost
    if (result == "you win") {
        humanScore++;
    }else (result == "you lose")
    computerScore++;
}
playerScore();
console.log(humanScore);                //returns scores
console.log(computerScore);
// console.log(playerScore(result));

function playGame() {                                   //function that will play the game for 5 times
    for(let i = 1; i < 5; i++){
        whoWon = playerScore(result);
    }
}
playGame();