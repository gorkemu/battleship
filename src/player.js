import { Gameboard } from "./gameboard";

export const Player = (name) => {
  const attack = (gameboard, position) => {
    if (!gameboard.board[position].isShot) {
      gameboard.receiveAttack(position);
    }
  };

  const randomAttack = (gameboard) => {
    let randomNum = Math.floor(Math.random() * 100);

    while (gameboard.board[randomNum].isShot) {
      randomNum = Math.floor(Math.random() * 100);
    }
    gameboard.receiveAttack(randomNum);
  };

  return { name, attack, randomAttack };
};
