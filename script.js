const rock = (1);      //assign rock paper and scissors to a value
const paper = (2);
const scissors = (3);

const btn1 = document.querySelector("btn1");
const btn2 = document.querySelector("btn2");
const btn3 = document.querySelector("btn3");


//randomly choose between one of the values
let randomNum = Math.floor(Math.random() * (4 - 1)) + 1;
    


function numConvert() {           //assign the number to back to the word
    let result;
    if (randomNum === 1) {
        result = "Rock";
    }else if (randomNum === 2) {
        result = "Paper";
    }else if (randomNum === 3) {
        result = "Scissors";
    }
    return result;
}

let human = prompt("r, p, s")

function getHumanChoice() { 
    result = "";                        //get the user to type there response
    if (human = "r"){
        result = "you chose rock";
    }else if (human = "p"){
        result ="you chose paper";
    }else if (human = "s") {
        result = "you chose scissors";
    }
    return result;
}

console.log(getHumanChoice());