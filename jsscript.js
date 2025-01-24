// 1. Get computer choice
    // Create a function: getComputerChoice
        // Randomly return "Rock", "Paper" or "Scissors"
        // Use Math.random method
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 10 - 5);

    return (randomChoice > 0) ? "rock":
        (randomChoice == 0) ? "paper":
        "scissors";


    // if (randomChoice > 0) {
    //     return "rock";
    // } else if (randomChoice === 0) {
    //     return "paper";
    // } else if (randomChoice < 0) {
    //     return "scissors";
    // }
}

// console.log(getComputerChoice());


// 2. Get human choice
    // Create a function: getHumanChoice
        // Return choice based on human input
        // Use prompt method

function getHumanChoice() {
    let humanChoice = prompt("What is your choice? (rock, paper, scissors)", ' ').toLowerCase();
    
    switch (humanChoice) {
        case "rock":
        case "paper":
        case "scissors":
            return humanChoice;
        default:
            alert('Please enter your choice of "rock", "paper" or "scissors".');
            return getHumanChoice(); // Recursively prompt for valid input
    }
}

// console.log(getHumanChoice());


// 3. Declare players score variable
    // Create 2 global variables: humanScore, computerScore
        // Initialise with value 0
let humanScore = 0;
let computerScore = 0;

// console.log(humanScore, computerScore);

// 4. Write the logic to play a single round
    // Create a function: playRound
        // 2 parameters: humanChoice, computerChoice
        // Make humanChoice case-insensitive
        // Print message representing the round winner using console.log()
        // Increase the score of the winner

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        alert("Tie, there is no winner");

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice == "scissors" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        humanScore++;
        alert("You win! Yay!");

    } else {        
        computerScore++;
        alert("You lose!");
    }

    console.log(humanScore, computerScore);
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
        
// 5. Write logic for the entire game
    // Create a function: playGame
        // Call playRound
        // Play 5 rounds