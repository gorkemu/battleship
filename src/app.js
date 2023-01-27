import { Game } from "./game";
const game = Game().startNewGame();
const player = game.player;
const ai = game.ai;
const playerBoard = game.playerBoard;
const aiBoard = game.aiBoard;
let isPlayerTurn = true;

export function renderBoards() {
  const playerBoardDom = document.getElementById("player-board");
  const aiBoardDom = document.getElementById("ai-board");

  //player's board
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", `player-cell-${i}`);
    cell.classList.add("cell");
    if (playerBoard.board[i].isOccupied) {
      cell.classList.add("player-cell-ship");
    }
    playerBoardDom.appendChild(cell);
  }

  //ai's board
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    if (aiBoard.board[i].isOccupied) {
      cell.classList.add("ai-cell-ship");
    }
    //add event listener to click attack
    cell.addEventListener("click", () => {
      if (!isPlayerTurn) {
        return;
      }
      if (player.previousAttacks.includes(i)) {
        return;
      }
      isPlayerTurn = false;
      player.previousAttacks.push(i);
      const attackResult = aiBoard.receiveAttack(i);
      if (attackResult === "hit") {
        cell.classList.add("hit-ship");
        if (aiBoard.isAllSunk()) {
          gameOver("You");
          return;
        }
      } else if (attackResult === "miss") {
        cell.classList.add("miss");
      }

      setTimeout(() => {
        const randomNum = ai.randomAttack(playerBoard);
        handleAIAttack(randomNum, playerBoard.receiveAttack(randomNum));
        if (playerBoard.isAllSunk()) {
          gameOver("AI");
          return;
        }
        isPlayerTurn = true;
      }, 1000);
    });
    aiBoardDom.appendChild(cell);
  }
}

function handleAIAttack(index, attackResult) {
  const cell = document.getElementById(`player-cell-${index}`);
  if (attackResult === "hit") {
    cell.classList.add("hit-ship");
  } else if (attackResult === "miss") {
    cell.classList.add("miss");
  }
}

function gameOver(player) {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";
  const message = document.querySelector("#modal-content");
  message.textContent = `Game Over! ${player} won!`;
}

const startAgainBtn = document.querySelector(".start-again-btn");
startAgainBtn.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
  //Start a new game
});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
});
