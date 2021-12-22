export const defaultArr = (length, value) => new Array(length).fill(value);
export const nextTurn = (turn, length) => (turn === length ? 0 : turn + 1);
