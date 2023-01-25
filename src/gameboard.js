export const Gameboard = () => {
  let board = [];
  for (let i = 0; i < 100; i++) {
    board.push({ ship: null, isOccupied: false, isShot: false });
  }

  const placeShip = (ship, position, axis) => {
    for (let i = 0; i < ship.length; i++) {
      if (axis === "x") {
        board[position + i].ship = ship;
        board[position + i].isOccupied = true;
      } else {
        board[position + i * 10].ship = ship;
        board[position + i * 10].isOccupied = true;
      }
    }
  };

  const receiveAttack = (position) => {
    if (board[position].isOccupied) {
      board[position].ship.hit();
    }
    board[position].isShot = true;
  };

  const isGameOver = () => {
    const occupiedSpots = board.filter((spot) => spot.ship !== null);
    return occupiedSpots.every((spot) => spot.ship.isSunk() === true);
  };

  return { board, placeShip, receiveAttack, isGameOver };
};
