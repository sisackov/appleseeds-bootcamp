const API_KEY = '39a4ac3';
const form = document.querySelector('#input-form');
const textSearch = document.querySelector('#text-search');
const searchButton = document.querySelector('#search-button');
const cardContainer = document.querySelector('#card-container');
const errorMessage = document.createElement('div');
errorMessage.classList.add('alert-danger', 'ml-3', 'p-3');
const searchHistory = [];
const displayItems = {
    Genre: 'Genre',
    Plot: 'Plot',
    Actors: 'Actors',
    Writer: 'Writer',
    Director: 'Director',
    Awards: 'Awards',
    Ratings: 'Ratings',
    Metascore: 'Metascore',
    imdbRating: 'IMDB Rating',
};

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
    cardBody.classList.add('card-body', 'w-50');
    console.log(data);

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = data.Title;
    cardBody.appendChild(cardTitle);

    const ul = document.createElement('ul');
    ul.classList.add('p-3');
    for (const key in displayItems) {
        const title = displayItems[key];
        if (key === 'Ratings') {
            const ratingsUl = document.createElement('ul');
            for (const rating of data[key]) {
                const innerLi = document.createElement('li');
                innerLi.innerText = `${rating.Source}: ${rating.Value}`;
                ratingsUl.appendChild(innerLi);
            }
            ul.appendChild(ratingsUl);
        } else {
            const li = document.createElement('li');
            li.innerText = `${title}: ${data[key]}`;
            ul.appendChild(li);
        }
    }
    cardBody.appendChild(ul);

    console.log(data);
    const cardLink = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.target = '_blank';
    cardLink.href = `https://www.imdb.com/title/${data.imdbID}`;
    cardLink.innerText = 'IMDB Site';
    cardBody.appendChild(cardLink);

    return cardBody;
}

function createMovieCard(data) {
    const card = document.createElement('div');
    card.classList.add('card', 'm-3', 'h-25');

    const cardBody = createCardBody(data.imdb_data);
    card.appendChild(cardBody);

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = data.Poster;
    img.alt = data.Title + ' poster';
    card.appendChild(img);

    return card;
}

const searchMovie = async (searchText) => {
    try {
        if (cardContainer.hasChildNodes()) {
            //clear the container before next search
            cardContainer.removeChild(cardContainer.firstChild);
        }

        if (searchHistory.includes(searchText)) {
            throw new Error(`${searchText} already been searched`);
        }

        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`;
        const response = await fetchUrl(url);
        const data = await extractJson(response);
        console.log(data);
        const movie = data.Search[0];

        url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`;
        const imdbResponse = await fetchUrl(url);
        const imdbData = await extractJson(imdbResponse);
        movie.imdb_data = imdbData;

        cardContainer.appendChild(createMovieCard(movie));

        resetTextSearch();
        searchHistory.push(searchText);
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
    searchMovie(textSearch.value);
});

textSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchMovie(textSearch.value);
    }
});

textSearch.addEventListener('focus', () => {
    if (errorMessage.parentNode) {
        //if errorMessage is already in the DOM
        form.removeChild(errorMessage);
    }
});
