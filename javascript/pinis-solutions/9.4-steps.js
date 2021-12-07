const steps = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i) + " ".repeat(n - i));
  }
};
// console.log(steps(3));

const steps2 = (n) => {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (row >= column) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
};
// console.log(steps2(3));
