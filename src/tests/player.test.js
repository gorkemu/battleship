import { Player } from "../player";
import { AI } from "../player";
import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe("player attack", () => {
  let player;
  let enemyBoard;
  let enemyShip;
  beforeEach(() => {
    player = Player();
    enemyBoard = Gameboard();
    enemyShip = Ship(3);
    enemyBoard.placeShip(enemyShip, 6, "x");
  });

  test("cell should be shot after attack", () => {
    player.attack(enemyBoard, 4);
    expect(enemyBoard.board[4].isShot).toBe(true);
  });

  test("if it's a hit, increment ship's hits after attack", () => {
    player.attack(enemyBoard, 6);
    expect(enemyBoard.board[6].ship.hits).toBe(1);
  });

  test("positions should be added to player's previousAttacks", () => {
    player.attack(enemyBoard, 4);
    player.attack(enemyBoard, 5);
    expect(player.previousAttacks).toEqual([4, 5]);
  });

  test("the ship on the attacked cell should be equal to the actual ship ", () => {
    player.attack(enemyBoard, 6);
    expect(enemyBoard.board[6].ship).toEqual(enemyShip);
  });

  test("sink ship after 4 attacks", () => {
    player.attack(enemyBoard, 6);
    player.attack(enemyBoard, 7);
    player.attack(enemyBoard, 8);
    player.attack(enemyBoard, 9);
    expect(enemyShip.isSunk()).toBe(true);
  });

  test("game should be over when all ships are sunk", () => {
    player.attack(enemyBoard, 6);
    player.attack(enemyBoard, 7);
    player.attack(enemyBoard, 8);
    player.attack(enemyBoard, 9);
    expect(enemyBoard.isAllSunk()).toBe(true);
  });
});

describe("AI attack", () => {
  let ai;
  let playerBoard;
  let playerShip;
  beforeEach(() => {
    ai = AI();
    playerBoard = Gameboard();
    playerShip = Ship(10);
    playerBoard.placeShip(playerShip, 0, "x");
    playerBoard.placeShip(playerShip, 10, "x");
    playerBoard.placeShip(playerShip, 20, "x");
    playerBoard.placeShip(playerShip, 30, "x");
    playerBoard.placeShip(playerShip, 40, "x");
    playerBoard.placeShip(playerShip, 50, "x");
    playerBoard.placeShip(playerShip, 60, "x");
    playerBoard.placeShip(playerShip, 70, "x");
    playerBoard.placeShip(playerShip, 80, "x");
    playerBoard.placeShip(playerShip, 90, "x");
  });

  test("a cell should be shot after attack", () => {
    ai.attack(playerBoard);
    const shotSpots = playerBoard.board.filter((spot) => spot.isShot === true);
    expect(shotSpots.length).toBe(1);
  });
});
