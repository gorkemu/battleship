import { Ship } from "../ship";

describe("Ship factory function", () => {
  let testShip;
  beforeEach(() => {
    testShip = Ship(4);
  });

  test("length", () => {
    expect(testShip.length).toBe(4);
  });

  test("increment hits after hit", () => {
    testShip.hit();
    expect(testShip.hits).toBe(1);
  });

  test("should not sink after 3 hits", () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
  });

  test("should sink after 4 hits", () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
  });
});
