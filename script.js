//randomly choose between one of the values

var humanScore = 0;
var computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = numConvert(); 



//get the user to type there response
function getHumanChoice() {
    let result;
    human = prompt("rock, paper, scissors");
    if (human.toLowerCase() === "rock"){
        alert("you chose rock");
        result = "rock";
    }else if (human.toLowerCase() === "paper"){
        alert("you chose paper");
        result = "paper";
    }else if (human.toLowerCase() === "scissors") {
        alert("you chose scissors");
        result = "scissors";
    }
    return result;
}

//assign the random number to back to a word
function numConvert() {           
    let result;
    let randomNum = Math.floor(Math.random() * (3 - 0)) + 1;
    if (randomNum === 1) {
        result = "rock";
    }else if (randomNum === 2) {
        result = "paper";
    }else if (randomNum === 3) {
        result = "scissors";
    }
    return result;
}

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

let whoWon = playRound(humanSelection, computerSelection);
 //decides between who won and who lost

function playerScore(whoWon){  
    let result;                
    if (whoWon == "you win") {
        humanScore++;
    }else if (whoWon == "you lose") {
        computerScore++;
    }else if (whoWon == "tie"){
        computerScore;
        humanScore;
    }
    return result;
}


// function that will play the game for 5 times 

function playGame() {                                   
    for(let i = 0; i < 5; i++){
        playerScore(whoWon); 
        playRound(getHumanChoice(), numConvert());
    }
}
playGame();

alert("your score was " + humanScore + " the cpu score was " + computerScore);