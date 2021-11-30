let book = {
    title: 'Catch-22',
    author: 'Joseph Heller',
    genre: 'Dark comedy',
    publishingDate: new Date(1961, 11, 10)
}

function describeBook(book) {
    return `The book ${book.title} was written by ${book.author} in\
 the year ${book.publishingDate.getFullYear()}`;
}

console.log(describeBook(book))