function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}

let nigeria = describeCountry("Nigeria", "206.1 million", "Abuja");
let canada = describeCountry("Canada", "38 million", "Ottawa");
let brazil = describeCountry("Brazil", "212.6 million", "Brasilia");
console.log(nigeria);
console.log(canada);
console.log(brazil);
