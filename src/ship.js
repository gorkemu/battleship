export const Ship = (length) => {
  let hits = 0;

  const hit = () => {
    hits++;
  };

  const isSunk = () => {
    return hits >= length;
  };

  return {
    get hits() {
      return hits;
    },
    get length() {
      return length;
    },
    hit,
    isSunk,
  };
};
