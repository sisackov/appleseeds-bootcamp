const worldPopulation = 7900;

function percentageOfWorld1(country, population) {
  let percentage = ((population / worldPopulation) * 100).toFixed(1);
  return `${country}'s precentage of the world population is ${percentage}%`;
}

console.log(`               percentageOfWorld1                     `);
console.log(percentageOfWorld1("China", 1441));
console.log(percentageOfWorld1("Nigeria", 206.1));
console.log(percentageOfWorld1("Canada", 38));
console.log(percentageOfWorld1("Brazil", 212.6));

const percentageOfWorld2 = (country, population) =>
  `${country}'s precentage of the world population is\
   ${((population / worldPopulation) * 100).toFixed(1)}%`;

console.log(`               percentageOfWorld2                     `);
console.log(percentageOfWorld2("China", 1441));
console.log(percentageOfWorld2("Nigeria", 206.1));
console.log(percentageOfWorld2("Canada", 38));
console.log(percentageOfWorld2("Brazil", 212.6));
