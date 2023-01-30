import { renderBoards } from "./app";

const startRandomGameBtn = document.querySelector(".start-random-btn");
startRandomGameBtn.addEventListener("click", () => {
  const startRandomGameModal = document.querySelector(
    "#start-random-game-modal"
  );
  startRandomGameModal.style.display = "none";
  renderBoards();
});

// const placeShipsBtn = document.querySelector(".place-ships-btn");
// placeShipsBtn.addEventListener("click", () => {
//   const placeShipsForm = document.querySelector("#place-ships-modal");
//   placeShipsForm.style.display = "block";
//   const startRandomGameModal = document.querySelector("#start-random-game-modal");
//   startRandomGameModal.style.display = "none";

//   for (let i = 0; i < 100; i++) {
//     const boardMapModal = document.getElementById("board-map-modal");
//     let cell = document.createElement("div");
//     cell.setAttribute("id", i);
//     cell.classList.add("map-cell");
//     cell.classList.add("cell");
//     boardMapModal.appendChild(cell);
//   }

//   const carrier = document.getElementById("carrier-label");
//   carrier.addEventListener("click", () => {
//     const boardMapModal = document.getElementById("board-map-modal");
//     boardMapModal.addEventListener("click", (e) => {
//       let element = e.target;
//       for (let i = 0; i < 5; i++) {
//         element.style.backgroundColor = "black";
//         element = element.nextElementSibling;
//       }
//       const carrierValue = document.getElementById("carrier-starting-point");
//       carrierValue.value = e.target.id;
//     }, { once: true })
//   });
// });
