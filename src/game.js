import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";

export const Game = () => {

  const startNewGame = () => {
    const player = Player();
    const ai = Player();

    const playerBoard = Gameboard();
    const aiBoard = Gameboard();

    const playerShip1 = Ship(4);
    const playerShip2 = Ship(3);
    const playerShip3 = Ship(2);

    const aiShip1 = Ship(4);
    const aiShip2 = Ship(3);
    const aiShip3 = Ship(2);

    playerBoard.placeShipRandomly(aiShip1);
    playerBoard.placeShipRandomly(aiShip2);
    playerBoard.placeShipRandomly(aiShip3);

    aiBoard.placeShipRandomly(playerShip1);
    aiBoard.placeShipRandomly(playerShip2);
    aiBoard.placeShipRandomly(playerShip3);

    return { player, ai, playerBoard, aiBoard };
  };
    
    return {
        startNewGame,
    };
};
