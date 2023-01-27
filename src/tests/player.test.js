import { Player } from "../player";
import { AI } from "../player";
import { Gameboard } from "../gameboard";
import { Ship } from "../ship";
import { Game } from "../game";

describe("attack", () => {
  let player;
  let ai;
  let playerBoard;
  let enemyBoard;
  let enemyShip;
  beforeEach(() => {
    player = Player("Test Player");
    ai = AI("AI");
    playerBoard = Gameboard();
    enemyBoard = Gameboard();
    enemyShip = Ship(4);
    enemyBoard.placeShip(enemyShip, 6, "x");
  });

  test("cell should be shot after attack", () => {
    player.attack(enemyBoard, 4);
    expect(enemyBoard.board[4].isShot).toBe(true);
  });

  test("a random cell should be shot with random attack", () => {
    ai.randomAttack(playerBoard);
    const shotSpots = playerBoard.board.filter((spot) => spot.isShot === true);
    expect(shotSpots.length).toBe(1);
  });

  test("enemy ship should be hit with attack on it", () => {
    player.attack(enemyBoard, 6);
    expect(enemyShip.hits).toBe(1);
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
