let humanScore = 0
let computerScore = 0

function play(){

let cInput = Math.floor(Math.random() * 3)
function getComputerChoice(){
    if(cInput === 0){
        console.log("The computer choose Rock")
        cInput = "rock"
    }
    else if(cInput === 1){
        console.log("The computer choose Paper")
        cInput = "paper"
    }
    else if(cInput === 2){
        console.log("The computer choose Scissor")
        cInput = "scissors"
    }
}

let input = prompt("Enter your choice")
function getHumanChoice(){
    if(input.toLowerCase() === "rock"){
        console.log("You choose "+ input.toLowerCase())
    }
    else if(input.toLowerCase() === "paper"){
        console.log("You choose "+ input.toLowerCase())
    }
    else if(input.toLocaleLowerCase() === "scissors"){
        console.log("You choose "+ input.toLowerCase())
    }
    else{
        console.log("Invalid Input")
    }

}
// console.log(getHumanChoice())


function playRound(humanChoice, computerChoice){
   if(input === cInput){
    console.log("It was a tie")
   }
   else if(input === "rock" && cInput === "paper"){
    console.log("You Lose, Paper beats Rock")
    computerScore++
   }
   else if(input === "rock" && cInput === "scissors"){
    console.log("You Win, Rock beats Sciccors")
    humanScore++
   }
   else if(input === "paper" && cInput === "rock"){
    console.log("You Win, Paper beats Rock")
    humanScore++
   }
   else if(input === "paper" && cInput === "scissors"){
    console.log("You Lose, Scissor beats Paper")
    computerScore++
   }
   else if(input === "scissors" && cInput === "rock"){
    console.log("You Lose, Rock beats Scissor")
    computerScore++
   }
   else if(input === "scissors" && cInput === "paper"){
    console.log("You Win, Scissor beats Paper")
    humanScore++
   }    

}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice(3)

playRound(humanChoice, computerChoice)

}

for(i=0;i<5;i++){
   play()
    console.log(computerScore)
    console.log(humanScore)
   if(computerScore===3 || humanScore === 3){
        break
    }
}

if(computerScore>humanScore){
    console.log("Computer wins!")
}
else if(humanScore>computerScore){
    console.log("Human wins!")
}
else{
    console.log("Its a tie!")
}