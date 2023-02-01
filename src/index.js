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
const carrierNextBtn = document.querySelector("#carrier-next-btn");
const battleshipNextBtn = document.querySelector("#battleship-next-btn");
const destroyerNextBtn = document.querySelector("#destroyer-next-btn");
const submarineNextBtn = document.querySelector("#submarine-next-btn");
const startManualGameBtn = document.querySelector("#start-manual-game-btn");
const verticalCarrier = document.getElementById("vertical-carrier");
const verticalBattleship = document.getElementById("vertical-battleship");
const verticalDestroyer = document.getElementById("vertical-destroyer");
const verticalSubmarine = document.getElementById("vertical-submarine");
const verticalPatrolBoat = document.getElementById("vertical-patrol-boat");

let p1, a1, p2, a2, p3, a3, p4, a4, p5, a5;

for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.setAttribute("id", i);
  cell.classList.add("map-cell");
  cell.classList.add("cell");
  boardMapModal.appendChild(cell);
}

startRandomGameBtn.addEventListener("click", () => {
  startGameModal.style.display = "none";
  boardMapModal.style.display = "none";
  renderRandomGame();
});

placeShipsBtn.addEventListener("click", () => {
  startGameModal.style.display = "none";
  placeCarrier.style.display = "block";

  boardMapModal.addEventListener(
    "click",
    (e) => {
      p1 = Number(e.target.id);
      let element = e.target;
      if (verticalCarrier.checked) {
        a1 = "y";
        for (let i = 0; i < 5; i++) {
          element = element.parentNode.childNodes[p1 + 10 * i];
          element.classList.add("ship-placed");
        }
      } else {
        a1 = "x";
        for (let i = 0; i < 5; i++) {
          element.classList.add("ship-placed");
          element = element.nextElementSibling;
        }
      }
    },
    { once: true }
  );
});

carrierNextBtn.addEventListener("click", () => {
  placeCarrier.style.display = "none";
  placeBattleship.style.display = "block";
  boardMapModal.addEventListener(
    "click",
    (e) => {
      p2 = Number(e.target.id);
      let element = e.target;
      if (verticalBattleship.checked) {
        a2 = "y";
        for (let i = 0; i < 4; i++) {
          element = element.parentNode.childNodes[p2 + 10 * i];
          element.classList.add("ship-placed");

        }
      } else {
        a2 = "x";
        for (let i = 0; i < 4; i++) {
          element.classList.add("ship-placed");
          element = element.nextElementSibling;
        }
      }
    },
    { once: true }
  );
});

battleshipNextBtn.addEventListener("click", () => {
  placeBattleship.style.display = "none";
  placeDestroyer.style.display = "block";
  boardMapModal.addEventListener(
    "click",
    (e) => {
      p3 = Number(e.target.id);
      let element = e.target;
      if (verticalDestroyer.checked) {
        a3 = "y";
        for (let i = 0; i < 3; i++) {
          element = element.parentNode.childNodes[p3 + 10 * i];
          element.classList.add("ship-placed");
        }
      } else {
        a3 = "x";
        for (let i = 0; i < 3; i++) {
          element.classList.add("ship-placed");
          element = element.nextElementSibling;
        }
      }
    },
    { once: true }
  );
});

destroyerNextBtn.addEventListener("click", () => {
  placeDestroyer.style.display = "none";
  placeSubmarine.style.display = "block";
  boardMapModal.addEventListener(
    "click",
    (e) => {
      p4 = Number(e.target.id);
      let element = e.target;
      if (verticalSubmarine.checked) {
        a4 = "y";
        for (let i = 0; i < 3; i++) {
          element = element.parentNode.childNodes[p4 + 10 * i];
          element.classList.add("ship-placed");

        }
      } else {
        a4 = "x";
        for (let i = 0; i < 3; i++) {
          element.classList.add("ship-placed");
          element = element.nextElementSibling;
        }
      }
    },
    { once: true }
  );
});

submarineNextBtn.addEventListener("click", () => {
  placeSubmarine.style.display = "none";
  placePatrolBoat.style.display = "block";
  boardMapModal.addEventListener(
    "click",
    (e) => {
      p5 = Number(e.target.id);

      let element = e.target;
      if (verticalPatrolBoat.checked) {
        a5 = "y";
        for (let i = 0; i < 2; i++) {
          element = element.parentNode.childNodes[p5 + 10 * i];
          element.classList.add("ship-placed");

        }
      } else {
        a5 = "x";
        for (let i = 0; i < 2; i++) {
          element.classList.add("ship-placed");
          element = element.nextElementSibling;
        }
      }
    },
    { once: true }
  );
});

startManualGameBtn.addEventListener("click", () => {
  placePatrolBoat.style.display = "none";
  boardMapModal.style.display = "none";
  renderManualGame(p1, a1, p2, a2, p3, a3, p4, a4, p5, a5);
});
