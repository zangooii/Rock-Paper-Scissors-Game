let selector = 0;

let playButton = document.getElementById("play");

const selectFunc = () => {
  selector = Math.floor(Math.random() * 3 + 1);
  if (selector == 1) {
    document.getElementById("opponent").innerHTML = "Rock";
  } else if (selector == 2) {
    document.getElementById("opponent").innerHTML = "Paper";
  } else if (selector == 3) {
    document.getElementById("opponent").innerHTML = "Scissors";
  }
  console.log(selector);
};

playButton.addEventListener("click", selectFunc);
