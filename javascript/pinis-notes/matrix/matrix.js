for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    console.log("row", row, "col", col);
  }
}

const matrix = [
  [1, 2, 3, 4],
  ["hello", "hi", "bye", "ciao"],
  [7655, 74554, 63434, 733],
  [10, 11, 12, 13],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
console.log(matrix[1][3]);
