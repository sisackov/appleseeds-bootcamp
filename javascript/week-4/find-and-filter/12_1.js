var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];


library
    .filter(book => book.readingStatus)
    .forEach(book => console.log(`"${book.title}" by ${book.author}, readingStatus - ${book.readingStatus}`));


// filter creates a 
// *new array 
// with all elements that pass the test implemented by the provided function