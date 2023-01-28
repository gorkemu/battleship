import { renderBoards } from "./app";

const startGameBtn = document.querySelector(".start-btn");
startGameBtn.addEventListener("click", () => {
  const startGameModal = document.querySelector("#start-game-modal");
  startGameModal.style.display = "none";
  renderBoards();
});
