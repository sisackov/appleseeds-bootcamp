const body = document.querySelector('body');
const button = document.createElement('button');
button.innerText = 'Show me a joke';
const h1 = document.createElement('h1');
const p = document.createElement('p');
body.appendChild(button);
body.appendChild(h1);
body.appendChild(p);

const showJoke = async (data) => {
    const joke = data.contents.jokes[0].joke;
    h1.innerText = joke.title;
    p.innerText = joke.text;
};

async function fetchJoke() {
    try {
        const response = await fetch('https://api.jokes.one/jod');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        await showJoke(json);
    } catch (error) {
        console.log(error);
    }
}

/* async function showJoke(data) {
    const joke = data.contents.jokes[0].joke;
    console.table(joke);
    h1.innerText = joke.title;
    p.innerText = joke.text;
} */

button.addEventListener('click', fetchJoke);
