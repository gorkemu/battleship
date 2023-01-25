import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe("place ship in x axis", () => {
  const testBoard = Gameboard();
  const testShip = Ship(4);
  beforeEach(() => {
    testBoard.placeShip(testShip, 6, "x");
  });

  test("first cell should be occupied", () => {
    expect(testBoard.board[6].isOccupied).toBe(true);
    expect(testBoard.board[6].ship).toBe(testShip);
  });

  test("second cell should be occupied", () => {
    expect(testBoard.board[7].isOccupied).toBe(true);
    expect(testBoard.board[7].ship).toBe(testShip);
  });

  test("third cell should be occupied", () => {
    expect(testBoard.board[8].isOccupied).toBe(true);
    expect(testBoard.board[8].ship).toBe(testShip);
  });

  test("fourth cell should be occupied", () => {
    expect(testBoard.board[9].isOccupied).toBe(true);
    expect(testBoard.board[9].ship).toBe(testShip);
  });

  test("other cells should not be occupied", () => {
    expect(testBoard.board[5].isOccupied).toBe(false);
    expect(testBoard.board[5].ship).toBe(null);
  });
});

describe("place ship in y axis", () => {
  const testBoard = Gameboard();
  const testShip = Ship(3);
  beforeEach(() => {
    testBoard.placeShip(testShip, 2, "y");
  });

  test("first cell should be occupied", () => {
    expect(testBoard.board[2].isOccupied).toBe(true);
    expect(testBoard.board[2].ship).toBe(testShip);
  });

  test("second cell should be occupied", () => {
    expect(testBoard.board[12].isOccupied).toBe(true);
    expect(testBoard.board[12].ship).toBe(testShip);
  });

  test("third cell should be occupied", () => {
    expect(testBoard.board[22].isOccupied).toBe(true);
    expect(testBoard.board[22].ship).toBe(testShip);
  });

  test("other cells should not be occupied", () => {
    expect(testBoard.board[32].isOccupied).toBe(false);
    expect(testBoard.board[32].ship).toBe(null);
  });
});

describe("receive attack", () => {
  let testBoard;
  let testShip;
  beforeEach(() => {
    testBoard = Gameboard();
    testShip = Ship(4);
    testBoard.placeShip(testShip, 6, "x");
  });

  test("increment hits after attack", () => {
    testBoard.receiveAttack(7);
    expect(testShip.getHits()).toBe(1);
  });

  test("cell should be shot after attack", () => {
    testBoard.receiveAttack(7);
    expect(testBoard.board[7].isShot).toBe(true);
  });
    
  test("another cell should not be shot", () => {
    testBoard.receiveAttack(7);
    expect(testBoard.board[8].isShot).toBe(false);
  });
    
  test("not sink ship after 3 attacks", () => {
    testBoard.receiveAttack(6);
    testBoard.receiveAttack(7);
    testBoard.receiveAttack(8);
    expect(testShip.isSunk()).toBe(false);
  });

  test("sink ship after 4 attacks", () => {
    testBoard.receiveAttack(6);
    testBoard.receiveAttack(7);
    testBoard.receiveAttack(8);
    testBoard.receiveAttack(9);
    expect(testShip.isSunk()).toBe(true);
  });
});

describe("game over", () => {
  let testBoard;
  let testShip;
  beforeEach(() => {
    testBoard = Gameboard();
    testShip = Ship(4);
    testBoard.placeShip(testShip, 6, "x");
  });

  test("not game over if not all ships are sinked", () => {
    testBoard.receiveAttack(6);
    testBoard.receiveAttack(7);
    testBoard.receiveAttack(8);
    expect(testBoard.isGameOver()).toBe(false);
  });

  test("game over when all ships are sinked", () => {
    testBoard.receiveAttack(6);
    testBoard.receiveAttack(7);
    testBoard.receiveAttack(8);
    testBoard.receiveAttack(9);
    expect(testBoard.isGameOver()).toBe(true);
  });
});
