import { Ship } from "../ship";

describe("Ship factory function", () => {
  let testShip;
  beforeEach(() => {
    testShip = Ship(4);
  });

  test("increment ship's hits after it is hit", () => {
    testShip.hit();
    expect(testShip.hits).toBe(1);
  });

  test("ship should not sink if not all cells of the ship are hit", () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
  });

  test("ship should sink all cells of the ship are hit", () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
  });
});
