/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBoards\": () => (/* binding */ renderBoards)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst game = (0,_game__WEBPACK_IMPORTED_MODULE_0__.Game)().startNewGame();\nconst player = game.player;\nconst ai = game.ai;\nconst playerBoard = game.playerBoard;\nconst aiBoard = game.aiBoard;\nlet isPlayerTurn = true;\n\nfunction renderBoards() {\n  const boards = document.getElementById(\"boards\");\n  boards.style.visibility = \"visible\";\n  const playerBoardDom = document.getElementById(\"player-board\");\n  const aiBoardDom = document.getElementById(\"ai-board\");\n\n  for (let i = 0; i < 100; i++) {\n    let cell = document.createElement(\"div\");\n    cell.setAttribute(\"id\", `player-cell-${i}`);\n    cell.classList.add(\"cell\");\n    if (playerBoard.board[i].isOccupied) {\n      cell.classList.add(\"player-cell-ship\");\n    }\n    playerBoardDom.appendChild(cell);\n  }\n\n  for (let i = 0; i < 100; i++) {\n    let cell = document.createElement(\"div\");\n    cell.setAttribute(\"id\", `ai-cell-${i}`);\n    cell.classList.add(\"cell\");\n    cell.classList.add(\"ai-cell\");\n    if (aiBoard.board[i].isOccupied) {\n      cell.classList.add(\"ai-cell-ship\");\n    }\n    cell.addEventListener(\"click\", () => {\n      if (!isPlayerTurn) {\n        return;\n      }\n      if (player.previousAttacks.includes(i)) {\n        return;\n      }\n      isPlayerTurn = false;\n      const playerAttackResult = player.attack(aiBoard, i);\n      if (playerAttackResult === \"hit\") {\n        cell.classList.add(\"hit-ship\");\n        if (aiBoard.isAllSunk()) {\n          gameOver(\"You\");\n          return;\n        }\n      } else if (playerAttackResult === \"miss\") {\n        cell.classList.add(\"miss\");\n      }\n\n      setTimeout(() => {\n        const aiAttackResult = ai.attack(playerBoard);\n        handleAIAttack(aiAttackResult.randomNum, aiAttackResult.attackResult);\n\n        if (playerBoard.isAllSunk()) {\n          gameOver(\"AI\");\n          return;\n        }\n        isPlayerTurn = true;\n      }, 1000);\n    });\n    aiBoardDom.appendChild(cell);\n  }\n}\n\nfunction handleAIAttack(index, attackResult) {\n  const cell = document.getElementById(`player-cell-${index}`);\n  if (attackResult === \"hit\") {\n    cell.classList.add(\"hit-ship\");\n  } else if (attackResult === \"miss\") {\n    cell.classList.add(\"miss\");\n  }\n}\n\nfunction gameOver(player) {\n  const gameOverModal = document.querySelector(\"#game-over-modal\");\n  gameOverModal.style.display = \"block\";\n  const message = document.querySelector(\"#game-over-modal-content\");\n  message.textContent = `Game Over! ${player} won!`;\n}\n\nconst startAgainBtn = document.querySelector(\".start-again-btn\");\nstartAgainBtn.addEventListener(\"click\", () => {\n  const gameOverModal = document.querySelector(\"#game-over-modal\");\n  gameOverModal.style.display = \"none\";\n  location.reload();\n});\n\n\n//# sourceURL=webpack://battleship/./src/app.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\n\n\nconst Game = () => {\n  let currentPlayer;\n  const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)();\n  const ai = (0,_player__WEBPACK_IMPORTED_MODULE_1__.AI)();\n\n  const startNewGame = () => {\n    currentPlayer = player;\n    const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n    const aiBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n\n    const playerCarrier = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(5);\n    const playerBattleship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(4);\n    const playerDestroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);\n    const playerSubmarine = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);\n    const playerPatrolBoat = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2);\n\n    const aiCarrier = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(5);\n    const aiBattleship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(4);\n    const aiDestroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);\n    const aiSubmarine = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);\n    const aiPatrolBoat = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2);\n\n    playerBoard.placeShipRandomly(playerCarrier);\n    playerBoard.placeShipRandomly(playerBattleship);\n    playerBoard.placeShipRandomly(playerDestroyer);\n    playerBoard.placeShipRandomly(playerSubmarine);\n    playerBoard.placeShipRandomly(playerPatrolBoat);\n\n    aiBoard.placeShipRandomly(aiCarrier);\n    aiBoard.placeShipRandomly(aiBattleship);\n    aiBoard.placeShipRandomly(aiDestroyer);\n    aiBoard.placeShipRandomly(aiSubmarine);\n    aiBoard.placeShipRandomly(aiPatrolBoat);\n\n    return { player, ai, playerBoard, aiBoard };\n  };\n\n  return {\n    startNewGame,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nconst Gameboard = () => {\n  let board = [];\n  for (let i = 0; i < 100; i++) {\n    board.push({ ship: null, isOccupied: false, isShot: false });\n  }\n\n  const validatePlacement = (ship, startPosition, axis) => {\n    if (\n      (axis === \"x\" && (startPosition % 10) + ship.length <= 10) ||\n      (axis === \"y\" &&\n        (Math.floor(startPosition / 10) % 10) + ship.length <= 10)\n    ) {\n      for (let i = 0; i < ship.length; i++) {\n        let position;\n        if (axis === \"x\") {\n          position = startPosition + i;\n        } else {\n          position = startPosition + i * 10;\n        }\n        if (board[position].isOccupied) {\n          return false;\n        }\n      }\n      return true;\n    }\n    return false;\n  };\n\n  const placeShip = (ship, startPosition, axis) => {\n    if (validatePlacement(ship, startPosition, axis)) {\n      if (axis === \"x\") {\n        for (let i = 0; i < ship.length; i++) {\n          board[startPosition + i].ship = ship;\n          board[startPosition + i].isOccupied = true;\n        }\n      }\n\n      if (axis === \"y\") {\n        for (let i = 0; i < ship.length; i++) {\n          board[startPosition + i * 10].ship = ship;\n          board[startPosition + i * 10].isOccupied = true;\n        }\n      }\n    }\n  };\n\n  const placeShipRandomly = (ship) => {\n    let randomPosition = Math.floor(Math.random() * 100);\n    let randomAxis = Math.random() < 0.5 ? \"x\" : \"y\";\n    while (!validatePlacement(ship, randomPosition, randomAxis)) {\n      randomPosition = Math.floor(Math.random() * 100);\n      randomAxis = Math.random() < 0.5 ? \"x\" : \"y\";\n    }\n    placeShip(ship, randomPosition, randomAxis);\n  };\n\n  const receiveAttack = (position) => {\n    board[position].isShot = true;\n    let attackResult = \"miss\";\n    if (board[position].isOccupied) {\n      board[position].ship.hit();\n      attackResult = \"hit\";\n    }\n    return attackResult;\n  };\n\n  const isAllSunk = () => {\n    const occupiedSpots = board.filter((spot) => spot.ship !== null);\n    return occupiedSpots.every((spot) => spot.ship.isSunk() === true);\n  };\n\n  return {\n    get board() {\n      return board;\n    },\n    placeShip,\n    placeShipRandomly,\n    receiveAttack,\n    isAllSunk,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\nconst startRandomGameBtn = document.querySelector(\".start-random-btn\");\nstartRandomGameBtn.addEventListener(\"click\", () => {\n  const startRandomGameModal = document.querySelector(\n    \"#start-random-game-modal\"\n  );\n  startRandomGameModal.style.display = \"none\";\n  (0,_app__WEBPACK_IMPORTED_MODULE_0__.renderBoards)();\n});\n\n// const placeShipsBtn = document.querySelector(\".place-ships-btn\");\n// placeShipsBtn.addEventListener(\"click\", () => {\n//   const placeShipsForm = document.querySelector(\"#place-ships-modal\");\n//   placeShipsForm.style.display = \"block\";\n//   const startRandomGameModal = document.querySelector(\"#start-random-game-modal\");\n//   startRandomGameModal.style.display = \"none\";\n\n//   for (let i = 0; i < 100; i++) {\n//     const boardMapModal = document.getElementById(\"board-map-modal\");\n//     let cell = document.createElement(\"div\");\n//     cell.setAttribute(\"id\", i);\n//     cell.classList.add(\"map-cell\");\n//     cell.classList.add(\"cell\");\n//     boardMapModal.appendChild(cell);\n//   }\n\n//   const carrier = document.getElementById(\"carrier-label\");\n//   carrier.addEventListener(\"click\", () => {\n//     const boardMapModal = document.getElementById(\"board-map-modal\");\n//     boardMapModal.addEventListener(\"click\", (e) => {\n//       let element = e.target;\n//       for (let i = 0; i < 5; i++) {\n//         element.style.backgroundColor = \"black\";\n//         element = element.nextElementSibling;\n//       }\n//       const carrierValue = document.getElementById(\"carrier-starting-point\");\n//       carrierValue.value = e.target.id;\n//     }, { once: true })\n//   });\n// });\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AI\": () => (/* binding */ AI),\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nconst Player = () => {\n  let previousAttacks = [];\n\n  const attack = (gameboard, position) => {\n    if (!gameboard.board[position].isShot) {\n      previousAttacks.push(position);\n      const attackResult = gameboard.receiveAttack(position);\n      return attackResult;\n    }\n  };\n  return {\n    attack,\n    get previousAttacks() {\n      return previousAttacks;\n    },\n  };\n};\n\nconst AI = () => {\n  let previousAttacks = [];\n  let cleverTargets = [];\n\n  const attack = (gameboard) => {\n    let shouldAttackRandomly = !gameboard.board.some(\n      (spot) => spot.isShot && spot.ship && !spot.ship.isSunk()\n    );\n    if (shouldAttackRandomly) {\n      const attackResult = randomAttack(gameboard);\n      return attackResult;\n    } else {\n      const attackResult = cleverAttack(gameboard);\n      return attackResult;\n    }\n  };\n\n  const randomAttack = (gameboard) => {\n    let randomNum = Math.floor(Math.random() * 100);\n\n    while (\n      gameboard.board[randomNum].isShot ||\n      previousAttacks.includes(randomNum)\n    ) {\n      randomNum = Math.floor(Math.random() * 100);\n    }\n    previousAttacks.push(randomNum);\n    const attackResult = gameboard.receiveAttack(randomNum);\n    return {\n      randomNum,\n      attackResult,\n    };\n  };\n\n  const cleverAttack = (gameboard) => {\n    gameboard.board.forEach((tile, i) => {\n      if (tile.isShot && tile.ship && !tile.ship.isSunk()) {\n        if (\n          i - 1 >= 0 &&\n          i % 10 !== 0 &&\n          !gameboard.board[i - 1].isShot &&\n          !cleverTargets.includes(i - 1)\n        ) {\n          cleverTargets.push(i - 1);\n        }\n        if (\n          i + 1 < 100 &&\n          i % 10 !== 9 &&\n          !gameboard.board[i + 1].isShot &&\n          !cleverTargets.includes(i + 1)\n        ) {\n          cleverTargets.push(i + 1);\n        }\n        if (\n          i - 10 >= 0 &&\n          !gameboard.board[i - 10].isShot &&\n          !cleverTargets.includes(i - 10)\n        ) {\n          cleverTargets.push(i - 10);\n        }\n        if (\n          i + 10 < 100 &&\n          !gameboard.board[i + 10].isShot &&\n          !cleverTargets.includes(i + 10)\n        ) {\n          cleverTargets.push(i + 10);\n        }\n      }\n    });\n\n    let randomNum =\n      cleverTargets[Math.floor(Math.random() * cleverTargets.length)];\n    while (\n      previousAttacks.includes(randomNum) ||\n      gameboard.board[randomNum].isShot\n    ) {\n      randomNum =\n        cleverTargets[Math.floor(Math.random() * cleverTargets.length)];\n    }\n    previousAttacks.push(randomNum);\n    const attackResult = gameboard.receiveAttack(randomNum);\n\n    cleverTargets = cleverTargets.filter((val) => val !== randomNum);\n    return {\n      randomNum,\n      attackResult,\n    };\n  };\n\n  return {\n    attack,\n    get previousAttacks() {\n      return previousAttacks;\n    },\n    get cleverTargets() {\n      return cleverTargets;\n    },\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = (length) => {\n  let hits = 0;\n\n  const hit = () => {\n    hits++;\n  };\n\n  const isSunk = () => {\n    return hits >= length;\n  };\n\n  return {\n    get hits() {\n      return hits;\n    },\n    get length() {\n      return length;\n    },\n    hit,\n    isSunk,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;