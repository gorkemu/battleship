import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { AI } from "./player";
import { Ship } from "./ship";

export const Game = () => {
  let currentPlayer;
  const player = Player();
  const ai = AI();

  const startNewGame = () => {
    currentPlayer = player;
    const playerBoard = Gameboard();
    const aiBoard = Gameboard();

    const playerShip1 = Ship(5);
    const playerShip2 = Ship(4);
    const playerShip3 = Ship(3);
    const playerShip4 = Ship(2);

    const aiShip1 = Ship(5);
    const aiShip2 = Ship(4);
    const aiShip3 = Ship(3);
    const aiShip4 = Ship(2);

    playerBoard.placeShipRandomly(playerShip1);
    playerBoard.placeShipRandomly(playerShip2);
    playerBoard.placeShipRandomly(playerShip3);
    playerBoard.placeShipRandomly(playerShip4);

    aiBoard.placeShipRandomly(aiShip1);
    aiBoard.placeShipRandomly(aiShip2);
    aiBoard.placeShipRandomly(aiShip3);
    aiBoard.placeShipRandomly(aiShip4);

    return { player, ai, playerBoard, aiBoard };
  };

  return {
    startNewGame,
  };
};
