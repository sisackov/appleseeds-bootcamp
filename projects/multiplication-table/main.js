/**
 * Multiplication Table of rows x columns
 */

const rows = 10;
const columns = 20;
const table = document.querySelector('#mult-table');
let output = '';
for (let i = 1; i <= rows; i++) {
    output += `<tr>`;
    for (let j = 1; j <= columns; j++) {
        if (i === 1 && j === 1) {
            output += `<th>&times;</th>`;
        } else if (i === 1 || j === 1) {
            output += `<th>${i * j}</th>`;
        } else {
            output += `<td>${i * j}</td>`;
        }
    }
    output += `</tr>`;
}

table.innerHTML = output;

const tdElements = document.querySelectorAll('td');

/**
 * add event listener to all td elements that will change the background color
 * of the cell when the mouse is over it to orange and back to white when the
 * mouse is out of the cell.
 * It will also change the color of the header cells to gold and back to white.
 */
tdElements.forEach((td) => {
    td.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '#e52';
        e.target.parentNode.firstChild.style.backgroundColor = 'gold';
        e.target.parentNode.parentNode.firstChild.childNodes[
            e.target.cellIndex
        ].style.backgroundColor = 'gold';
    });

    td.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = '#fff';
        e.target.parentNode.firstChild.style.backgroundColor = '#fff';
        e.target.parentNode.parentNode.firstChild.childNodes[
            e.target.cellIndex
        ].style.backgroundColor = '#fff';
    });
});
