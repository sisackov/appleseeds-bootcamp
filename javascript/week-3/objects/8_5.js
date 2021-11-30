let book = {
    name: 'Catch-22',
    author: 'Joseph Heller',
    year: 1961,
    latestEdition: 1974,
    translator: 'Shaul Tchernichovsky',
    language: 'hebrew',
    publisher: 'Penguin Classics',
    location: 'London, England'
}

function swapKeyValue(obj) {
    let swapped = {};
    for (const key in obj) {
        swapped[obj[key]] = key;
    }
    return swapped;
}

console.log(book);
console.log(swapKeyValue(book));