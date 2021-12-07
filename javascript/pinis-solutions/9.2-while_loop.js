const populations = [10, 1441, 332, 83];
const percentageOfWorld1 = (population) => {
  return (population / 7900) * 100;
};
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
