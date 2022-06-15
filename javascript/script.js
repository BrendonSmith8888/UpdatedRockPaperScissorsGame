function computerPlay() {
  return (computerChoice = Math.floor(Math.random() * 3));
}

let computerScore = 0;
let playerScore = 0;

const rockSelection = document.getElementById("rpsImageRock");
const paperSelection = document.getElementById("rpsImagePaper");
const scissorsSelection = document.getElementById("rpsImageScissors");
const restartButton = document.getElementById("restartButton");
restartButton.style.display="none";

rockSelection.addEventListener("click", () => {
  const playerSelection = "Rock";
  playRound(playerSelection);
});

paperSelection.addEventListener("click", () => {
  const playerSelection = "Paper";
  playRound(playerSelection);
});

scissorsSelection.addEventListener("click", () => {
  const playerSelection = "Scissors";
  playRound(playerSelection);
});

function playRound(playerSelection) {
  
  let computerSelection = computerPlay();
  if (playerSelection === "Rock") {
    if (computerSelection === 0) {
      computerScore++;
      document.getElementById("Selections").innerHTML =
        "Computer's Choice: Paper | Player's Choice: " + playerSelection;
      document.getElementById("Results").innerHTML =
        "You lose! Paper beats " + playerSelection;
    } else if (computerSelection === 1) {
      document.getElementById("Selections").innerHTML =
        "Computer's Choice: Rock | Player's Choice: " + playerSelection;
      document.getElementById("Results").innerHTML = "Draw";
    } else if (computerSelection === 2) {
      playerScore++;
      document.getElementById("Selections").innerHTML =
        "Computer's Choice: Scissors | Player's Choice: " + playerSelection;
      document.getElementById("Results").innerHTML =
        "You Win! " + playerSelection + " beats Scissors";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === 0) {
      document.getElementById("Selections").innerHTML =
        "Computer's Choice: Paper | Player's Choice: " + playerSelection;
      document.getElementById("Results").innerHTML = "Draw";
    } else if (computerSelection === 1) {
      playerScore++;
      document.getElementById("Selections").innerHTML =
        "Computer's Choice: Rock | Player's Choice: " + playerSelection;
      document.getElementById("Results").innerHTML =
        "You Win! " + playerSelection + " beats Rock";
    } else if (computerSelection === 2) {
      computerScore++;
      document.getElementById("Selections").innerHTML =
        "Computer's Choice: Scissors | Player's Choice: " + playerSelection;
      document.getElementById("Results").innerHTML =
        "You lose! Scissors beats " + playerSelection;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === 0) {
      playerScore++;
      document.getElementById("Selections").innerHTML =
        "Computer's Choice: Paper | Player's Choice: " + playerSelection;
      document.getElementById("Results").innerHTML =
        "You Win! " + playerSelection + " beats Paper";
    } else if (computerSelection === 1) {
      computerScore++;
      document.getElementById("Selections").innerHTML =
        "Computer's Choice: Rock | Player's Choice: " + playerSelection;
      document.getElementById("Results").innerHTML =
        "You lose! Rock beats " + playerSelection;
    } else if (computerSelection === 2) {
      document.getElementById("Selections").innerHTML =
        "Computer's Choice: Scissors | Player's Choice: " + playerSelection;
      document.getElementById("Results").innerHTML = "Draw";
    }
  } else {
    document.getElementById("Results").innerHTML = "Something went wrong";
  }

  document.getElementById("ComputerScore").innerHTML = computerScore;
  document.getElementById("PlayerScore").innerHTML = playerScore;

  if (computerScore === 5) {
    document.getElementById("EndResult").innerHTML =
      "You lost the Series: " +
      computerScore +
      "-" +
      playerScore +
      " Bad Luck!";
    clearResults();

  } else if (playerScore === 5) {
    document.getElementById("EndResult").innerHTML =
      "You won the Series: " +
      playerScore +
      "-" +
      computerScore +
      " Well Done!";
    clearResults();
  } else {
    document.getElementById("EndResult").innerHTML = "";
  }
}
function clearResults() {
  playerScore = 0;
  computerScore = 0;
  rockSelection.style.display="none";
  paperSelection.style.display="none";
  scissorsSelection.style.display="none";
  restartGame()
}

function restartGame(){
  restartButton.style.display="block";
  restartButton.addEventListener("click", ()=> window.location.reload());
}
