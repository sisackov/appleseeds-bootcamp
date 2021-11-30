const users = [
    {
        id: 167464,
        firstName: 'Jimmy',
        lastName: 'Arnold',
        email: 'jimmya@gmail.com',
    },
    {
        id: 578447,
        firstName: 'Martha',
        lastName: 'Goldman',
        email: 'gold@hotmail.com',
    },
    {
        id: 864578,
        firstName: 'Tim',
        lastName: 'Burton',
        email: 'timmy.hotmail.com',
    },
];

const div = document.createElement('div');
document.querySelector('body').appendChild(div);
const ol = document.createElement('ol');
document.querySelector('body').appendChild(ol);

/* 1. Loop over the array with the forEach method and dynamically
create an ordered list of the first and last names from the objects */
users.forEach((user) => {
    let li = document.createElement('li');
    li.textContent = `${user.firstName} ${user.lastName}`;
    ol.appendChild(li);
});

/* 2. Remove the bullet points of the ordered list with javaScript. */
ol.style.listStyleType = 'none';

/* Create a custom data attribute called “data-id” and attach the id
value to each li */
document.querySelectorAll('li').forEach((elem, index) => {
    elem.setAttribute('data-id', users[index].id);
});
