const form = document.querySelector('#input-form');
const textSearch = document.querySelector('#text-search');
const searchButton = document.querySelector('#search-button');
const cardContainer = document.querySelector('#card-container');
const errorMessage = document.createElement('div');
errorMessage.classList.add('alert-danger', 'ml-3', 'p-3');
const searchHistory = [];

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

const searchUser = async (searchName) => {
    try {
        if (searchHistory.includes(searchName)) {
            throw new Error('User already been searched');
        }

        const url = `https://api.github.com/search/users?q=${searchName}`;
        const response = await fetchUrl(url);
        const data = await extractJson(response);
        const user = data.items[0];

        const repos = await fetchUrl(user.repos_url);
        const reposData = await extractJson(repos);
        reposData.sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        ); //sort by updated_at
        user.repos_data = reposData;

        cardContainer.appendChild(createUserCard(user));

        resetTextSearch();
        searchHistory.push(searchName);
    } catch (error) {
        displayError(error);
    }
};

function resetTextSearch() {
    textSearch.value = '';
    textSearch.focus();
}

function displayError(error) {
    errorMessage.innerText = error.message;
    form.appendChild(errorMessage);
}

searchButton.addEventListener('click', () => {
    searchUser(textSearch.value);
});

textSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchUser(textSearch.value);
    }
});

textSearch.addEventListener('focus', () => {
    if (errorMessage.parentNode) {
        //if errorMessage is already in the DOM
        form.removeChild(errorMessage);
    }
});
