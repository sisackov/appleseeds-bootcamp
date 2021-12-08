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
    console.log(data);
    for (const swc of data) {
        let person = new swCharacter(
            swc.name,
            swc.height,
            swc.hair_color,
            swc.planetName,
            swc.planetPopulation
        );
        swCharacters.push(person);
    }
}

function createTitleRow() {
    const row = document.createElement('div');
    row.classList.add('title-row');
    row.innerText = 'Star Wars Characters';
    document.querySelector('body').prepend(row);
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

function createTable() {
    createTitleRow();
    keys.forEach((key) => {
        const row = document.createElement('div');
        for (let i = -1; i < swCharacters.length; i++) {
            if (i < 0) {
                row.appendChild(createTableCell(key, i));
            } else if (key === 'Planet Name') {
                const planetCell = createTableCell(
                    swCharacters[i].planet.name,
                    i
                );
                planetCell.dataset.planetOf = swCharacters[i].name;
                row.appendChild(planetCell);
            } else if (key === 'Planet Population') {
                const popCell = createTableCell(
                    swCharacters[i].planet.population,
                    i
                );
                popCell.dataset.populationOf = swCharacters[i].name;
                row.appendChild(popCell);
            } else {
                row.appendChild(
                    createTableCell(swCharacters[i][key.toLowerCase()], i)
                );
            }
        }
        tableContainer.appendChild(row);
    });
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

function createCardBody(data) {
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = data.login;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = `Public Repos: ${data.repos_data.length}`;
    cardBody.appendChild(cardText);

    const cardLink = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.href = data.html_url;
    cardLink.innerText = 'Github Profile';
    cardBody.appendChild(cardLink);

    return cardBody;
}

function createUserCard(data) {
    const card = document.createElement('div');
    card.classList.add('card', 'm-3', 'w-25');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = data.avatar_url;
    img.alt = data.login + ' avatar';
    card.appendChild(img);

    const cardBody = createCardBody(data);

    card.appendChild(cardBody);
    return card;
}

const fetchPlanet = async (swc) => {
    const response = await fetch(swc.homeworld);
    const data = await extractJson(response);
    swc.planetName = data.name;
    swc.planetPopulation = data.population;
    document.querySelector('div[data-planet-of="' + swc.name + '"]').innerText =
        data.name;
    document.querySelector(
        'div[data-population-of="' + swc.name + '"]'
    ).innerText = data.population;

    console.log(swc);
};

const fetchData = async (searchName) => {
    try {
        const url = `https://swapi.dev/api/people`;
        const response = await fetchUrl(url);
        const data = await extractJson(response);
        // console.log(data);

        data.results.forEach((swc) => {
            fetchPlanet(swc);
        });

        fillSwCaracters(data.results);
        createTable();
    } catch (error) {
        console.log(error);
    }
};

fetchData('jedi');
