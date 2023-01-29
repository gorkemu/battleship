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

    const playerCarrier = Ship(5);
    const playerBattleship = Ship(4);
    const playerDestroyer = Ship(3);
    const playerSubmarine = Ship(3);
    const playerPatrolBoat = Ship(2);

    const aiCarrier = Ship(5);
    const aiBattleship = Ship(4);
    const aiDestroyer = Ship(3);
    const aiSubmarine = Ship(3);
    const aiPatrolBoat = Ship(2);

    playerBoard.placeShipRandomly(playerCarrier);
    playerBoard.placeShipRandomly(playerBattleship);
    playerBoard.placeShipRandomly(playerDestroyer);
    playerBoard.placeShipRandomly(playerSubmarine);
    playerBoard.placeShipRandomly(playerPatrolBoat);

    aiBoard.placeShipRandomly(aiCarrier);
    aiBoard.placeShipRandomly(aiBattleship);
    aiBoard.placeShipRandomly(aiDestroyer);
    aiBoard.placeShipRandomly(aiSubmarine);
    aiBoard.placeShipRandomly(aiPatrolBoat);

    return { player, ai, playerBoard, aiBoard };
  };

  return {
    startNewGame,
  };
};
