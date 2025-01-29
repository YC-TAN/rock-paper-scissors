let humanScore = 0;
let computerScore = 0;

// Buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");
resetBtn.style.color = "gray";

// Info sections
const gameInstruction = "Pick your choice, First to 5 wins"
const info = document.querySelector(".info1");
info.textContent = gameInstruction;

const score = document.querySelector(".score");
score.textContent = "Let's play!";


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

    rockBtn.style.color = "gray";
    paperBtn.style.color = "gray";
    scissorsBtn.style.color = "gray";
}

function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    rockBtn.style.color = "black";
    paperBtn.style.color = "black";
    scissorsBtn.style.color = "black";
}


function enableResetBtn() {
    resetBtn.disabled = false;
    resetBtn.style.color = "black";
}


function disableResetBtn() {
    resetBtn.disabled = true;
    resetBtn.style.color = "gray";
}


function finalResult() {
    return (humanScore > computerScore) ? "Yay! You win the game!"
        : "Aww... You lose...";
}


function resetClick() {
    humanScore = 0;
    computerScore = 0;
    info.textContent = gameInstruction;
    score.textContent = "Let's play!"; 
    enableButtons();
    disableResetBtn();
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

    info.textContent = `You: ${humanChoice} ----- Computer: ${computerChoice}`;
    score.textContent = `Your Score: ${humanScore} ----- Computer Score: ${computerScore}`;

    if (endGame()) {
        disableButtons();
        enableResetBtn()
        info.textContent = finalResult();
        resetBtn.addEventListener('click', () => resetClick());
    }

} 


function buttonClick(humanPick) {
    let computerPick = getComputerChoice();
    playRound(humanPick, computerPick);

}

// Game button events
rockBtn.addEventListener('click', () => buttonClick('rock'));
paperBtn.addEventListener('click', () => buttonClick('paper'));
scissorsBtn.addEventListener('click', () => buttonClick('scissors'));

