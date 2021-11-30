let countries = ['Nigeria', 'Canada', 'Brazil', 'Australia'];
let populations = [206.1, 38, 212.6, 25.6];
const worldPopulation = 7900;

function populationPercentages(popArray) {
    let percentages = [];
    let percentage;
    for (let population of popArray) {
        percentage = ((population / worldPopulation) * 100).toFixed(1);
        percentages.push(parseFloat(percentage));
    }
    return percentages;
}
console.log(populationPercentages(populations));