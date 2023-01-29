import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe("place ship horizontally", () => {
  const testBoard = Gameboard();
  const testShip = Ship(2);
  beforeEach(() => {
    testBoard.placeShip(testShip, 6, "x");
  });

  test("first spot should be occupied", () => {
    expect(testBoard.board[6].isOccupied).toBe(true);
  });

  test("first spot should now have that ship", () => {
    expect(testBoard.board[6].ship).toBe(testShip);
  });

  test("second spot should be occupied", () => {
    expect(testBoard.board[7].isOccupied).toBe(true);
  });

  test("second spot should now have that ship", () => {
    expect(testBoard.board[7].ship).toBe(testShip);
  });

  test("other spots should not be occupied", () => {
    const shotSpots = testBoard.board.filter(
      (spot) => spot.isOccupied === true
    );
    expect(shotSpots.length).toBe(2);
  });
});

describe("place ship vertically", () => {
  const testBoard = Gameboard();
  const testShip = Ship(3);
  beforeEach(() => {
    testBoard.placeShip(testShip, 2, "y");
  });

  test("first spot should be occupied", () => {
    expect(testBoard.board[2].isOccupied).toBe(true);
  });

  test("first spot should now have that ship", () => {
    expect(testBoard.board[2].ship).toBe(testShip);
  });

  test("second spot should be occupied", () => {
    expect(testBoard.board[12].isOccupied).toBe(true);
  });

  test("second spot should now have that ship", () => {
    expect(testBoard.board[12].ship).toBe(testShip);
  });

  test("third spot should be occupied", () => {
    expect(testBoard.board[22].isOccupied).toBe(true);
  });

  test("third spot should now have that ship", () => {
    expect(testBoard.board[22].ship).toBe(testShip);
  });

  test("other spots should not be occupied", () => {
    const shotSpots = testBoard.board.filter(
      (spot) => spot.isOccupied === true
    );
    expect(shotSpots.length).toBe(3);
  });
});

describe("prevent inappropriate placement", () => {
  const testBoard = Gameboard();
  const testShip = Ship(4);

  test("the ship should not extend beyond the game board (x axis)", () => {
    testBoard.placeShip(testShip, 7, "x");
    expect(testBoard.board[7].isOccupied).toBe(false);
  });

  test("the ship should not extend beyond the game board (y axis)", () => {
    testBoard.placeShip(testShip, 75, "y");
    expect(testBoard.board[75].isOccupied).toBe(false);
  });

  test("the ship should not be placed if one or more of the spots for this ship are already occupied", () => {
    testBoard.placeShip(testShip, 2, "x");
    const testShip2 = Ship(3);
    testBoard.placeShip(testShip2, 3, "y");
    expect(testBoard.board[13].isOccupied).toBe(false);
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
    expect(testShip.hits).toBe(1);
  });

  test("spot should be shot after attack", () => {
    testBoard.receiveAttack(7);
    expect(testBoard.board[7].isShot).toBe(true);
  });

  test("another spot should not be shot", () => {
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
  let testShip1;
  let testShip2;
  beforeEach(() => {
    testBoard = Gameboard();
    testShip1 = Ship(4);
    testShip2 = Ship(3);
    testBoard.placeShip(testShip1, 6, "x");
    testBoard.placeShip(testShip2, 16, "x");
  });

  test("isAllSunk should return false if not all ships are sunk", () => {
    testBoard.receiveAttack(6);
    testBoard.receiveAttack(7);
    testBoard.receiveAttack(8);
    testBoard.receiveAttack(16);
    testBoard.receiveAttack(17);
    testBoard.receiveAttack(18);
    expect(testBoard.isAllSunk()).toBe(false);
  });

  test("isAllSunk should return true when all ships are sunk", () => {
    testBoard.receiveAttack(6);
    testBoard.receiveAttack(7);
    testBoard.receiveAttack(8);
    testBoard.receiveAttack(9);
    testBoard.receiveAttack(16);
    testBoard.receiveAttack(17);
    testBoard.receiveAttack(18);
    testBoard.receiveAttack(19);
    expect(testBoard.isAllSunk()).toBe(true);
  });
});
