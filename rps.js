let selector = 0;

let playButton = document.getElementById("play");

let playerChoice = "";
let opponentChoice = "";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let topPos = 1;

rock.onclick = () => {
  playerChoice = "Rock";
  opponent.style.top = "1px";
  topPos = 1;

  selectFunc();
  result();
};
paper.onclick = () => {
  playerChoice = "Paper";
  opponent.style.top = "1px";
  topPos = 1;
  selectFunc();
  result();
};

scissors.onclick = () => {
  playerChoice = "Scissors";
  opponent.style.top = "1px";
  topPos = 1;
  selectFunc();
  result();
};

let opponent = document.getElementById("opponent");

changeTop = () => {
  topPos += 15;
  opponent.style.top = `${topPos}px`;
};

const selectFunc = () => {
  selector = Math.floor(Math.random() * 3 + 1);
  if (selector == 1) {
    opponentChoice = "Rock";
    opponent.src = "Images/rockr.jpg";
  } else if (selector == 2) {
    opponent.src = "Images/paperr.jpg";
    opponentChoice = "Paper";
  } else if (selector == 3) {
    opponent.src = "Images/scissorsr.jpg";
    opponentChoice = "Scissors";
  }
  interval = setInterval(changeTop, 1);
  clear = () => {
    clearInterval(interval);
    console.log("here");
  };
  setTimeout(clear, 100);
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
