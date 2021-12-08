const body = document.querySelector('body');
const button = document.createElement('button');
button.innerText = 'Show me a joke';
const h1 = document.createElement('h1');
const p = document.createElement('p');
body.appendChild(button);
body.appendChild(h1);
body.appendChild(p);

const fetchUrl = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
};

const showJoke = (data) => {
    const joke = data.contents.jokes[0].joke;
    h1.innerText = joke.title;
    p.innerText = joke.text;
};

async function fetchJoke() {
    try {
        const response = await fetchUrl('https://api.jokes.one/jod');
        const json = await response.json();
        showJoke(json);
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', fetchJoke);
