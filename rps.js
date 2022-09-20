let selector = 0;

let playButton = document.getElementById("play");

let playerChoice = "";
let opponentChoice = "";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.onclick = () => {
  playerChoice = "Rock";
  selectFunc();
  result();
};
paper.onclick = () => {
  playerChoice = "Paper";
  selectFunc();
  result();
};

scissors.onclick = () => {
  playerChoice = "Scissors";
  selectFunc();
  result();
};

const selectFunc = () => {
  selector = Math.floor(Math.random() * 3 + 1);
  if (selector == 1) {
    opponentChoice = "Rock";
    document.getElementById("opponent").src = "Images/rockr.jpg";
  } else if (selector == 2) {
    document.getElementById("opponent").src = "Images/paperr.jpg";
    opponentChoice = "Paper";
  } else if (selector == 3) {
    document.getElementById("opponent").src = "Images/scissorsr.jpg";
    opponentChoice = "Scissors";
  }
};

const result = () => {
  if (
    (playerChoice == "Rock" && opponentChoice == "Scissors") ||
    (playerChoice == "Paper" && opponentChoice == "Rock") ||
    (playerChoice == "Scissors" && opponentChoice == "Paper")
  ) {
    document.getElementById("result").innerHTML = "you win";
  } else if (
    (opponentChoice == "Rock" && playerChoice == "Scissors") ||
    (opponentChoice == "Paper" && playerChoice == "Rock") ||
    (opponentChoice == "Scissors" && playerChoice == "Paper")
  ) {
    document.getElementById("result").innerHTML = "you lost";
  } else if (opponentChoice == playerChoice) {
    document.getElementById("result").innerHTML = "you tide";
  }
};
