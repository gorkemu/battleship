export const Player = () => {
  let previousAttacks = [];
  const attack = (gameboard, position) => {
    if (!gameboard.board[position].isShot) {
      previousAttacks.push(position);
      gameboard.receiveAttack(position);
    }
  };
  return {
    attack,
    previousAttacks,
  };
};

export const AI = () => {
  let previousAttacks = [];
  const randomAttack = (gameboard) => {
    let randomNum = Math.floor(Math.random() * 100);

    while (
      gameboard.board[randomNum].isShot ||
      previousAttacks.includes(randomNum)
    ) {
      randomNum = Math.floor(Math.random() * 100);
    }
    previousAttacks.push(randomNum);
    gameboard.receiveAttack(randomNum);
    return randomNum;
  };
  return {
    randomAttack,
    previousAttacks,
  };
};
