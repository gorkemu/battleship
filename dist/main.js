/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/app.js":
      /*!********************!*\
  !*** ./src/app.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "renderBoards": () => (/* binding */ renderBoards)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");\n\nconst game = (0,_game__WEBPACK_IMPORTED_MODULE_0__.Game)().startNewGame();\nconst player = game.player;\nconst ai = game.ai;\nconst playerBoard = game.playerBoard;\nconst aiBoard = game.aiBoard;\nlet isPlayerTurn = true;\n\nfunction renderBoards() {\n  const playerBoardDom = document.getElementById("player-board");\n  const aiBoardDom = document.getElementById("ai-board");\n\n  //player\'s board\n  for (let i = 0; i < 100; i++) {\n    let cell = document.createElement("div");\n    cell.setAttribute("id", `player-cell-${i}`);\n    cell.classList.add("cell");\n    if (playerBoard.board[i].isOccupied) {\n      cell.classList.add("player-cell-ship");\n    } \n    playerBoardDom.appendChild(cell);\n  }\n\n  //ai\'s board\n  for (let i = 0; i < 100; i++) {\n    let cell = document.createElement("div");\n    cell.classList.add("cell");\n    if (aiBoard.board[i].isOccupied) {\n      cell.classList.add("ai-cell-ship");\n    }\n    //add event listener to click attack\n    cell.addEventListener("click", () => {\n      if (!isPlayerTurn) {\n        return;\n      }\n      if (player.previousAttacks.includes(i)) {\n        return;\n      }\n      isPlayerTurn = false;\n      player.previousAttacks.push(i);\n      const attackResult = aiBoard.receiveAttack(i);\n      if (attackResult === "hit") {\n        cell.classList.add("hit-ship");\n        if (aiBoard.isAllSunk()) {\n          gameOver("You");\n          return;\n        }\n      } else if (attackResult === "miss") {\n        cell.classList.add("miss");\n      }\n      \n      setTimeout(() => {\n        const randomNum = ai.randomAttack(playerBoard);\n        handleAIAttack(randomNum, playerBoard.receiveAttack(randomNum));\n        if (playerBoard.isAllSunk()) {\n          gameOver("AI");\n          return;\n        }\n        isPlayerTurn = true;\n      }, 1000);\n    });\n    aiBoardDom.appendChild(cell);\n  }\n}\n\nfunction handleAIAttack(index, attackResult) {\n  const cell = document.getElementById(`player-cell-${index}`);\n  if (attackResult === "hit") {\n    cell.classList.add("hit-ship");\n  } else if (attackResult === "miss") {\n    cell.classList.add("miss");\n  }\n}\n\nfunction gameOver(player) {\n  const gameOverModal = document.querySelector(\'#game-over-modal\');\n  gameOverModal.style.display = \'block\';\n  const message = document.querySelector("#game-over-modal-content");\n  message.textContent = `Game Over! ${player} won!`\n}\n\nconst startAgainBtn = document.querySelector(\'.start-again-btn\');\nstartAgainBtn.addEventListener("click", () => {\n  const gameOverModal = document.querySelector(\'#game-over-modal\');\n  gameOverModal.style.display = \'none\';\n  location.reload();\n})\n\nconst closeBtn = document.querySelector(\'.close-btn\');\ncloseBtn.addEventListener(\'click\', function () {\n  const gameOverModal = document.querySelector(\'#game-over-modal\');\n  gameOverModal.style.display = \'none\';\n});\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/app.js?'
        );

        /***/
      },

    /***/ "./src/game.js":
      /*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Game": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");\n\n\n\n\n\nconst Game = () => {\n  let currentPlayer;\n  const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)();\n  const ai = (0,_player__WEBPACK_IMPORTED_MODULE_1__.AI)();\n\n  const startNewGame = () => {\n    currentPlayer = player;\n    const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n    const aiBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n\n    const playerShip1 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(5);\n    const playerShip2 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(4);\n    const playerShip3 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);\n    const playerShip4 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2);\n\n    const aiShip1 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(5);\n    const aiShip2 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(4);\n    const aiShip3 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);\n    const aiShip4 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2);\n\n    playerBoard.placeShipRandomly(aiShip1);\n    playerBoard.placeShipRandomly(aiShip2);\n    playerBoard.placeShipRandomly(aiShip3);\n    playerBoard.placeShipRandomly(aiShip4);\n\n    aiBoard.placeShipRandomly(playerShip1);\n    aiBoard.placeShipRandomly(playerShip2);\n    aiBoard.placeShipRandomly(playerShip3);\n    aiBoard.placeShipRandomly(playerShip4);\n\n    return { player, ai, playerBoard, aiBoard };\n  };\n\n  return {\n    startNewGame,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/game.js?'
        );

        /***/
      },

    /***/ "./src/gameboard.js":
      /*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)\n/* harmony export */ });\nconst Gameboard = () => {\n  let board = [];\n  for (let i = 0; i < 100; i++) {\n    board.push({ ship: null, isOccupied: false, isShot: false });\n  }\n\n  const validatePlacement = (ship, startPosition, axis) => {\n    if (\n      (axis === "x" && (startPosition % 10) + ship.length <= 10) ||\n      (axis === "y" &&\n        (Math.floor(startPosition / 10) % 10) + ship.length <= 10)\n    ) {\n      for (let i = 0; i < ship.length; i++) {\n        let position;\n        if (axis === "x") {\n          position = startPosition + i;\n        } else {\n          position = startPosition + i * 10;\n        }\n        if (board[position].isOccupied) {\n          return false;\n        }\n      }\n      return true;\n    }\n    return false;\n  };\n\n  const placeShip = (ship, startPosition, axis) => {\n    if (validatePlacement(ship, startPosition, axis)) {\n      if (axis === "x") {\n        for (let i = 0; i < ship.length; i++) {\n          board[startPosition + i].ship = ship;\n          board[startPosition + i].isOccupied = true;\n        }\n      }\n\n      if (axis === "y") {\n        for (let i = 0; i < ship.length; i++) {\n          board[startPosition + i * 10].ship = ship;\n          board[startPosition + i * 10].isOccupied = true;\n        }\n      }\n    }\n  };\n\n  const placeShipRandomly = (ship) => {\n    let randomPosition = Math.floor(Math.random() * 100);\n    let randomAxis = Math.random() < 0.5 ? "x" : "y";\n    while (!validatePlacement(ship, randomPosition, randomAxis)) {\n      randomPosition = Math.floor(Math.random() * 100);\n      randomAxis = Math.random() < 0.5 ? "x" : "y";\n    }\n    placeShip(ship, randomPosition, randomAxis);\n  };\n\n  const receiveAttack = (position) => {\n    board[position].isShot = true;\n    let attackResult = "miss";\n    if (board[position].isOccupied) {\n      board[position].ship.hit();\n      attackResult = "hit";\n    }\n    return attackResult;\n  };\n\n  const isAllSunk = () => {\n    const occupiedSpots = board.filter((spot) => spot.ship !== null);\n    return occupiedSpots.every((spot) => spot.ship.isSunk() === true);\n  };\n\n  return {\n    get board() {\n      return board;\n    },\n    placeShip,\n    placeShipRandomly,\n    receiveAttack,\n    isAllSunk,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\nconst startGameBtn = document.querySelector('.start-btn');\nstartGameBtn.addEventListener(\"click\", () => {\n    const startGameModal = document.querySelector('#start-game-modal');\n    startGameModal.style.display = 'none';\n    (0,_app__WEBPACK_IMPORTED_MODULE_0__.renderBoards)();\n})\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?"
        );

        /***/
      },

    /***/ "./src/player.js":
      /*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AI": () => (/* binding */ AI),\n/* harmony export */   "Player": () => (/* binding */ Player)\n/* harmony export */ });\nconst Player = () => {\n  let previousAttacks = [];\n  const attack = (gameboard, position) => {\n    if (!gameboard.board[position].isShot) {\n      previousAttacks.push(position);\n      gameboard.receiveAttack(position);\n    }\n  };\n  return {\n    attack,\n    previousAttacks,\n  };\n};\n\nconst AI = () => {\n  let previousAttacks = [];\n  const randomAttack = (gameboard) => {\n    let randomNum = Math.floor(Math.random() * 100);\n\n    while (\n      gameboard.board[randomNum].isShot ||\n      previousAttacks.includes(randomNum)\n    ) {\n      randomNum = Math.floor(Math.random() * 100);\n    }\n    previousAttacks.push(randomNum);\n    gameboard.receiveAttack(randomNum);\n    return randomNum;\n  };\n  return {\n    randomAttack,\n    previousAttacks,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/player.js?'
        );

        /***/
      },

    /***/ "./src/ship.js":
      /*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Ship": () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = (length) => {\n  let hits = 0;\n\n  const hit = () => {\n    hits++;\n  };\n\n  const isSunk = () => {\n    return hits >= length;\n  };\n\n  return {\n    get length() {\n      return length;\n    },\n    get hits() {\n      return hits;\n    },\n    hit,\n    isSunk,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
