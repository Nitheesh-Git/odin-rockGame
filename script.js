let humanSelection = ""
let humanScore = 0
let computerScore = 0
let rounds = 0
let maxRounds = 5

const choose = document.querySelectorAll("button")
choose.forEach(button =>{
    button.addEventListener("click",()=>{
        if(rounds >= maxRounds || humanScore === 3 || computerScore === 3){
            alert("Game over")
            window.location.reload()
        }
        let input = button.textContent
        choice(input)
    })
})

function choice(input){
    humanSelection = input
    play()
    checkGameOver()
}

function play(){
    rounds++

let cInput = Math.floor(Math.random() * 3)
function getComputerChoice(){
    if(cInput==0) return "rock"
    if(cInput==1) return "paper"
    if(cInput==2) return "scissors"
}

function getHumanChoice() {
    let choice = humanSelection.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        console.log("You chose " + choice);
        return choice;
    } else {
        console.log("Invalid Input");
        return null;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It was a tie");
        displayResult.textContent = " It's a tie.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose, Paper beats Rock");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win, Rock beats Scissors");
        displayResult.textContent = " You win this round!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win, Paper beats Rock");
        displayResult.textContent = " You win this round!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose, Scissors beats Paper");
        displayResult.textContent = " Computer wins this round!"
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose, Rock beats Scissors");
        computerScore++;
        displayResult.textContent = " Computer wins this round!"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win, Scissors beats Paper");
        displayResult.textContent = " You win this round!";
        humanScore++;
    }
    displayHumanScore.textContent = `Your Score : ${humanScore}`;
    displayComputerScore.textContent = `Computer Score : ${computerScore}`
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice(3)

playRound(humanChoice, computerChoice)

}

function checkGameOver() {
    if (rounds >= maxRounds || humanScore === 3 || computerScore === 3) {
        if (computerScore > humanScore) {
            console.log("Computer wins!");
            displayWinner.textContent = "Computer"
        }
        else if (humanScore > computerScore) {
            console.log("Human wins!");
            displayWinner.textContent = "Human"
        }
        else {
            console.log("It's a tie!");
            displayWinner.textContent = "Its a tie"
        }

    }
}
const displayHumanScore = document.querySelector("#hs")
const displayComputerScore = document.querySelector("#cs")
const displayWinner = document.querySelector("#win")
const displayResult = document.querySelector(".result")