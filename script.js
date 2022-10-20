"use strict";

// statments
const space = [];
const x = [];
const o = [];
const isClicked = [];
const isX = []; //0 - blank, 1 - is X
const isO = []; //0 - blank, 1 - is O
let activePlayer = 0; // 0 - plays x, 1 - plays o
let scoreX = 0;
let scoreO = 0;
let playing = true;

// query selecots
const scoreXText = document.querySelector(".game__score-x-sub");
const scoreOText = document.querySelector(".game__score-o-sub");
const turnX = document.querySelector(".game__turn-x");
const turnXInfo = document.querySelector(".game__turn-info-x");
const turnO = document.querySelector(".game__turn-o");
const turnOInfo = document.querySelector(".game__turn-info-o");
const popUp = document.querySelector(".game__popup");
const winInfo = document.querySelector(".game__popup-wins");
const resetBtn = document.querySelectorAll(".game__reset-btn");
const nextGameBtn = document.querySelector(".game__nextgame-btn");
scoreOText.textContent = scoreO;
scoreXText.textContent = scoreX;
for (let i = 0; i < 9; i++) {
  space[i] = document.querySelector(`.game__board-space-${i + 1}`);
  x[i] = document.querySelector(`.x-${i + 1}`);
  o[i] = document.querySelector(`.o-${i + 1}`);
  isClicked[i] = 0;
  isX[i] = 0;
  isO[i] = 0;
}
resetBtn.forEach((resetBtn) => {
  //Need to learn
  resetBtn.addEventListener("click", () => {
    scoreX = 0;
    scoreO = 0;
    scoreOText.textContent = scoreO;
    scoreXText.textContent = scoreX;
    turnX.style.backgroundColor = "#E87676";
    turnO.style.backgroundColor = "#e2d2d2";
    turnOInfo.style.color = "#e2d2d2";
    turnXInfo.style.color = "white";
    popUp.classList.add("hidden");
    for (let j = 0; j < 9; j++) {
      isX[j] = 0;
      isO[j] = 0;
      isClicked[j] = 0;
      x[j].classList.add("hidden");
      o[j].classList.add("hidden");
    }
    activePlayer = 0; // x rozpoczyna
    playing = true;
  });
});

nextGameBtn.addEventListener("click", () => {
  turnX.style.backgroundColor = "#E87676";
  turnO.style.backgroundColor = "#e2d2d2";
  turnOInfo.style.color = "#e2d2d2";
  turnXInfo.style.color = "white";
  popUp.classList.add("hidden");
  for (let j = 0; j < 9; j++) {
    isX[j] = 0;
    isO[j] = 0;
    isClicked[j] = 0;
    x[j].classList.add("hidden");
    o[j].classList.add("hidden");
  }
  activePlayer = 0; // x rozpoczyna
  playing = true;
});

for (let dupa = 0; dupa < 9; dupa++) {
  space[dupa].addEventListener("click", () => {
    if (playing) {
      if (
        (isX[0] === 1 && isX[1] === 1 && isX[2] === 1) ||
        (isX[3] === 1 && isX[4] === 1 && isX[5] === 1) ||
        (isX[6] === 1 && isX[7] === 1 && isX[8] === 1) ||
        (isX[0] === 1 && isX[3] === 1 && isX[6] === 1) ||
        (isX[1] === 1 && isX[4] === 1 && isX[7] === 1) ||
        (isX[2] === 1 && isX[5] === 1 && isX[8] === 1) ||
        (isX[0] === 1 && isX[4] === 1 && isX[8] === 1) ||
        (isX[2] === 1 && isX[4] === 1 && isX[6] === 1)
      ) {
        console.log("wygyrwa X");
        scoreX++;
        scoreXText.textContent = scoreX;
        turnX.style.backgroundColor = "#E87676";
        turnO.style.backgroundColor = "#e2d2d2";
        turnOInfo.style.color = "#e2d2d2";
        turnXInfo.style.color = "white";
        winInfo.textContent = "X wins!";
        popUp.classList.remove("hidden");
        playing = false;
        brake;
      } else if (
        (isO[0] === 1 && isO[1] === 1 && isO[2] === 1) ||
        (isO[3] === 1 && isO[4] === 1 && isO[5] === 1) ||
        (isO[6] === 1 && isO[7] === 1 && isO[8] === 1) ||
        (isO[0] === 1 && isO[3] === 1 && isO[6] === 1) ||
        (isO[1] === 1 && isO[4] === 1 && isO[7] === 1) ||
        (isO[2] === 1 && isO[5] === 1 && isO[8] === 1) ||
        (isO[0] === 1 && isO[4] === 1 && isO[8] === 1) ||
        (isO[2] === 1 && isO[4] === 1 && isO[6] === 1)
      ) {
        console.log("wygyrwa O");
        scoreO++;
        scoreOText.textContent = scoreO;
        turnX.style.backgroundColor = "#e2d2d2";
        turnO.style.backgroundColor = "#E87676";
        turnOInfo.style.color = "white";
        turnXInfo.style.color = "#e2d2d2";
        winInfo.textContent = "O wins!";
        popUp.classList.remove("hidden");
        playing = false;
      } else if (
        isClicked[0] === 1 &&
        isClicked[1] === 1 &&
        isClicked[2] === 1 &&
        isClicked[3] === 1 &&
        isClicked[4] === 1 &&
        isClicked[5] === 1 &&
        isClicked[6] === 1 &&
        isClicked[7] === 1 &&
        isClicked[8] === 1
      ) {
        winInfo.textContent = "It's a DRAW!";
        popUp.classList.remove("hidden");
        playing = false;
      } else {
        if (isClicked[dupa] === 0) {
          if (activePlayer === 0) {
            // jeśli 0 to gra x
            x[dupa].classList.remove("hidden");
            o[dupa].classList.add("hidden");
            activePlayer = 1;
            isClicked[dupa] = 1;
            isX[dupa] = 1;
            turnX.style.backgroundColor = "#e2d2d2";
            turnO.style.backgroundColor = "#E87676";
            turnOInfo.style.color = "white";
            turnXInfo.style.color = "#e2d2d2";
            console.log("x");
          } else {
            // gra o
            x[dupa].classList.add("hidden");
            o[dupa].classList.remove("hidden");
            activePlayer = 0;
            isClicked[dupa] = 1;
            isO[dupa] = 1;
            turnX.style.backgroundColor = "#E87676";
            turnO.style.backgroundColor = "#e2d2d2";
            turnOInfo.style.color = "#e2d2d2";
            turnXInfo.style.color = "white";
            console.log("o");
          }
        } else {
          alert("Already clicked here");
        }
      }
    } else {
      // wtf
      popUp.classList.remove("hidden");
    }
  });
}
