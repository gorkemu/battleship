export const Ship = (length) => {
  let hits = 0;

  const hit = () => {
    hits++;
  };

  const isSunk = () => {
    return hits >= length;
  };

  return {
    get length() {
      return length;
    },
    get hits() {
      return hits;
    },
    hit,
    isSunk,
  };
};
