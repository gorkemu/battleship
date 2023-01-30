import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { AI } from "./player";
import { Ship } from "./ship";

export const Game = () => {
  const player = Player();
  const ai = AI();
  const aiBoard = Gameboard();
  const playerBoard = Gameboard();

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

  aiBoard.placeShipRandomly(aiCarrier);
  aiBoard.placeShipRandomly(aiBattleship);
  aiBoard.placeShipRandomly(aiDestroyer);
  aiBoard.placeShipRandomly(aiSubmarine);
  aiBoard.placeShipRandomly(aiPatrolBoat);

  const startRandomGame = () => {
    playerBoard.placeShipRandomly(playerCarrier);
    playerBoard.placeShipRandomly(playerBattleship);
    playerBoard.placeShipRandomly(playerDestroyer);
    playerBoard.placeShipRandomly(playerSubmarine);
    playerBoard.placeShipRandomly(playerPatrolBoat);
    return { player, ai, playerBoard, aiBoard };
  };

  const startManualGame = (p1, p2, p3, p4, p5) => {
    playerBoard.placeShip(playerCarrier, p1, "x");
    playerBoard.placeShip(playerBattleship, p2, "x");
    playerBoard.placeShip(playerDestroyer, p3, "x");
    playerBoard.placeShip(playerSubmarine, p4, "x");
    playerBoard.placeShip(playerPatrolBoat, p5, "x");
    return { player, ai, playerBoard, aiBoard };
  };

  return {
    startRandomGame,
    startManualGame,
  };
};
