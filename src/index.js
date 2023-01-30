import { renderManualGame, renderRandomGame } from "./app";
const startGameModal = document.getElementById("start-game-modal");
const startRandomGameBtn = document.getElementById("start-random-btn");
const placeShipsBtn = document.getElementById("place-ships-btn");
const boardMapModal = document.getElementById("board-map-modal");
const placeCarrier = document.getElementById("place-carrier-modal");
const placeBattleship = document.getElementById("place-battleship-modal");
const placeDestroyer = document.getElementById("place-destroyer-modal");
const placeSubmarine = document.getElementById("place-submarine-modal");
const placePatrolBoat = document.getElementById("place-patrol-boat-modal");
let p1;
let p2;
let p3;
let p4;
let p5;
const a1 = "x";
const a2 = "x";
const a3 = "x";
const a4 = "x";
const a5 = "x";
startRandomGameBtn.addEventListener("click", () => {
  startGameModal.style.display = "none";
  renderRandomGame();
});

placeShipsBtn.addEventListener("click", () => {
  startGameModal.style.display = "none";
  placeCarrier.style.display = "block";

  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", i);
    cell.classList.add("map-cell");
    cell.classList.add("cell");
    boardMapModal.appendChild(cell);
  }

  boardMapModal.addEventListener(
    "click",
    (e) => {
      p1 = Number(e.target.id);
      let element = e.target;
      for (let i = 0; i < 5; i++) {
        element.style.backgroundColor = "#48a5e2";
        element = element.nextElementSibling;
      }
    },
    { once: true }
  );
});

const carrierNextBtn = document.querySelector("#carrier-next-btn");
carrierNextBtn.addEventListener("click", () => {
  placeCarrier.style.display = "none";
  placeBattleship.style.display = "block";
  boardMapModal.addEventListener(
    "click",
    (e) => {
      p2 = Number(e.target.id);
      let element = e.target;
      for (let i = 0; i < 4; i++) {
        element.style.backgroundColor = "#48a5e2";
        element = element.nextElementSibling;
      }
    },
    { once: true }
  );
});

const battleshipNextBtn = document.querySelector("#battleship-next-btn");
battleshipNextBtn.addEventListener("click", () => {
  placeBattleship.style.display = "none";
  placeDestroyer.style.display = "block";
  boardMapModal.addEventListener(
    "click",
    (e) => {
      p3 = Number(e.target.id);
      let element = e.target;
      for (let i = 0; i < 3; i++) {
        element.style.backgroundColor = "#48a5e2";
        element = element.nextElementSibling;
      }
    },
    { once: true }
  );
});

const destroyerNextBtn = document.querySelector("#destroyer-next-btn");
destroyerNextBtn.addEventListener("click", () => {
  placeDestroyer.style.display = "none";
  placeSubmarine.style.display = "block";
  boardMapModal.addEventListener(
    "click",
    (e) => {
      p4 = Number(e.target.id);
      let element = e.target;
      for (let i = 0; i < 3; i++) {
        element.style.backgroundColor = "#48a5e2";
        element = element.nextElementSibling;
      }
    },
    { once: true }
  );
});

const submarineNextBtn = document.querySelector("#submarine-next-btn");
submarineNextBtn.addEventListener("click", () => {
  placeSubmarine.style.display = "none";
  placePatrolBoat.style.display = "block";
  boardMapModal.addEventListener(
    "click",
    (e) => {
      p5 = Number(e.target.id);

      let element = e.target;
      for (let i = 0; i < 2; i++) {
        element.style.backgroundColor = "#48a5e2";
        element = element.nextElementSibling;
      }
    },
    { once: true }
  );
});

const startManualGameBtn = document.querySelector("#start-manual-game-btn");
startManualGameBtn.addEventListener("click", () => {
  placePatrolBoat.style.display = "none";
  boardMapModal.style.display = "none";
  renderManualGame(p1, p2, p3, p4, p5);
});
