const boom = (n) => {
  for (let i = 1; i <= n; i++) {
    const isSeven = String(i).split("").includes("7");
    if (i % 7 === 0 && isSeven) {
      console.log("boom-boom");
    } else if (i % 7 === 0) {
      console.log("boom");
    } else {
      console.log(i);
    }
  }
};

boom(18);
