const populations = [206.1, 38, 212.6, 25.6];
const worldPopulation = 7900;

/**
 * @param {Array.<number>} popArray array of populations(in mil.) of different countries
 * @returns {Array.<number>} array of countries population as percentages of world population
 */
function populationPercentages(popArray) {
    popArray = popArray.slice();//use copy
    let percentages = [];
    let percentage;
    while (popArray.length > 0) {
        let population = popArray.shift();//removes the first item from array
        percentage = ((population / worldPopulation) * 100).toFixed(1);
        percentages.push(parseFloat(percentage));
    }
    return percentages;
}

console.log(populationPercentages(populations));