let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const choices = document.querySelector(".choices");
choices.textContent = "Let's play!";
const result = document.querySelector(".result");
const resetBtn = document.querySelector("#reset");

function getComputerChoice() {
    let randomChoice = Math.floor((Math.random() - 0.5) * 10);

    return (randomChoice > 0) ? "rock":
        (randomChoice == 0) ? "paper":
        "scissors";
}

function endGame() {
    return humanScore === 5 || computerScore === 5;
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function finalResult() {
    return (humanScore > computerScore) ? "Yay! You win the game!"
        : "Aww... You lose...";
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    choices.textContent = "Let's play!";
    result.textContent = "";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    resetBtn.disabled = true;
}

function resetClick() {
    reset();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`Computer choose ${computerChoice}.\n\nTie.`);

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        alert(`Computer choose ${computerChoice}.\n\nYou win this round.`);

    } else {        
        computerScore++;
        alert(`Computer choose ${computerChoice}.\n\nYou lose this round.`);
    }

    choices.textContent = `Your Choice: ${humanChoice} ; 
                        Computer Choice: ${computerChoice}`;
    result.textContent = `Your Score: ${humanScore} ; 
                        Computer Score: ${computerScore}`;

    if (endGame()) {
        disableButtons();
        choices.textContent = finalResult();
        resetBtn.disabled = false;
        resetBtn.addEventListener('click', () => resetClick());
    }

} 


function buttonClick(humanPick) {
    let computerPick = getComputerChoice();
    playRound(humanPick, computerPick);

}

rockBtn.addEventListener('click', () => buttonClick('rock'));
paperBtn.addEventListener('click', () => buttonClick('paper'));
scissorsBtn.addEventListener('click', () => buttonClick('scissors'));

