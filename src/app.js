import { Game } from "./game";

const game = Game().startNewGame();
const player = game.player;
const ai = game.ai;
const playerBoard = game.playerBoard;
const aiBoard = game.aiBoard;
let isPlayerTurn = true;

export function renderBoards() {
  const boards = document.getElementById("boards");
  boards.style.visibility = "visible";
  const playerBoardDom = document.getElementById("player-board");
  const aiBoardDom = document.getElementById("ai-board");

  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", `player-cell-${i}`);
    cell.classList.add("cell");
    if (playerBoard.board[i].isOccupied) {
      cell.classList.add("player-cell-ship");
    }
    playerBoardDom.appendChild(cell);
  }

  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", `ai-cell-${i}`);
    cell.classList.add("cell");
    cell.classList.add("ai-cell");
    if (aiBoard.board[i].isOccupied) {
      cell.classList.add("ai-cell-ship");
    }
    cell.addEventListener("click", () => {
      if (!isPlayerTurn) {
        return;
      }
      if (player.previousAttacks.includes(i)) {
        return;
      }
      isPlayerTurn = false;
      const playerAttackResult = player.attack(aiBoard, i);
      if (playerAttackResult === "hit") {
        cell.classList.add("hit-ship");
        if (aiBoard.isAllSunk()) {
          gameOver("You");
          return;
        }
      } else if (playerAttackResult === "miss") {
        cell.classList.add("miss");
      }

      setTimeout(() => {
        const aiAttackResult = ai.attack(playerBoard);
        handleAIAttack(aiAttackResult.randomNum, aiAttackResult.attackResult);
        
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
  const gameOverModal = document.querySelector("#game-over-modal");
  gameOverModal.style.display = "block";
  const message = document.querySelector("#game-over-modal-content");
  message.textContent = `Game Over! ${player} won!`;
}

const startAgainBtn = document.querySelector(".start-again-btn");
startAgainBtn.addEventListener("click", () => {
  const gameOverModal = document.querySelector("#game-over-modal");
  gameOverModal.style.display = "none";
  location.reload();
});
