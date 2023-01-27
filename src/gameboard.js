export const Gameboard = () => {
  let board = [];
  for (let i = 0; i < 100; i++) {
    board.push({ ship: null, isOccupied: false, isShot: false });
  }

  const validatePlacement = (ship, startPosition, axis) => {
    if (
      (axis === "x" && (startPosition % 10) + ship.length <= 10) ||
      (axis === "y" &&
        (Math.floor(startPosition / 10) % 10) + ship.length <= 10)
    ) {
      for (let i = 0; i < ship.length; i++) {
        let position;
        if (axis === "x") {
          position = startPosition + i;
        } else {
          position = startPosition + i * 10;
        }
        if (board[position].isOccupied) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  const placeShip = (ship, startPosition, axis) => {
    if (validatePlacement(ship, startPosition, axis)) {
      if (axis === "x") {
        for (let i = 0; i < ship.length; i++) {
          board[startPosition + i].ship = ship;
          board[startPosition + i].isOccupied = true;
        }
      }

      if (axis === "y") {
        for (let i = 0; i < ship.length; i++) {
          board[startPosition + i * 10].ship = ship;
          board[startPosition + i * 10].isOccupied = true;
        }
      }
    }
  };

  const placeShipRandomly = (ship) => {
    let randomPosition = Math.floor(Math.random() * 100);
    let randomAxis = Math.random() < 0.5 ? "x" : "y";
    while (!validatePlacement(ship, randomPosition, randomAxis)) {
      randomPosition = Math.floor(Math.random() * 100);
      randomAxis = Math.random() < 0.5 ? "x" : "y";
    }
    placeShip(ship, randomPosition, randomAxis);
  };

  const receiveAttack = (position) => {
    board[position].isShot = true;
    let attackResult = "miss";
    if (board[position].isOccupied) {
      board[position].ship.hit();
      attackResult = "hit";
    }
    return attackResult;
  };

  const isAllSunk = () => {
    const occupiedSpots = board.filter((spot) => spot.ship !== null);
    return occupiedSpots.every((spot) => spot.ship.isSunk() === true);
  };

  return {
    get board() {
      return board;
    },
    placeShip,
    placeShipRandomly,
    receiveAttack,
    isAllSunk,
  };
};
