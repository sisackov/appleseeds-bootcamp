let sarah = {
    language: 'english',
    population: 50,
    isIsland: false
}

function countryToLiveIn(language, isIsland, population, country) {
    if (sarah.language === language &&
        sarah.isIsland === isIsland &&
        sarah.population > population) {
        return `You should live in ${country}`;
    }
    return `${country} does not meet your criteria`;
}

console.log(countryToLiveIn('english', true, 26, 'Australia'));
console.log(countryToLiveIn('portuguese', false, 212, 'Brazil'));
console.log(countryToLiveIn('english', false, 38, 'Canada'));
