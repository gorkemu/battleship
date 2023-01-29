export const Player = () => {
  let previousAttacks = [];

  const attack = (gameboard, position) => {
    if (!gameboard.board[position].isShot) {
      previousAttacks.push(position);
      const attackResult = gameboard.receiveAttack(position);
      return attackResult;
    }
  };
  return {
    attack,
    get previousAttacks() {
      return previousAttacks;
    },
  };
};

export const AI = () => {
  let previousAttacks = [];
  let cleverTargets = [];

  const attack = (gameboard) => {
    let shouldAttackRandomly = !gameboard.board.some(
      (spot) => spot.isShot && spot.ship && !spot.ship.isSunk()
    );
    if (shouldAttackRandomly) {
      const attackResult = randomAttack(gameboard);
      return attackResult;
    } else {
      const attackResult = cleverAttack(gameboard);
      return attackResult;
    }
  };

  const randomAttack = (gameboard) => {
    let randomNum = Math.floor(Math.random() * 100);

    while (
      gameboard.board[randomNum].isShot ||
      previousAttacks.includes(randomNum)
    ) {
      randomNum = Math.floor(Math.random() * 100);
    }
    previousAttacks.push(randomNum);
    const attackResult = gameboard.receiveAttack(randomNum);
    return {
      randomNum,
      attackResult,
    };
  };

  const cleverAttack = (gameboard) => {
    gameboard.board.forEach((tile, i) => {
      if (tile.isShot && tile.ship && !tile.ship.isSunk()) {
        if (
          i - 1 >= 0 &&
          i % 10 !== 0 &&
          !gameboard.board[i - 1].isShot &&
          !cleverTargets.includes(i - 1)
        ) {
          cleverTargets.push(i - 1);
        }
        if (
          i + 1 < 100 &&
          i % 10 !== 9 &&
          !gameboard.board[i + 1].isShot &&
          !cleverTargets.includes(i + 1)
        ) {
          cleverTargets.push(i + 1);
        }
        if (
          i - 10 >= 0 &&
          !gameboard.board[i - 10].isShot &&
          !cleverTargets.includes(i - 10)
        ) {
          cleverTargets.push(i - 10);
        }
        if (
          i + 10 < 100 &&
          !gameboard.board[i + 10].isShot &&
          !cleverTargets.includes(i + 10)
        ) {
          cleverTargets.push(i + 10);
        }
      }
    });
      
    let randomNum =
      cleverTargets[Math.floor(Math.random() * cleverTargets.length)];
    while (
      previousAttacks.includes(randomNum) ||
      gameboard.board[randomNum].isShot
    ) {
      randomNum =
        cleverTargets[Math.floor(Math.random() * cleverTargets.length)];
    }
    previousAttacks.push(randomNum);
    const attackResult = gameboard.receiveAttack(randomNum);
    
    cleverTargets = cleverTargets.filter((val) => val !== randomNum);
    return {
      randomNum,
      attackResult,
    };
  };

  return {
    attack,
    get previousAttacks() {
      return previousAttacks;
    },
    get cleverTargets() {
      return cleverTargets;
    },
  };
};
