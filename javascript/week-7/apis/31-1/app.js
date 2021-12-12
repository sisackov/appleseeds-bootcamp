const tableContainer = document.createElement('div');
tableContainer.classList.add('table', 'd-grid');
document.querySelector('body').appendChild(tableContainer);

class swCharacter {
    constructor(name, height, hair, planet, population) {
        this.name = name;
        this.height = height;
        this.hair = hair;
        this.planet = {
            name: planet,
            population: population,
        };
    }
}
const keys = ['Name', 'Height', 'Hair', 'Planet Name', 'Planet Population'];
const swCharacters = [];

function fillSwCaracters(data) {
    for (const swc of data) {
        let person = new swCharacter(
            swc.name,
            swc.height + ' cm',
            swc.hair_color,
            swc.planetName,
            swc.planetPopulation
        );
        swCharacters.push(person);
    }
}

function createTableCell(value, rowNum) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (rowNum < 0) {
        cell.classList.add(`row-header`);
    } else {
        cell.classList.add(`row-${rowNum % 2}`);
    }
    cell.innerText = value ? value : 'Loading...';

    return cell;
}

function createTableHeader() {
    const row = document.createElement('div');
    row.classList.add('title-row');
    row.innerText = 'Star Wars Characters';
    document.querySelector('body').prepend(row);
    keys.forEach((key) => {
        tableContainer.appendChild(createTableCell(key, -1));
    });
}

function populateTable(rowNum = 0) {
    // for (const swc of swCharacters) {
    for (; rowNum < swCharacters.length; rowNum++) {
        const swc = swCharacters[rowNum];
        tableContainer.appendChild(createTableCell(swc.name, rowNum));
        tableContainer.appendChild(createTableCell(swc.height, rowNum));
        tableContainer.appendChild(createTableCell(swc.hair, rowNum));
        tableContainer.appendChild(createTableCell(swc.planet.name, rowNum));
        tableContainer.appendChild(
            createTableCell(swc.planet.population, rowNum)
        );
    }
}

const fetchUrl = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
};

const extractJson = async (response) => {
    const json = await response.json();
    if (json.error) {
        throw new Error(json.error.message);
    }
    return json;
};

const fetchPlanet = async (swc) => {
    const response = await fetch(swc.homeworld);
    const data = await extractJson(response);
    return data;
};

const fetchData = async (page = 1) => {
    try {
        const url = `https://swapi.dev/api/people/`;
        const response = await fetchUrl(url);
        const data = await extractJson(response);

        let planetsFetch = [];
        data.results.forEach((swc) => {
            planetsFetch.push(fetchPlanet(swc));
        });

        const planets = await Promise.all(planetsFetch);
        for (let i = 0; i < planets.length; i++) {
            //TODO move to function
            data.results[i].planetName = planets[i].name;
            data.results[i].planetPopulation = planets[i].population;
        }
        // console.log(planets);

        fillSwCaracters(data.results);
        populateTable(10 * (page - 1));
    } catch (error) {
        console.log(error);
    }
};

createTableHeader();
fetchData(1);
