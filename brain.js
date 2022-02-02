let compChoice = { value: "" };
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
const items = document.querySelectorAll(".items");

let playerScore = 0;
let comScore = 0;

let player = document.querySelector("#player-score");

let com = document.querySelector("#com-score");

const notif = document.querySelector(".notif");
const winner = document.querySelector("#winner");

items.forEach((item) => {
  item.addEventListener("click", () => {
    playerChoice = item.id;
    if (playerChoice == "batu") {
      playerChoiceInt = 0;
    } else if (playerChoice == "kertas") {
      playerChoiceInt = 1;
    } else if (playerChoice == "gunting") {
      playerChoiceInt = 2;
    }
    compChoiceInt = computerPlay(compChoice);
    playGame();
  });
});

function computerPlay(compChoice) {
  let choiceNum = Math.floor(Math.random() * 3);
  if (choiceNum == 0) {
    compChoice.value = "Batu";
  } else if (choiceNum == 1) {
    compChoice.value = "Kertas";
  } else if (choiceNum == 2) {
    compChoice.value = "Gunting";
  }
  return choiceNum;
}

function playRound() {
  let win_array = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0],
  ];
  let result = win_array[playerChoiceInt][compChoiceInt];
  if (result == 0) {
    notif.textContent = `Imbang! kamu memilih ${playerChoice} begitupun dengan komputer memilih ${compChoice.value}`;
  } else if (result == 1) {
    notif.textContent = `Kamu menang! kamu memilih ${playerChoice} sementara komputer memilih ${compChoice.value}`;
    playerScore++;
  } else if (result == 2) {
    notif.textContent = `Kamu kalah! :( kamu memilih ${playerChoice} sementara komputer memilih ${compChoice.value}`;
    comScore++;
  }
}

function playGame() {
  playRound();
  player.textContent = `Skor kamu: ${playerScore}`;
  com.textContent = `Skor komputer: ${comScore}`;

  if (playerScore == 5) {
    winner.textContent = "Selamat kamu menang!";
    playerScore = 0;
    comScore = 0;
    // Swal.fire({
    //   icon: "success",
    //   title: "Oops...",
    //   text: "Something went wrong!",
    //   footer: '<a href="">Why do I have this issue?</a>',
    // });
  } else if (comScore == 5) {
    winner.textContent = "Yah kamu kalah :(";
    playerScore = 0;
    comScore = 0;
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "Something went wrong!",
    //   footer: '<a href="">Why do I have this issue?</a>',
    // });
  }
}
