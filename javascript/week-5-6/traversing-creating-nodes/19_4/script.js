document.querySelector('title').textContent = 'JS WEB';

let body = document.querySelector('body');

let pageContainer = document.createElement('div');
let header = document.createElement('header');
let h1 = document.createElement('h1');
let main = document.createElement('main');
let img = document.createElement('img');
let footer = document.createElement('footer');
let span = document.createElement('span');

body.appendChild(pageContainer);
body.style.backgroundColor = '#f2f2f2';
body.style.textAlign = 'center';
pageContainer.appendChild(header);
pageContainer.appendChild(main);
pageContainer.appendChild(footer);

h1.textContent = 'Dynamically Created Page';
h1.style.color = 'magenta';
header.appendChild(h1);

img.src = `https://source.unsplash.com/1840x760/?wallpaper`;
img.style.objectFit = 'cover';
main.appendChild(img);

span.textContent = '@sisackov';
span.style.fontSize = '2.3rem';
span.style.color = 'blue';
footer.appendChild(span);
